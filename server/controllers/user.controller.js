import Joi from "joi";
import {
  generateSalt,
  generatePassword,
  validatePassword,
} from "../utils/password.util.js";
import User from "../models/User.model.js";

import jwt from "jsonwebtoken";
import { upload } from "../utils/cloudinay.util.js";
import WaitingList from "../models/waitingListModel.js";
import { sendWelcomeMail } from "../services/mail/nodeMailer.js";

export const signup = async (req, res, next) => {
  const validation = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { firstName, lastName, password, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser !== null) {
      return res
        .status(400)
        .json({ message: "user with this email already exists." });
    }

    const salt = await generateSalt();
    const hashPassword = await generatePassword(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      password: hashPassword,
      email,
    });

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({ user, token, message: "signup successfull" });
  } catch (error) {
    console.log("signup error: ", error);
    return res.status(500).json({ error: error });
  }
};

export const login = async (req, res, next) => {
  const validation = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user === null) {
      return res.status(404).json({ message: "user not found." });
    }

    const isPasswordCorrect = validatePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "wrong credentials" });
    }
    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({ user, token, message: "login successfull" });
  } catch (error) {
    console.log("login error: ", error);
    return res.status(500).json({ error: error });
  }
};

export const updateUser = async (req, res, next) => {
  const validation = Joi.object({
    username: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    languages: Joi.array().items(Joi.string()).required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    detailedDescription: Joi.string().required(),
    gender: Joi.string().required(),
    gstNumber: Joi.string().required(),
    geoPreference: Joi.string().valid("specificRegion", "globally").required(),
    geoPreferenceCity: Joi.string().required(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const {
      username,
      phoneNumber,
      dateOfBirth,
      languages,
      country,
      city,
      address,
      detailedDescription,
      gender,
      gstNumber,
      geoPreference,
      geoPreferenceCity,
    } = req.body;

    const userId = req.user._id;
    let avatar = null;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "user not found." });
    }

    user.username = username;
    user.phoneNumber = phoneNumber;
    user.dateOfBirth = dateOfBirth;
    user.languages = languages;
    user.country = country;
    user.city = city;
    user.address = address;
    user.detailedDescription = detailedDescription;
    user.gender = gender;
    user.gstNumber = gstNumber;
    user.geoPreference = geoPreference;
    user.geoPreferenceCity = geoPreferenceCity;

    if (req.file) {
      avatar = await upload(req.file);
      user.avatar = avatar;
    }

    await user.save();

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.log("error updating the user: ", error);
    return res.status(500).json({ error });
  }
};

export const joinWaitList = async (req, res, next) => {
  try {
    // Check if the request body contains required fields
    const { fullName, email, phoneNumber } = req.body;
    if (!fullName || !email || !phoneNumber) {
      return res.status(400).json({
        message:
          "Incomplete data. Please provide fullName, email, and phoneNumber.",
      });
    }

    // Create a new document in the WaitingList collection
    const user = await WaitingList.create(req.body);
    await sendWelcomeMail(user.email);
    return res.status(200).json({ message: "waitlist joined" });
  } catch (error) {
    console.log("error joining waitlist : ", error);
    return res.status(500).json({ error });
  }
};
