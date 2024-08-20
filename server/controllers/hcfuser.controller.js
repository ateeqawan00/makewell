import Joi from "joi"
import HcfUser from "../models/HcfUser.model.js"
import jwt from 'jsonwebtoken'
import { upload } from "../utils/cloudinay.util.js"
import { sendWelcomeMail } from "../services/mail/nodeMailer.js"

export const hcfSignup = async (req, res, next) => {
  const validation = Joi.object({
    // imgSrc: Joi.string().optional(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    gender: Joi.string().optional(),
    dob: Joi.date().optional(),
    companyname: Joi.string().optional(),
    languages: Joi.object().pattern(Joi.string(), Joi.string()).optional(),
    proficiency: Joi.object().pattern(Joi.string(), Joi.string()).optional(),
    gstNumber: Joi.string().optional(),
    countryName: Joi.string().optional(),
    cityName: Joi.string().optional(),
    address: Joi.string().optional(),
    translatorPreference: Joi.string().optional(),
    description: Joi.string().optional(),
    procedures: Joi.array().items(Joi.string()).optional(),
    hospitals: Joi.array().items(Joi.string()).optional(),
    doctors: Joi.array().items(Joi.string()).optional(),
    review: Joi.object({
      rating: Joi.number().optional(),
      reviewText: Joi.string().optional(),
    }).optional(),
  }).validate(req.body);

  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }

  try {
    const {
      // imgSrc,
      username,
      email,
      phone,
      gender,
      dob,
      companyname,
      languages,
      proficiency,
      gstNumber,
      countryName,
      cityName,
      address,
      translatorPreference,
      description,
      procedures,
      hospitals,
      doctors,
      review,
    } = req.body;

    const existingUser = await HcfUser.findOne({ email })

    if (existingUser !== null) {
      return res
        .status(400)
        .json({ message: "user with this email already exists." })
    }


    const newUser = new HcfUser({
      // imgSrc,
      username,
      email,
      phone,
      gender,
      dob,
      companyname,
      languages,
      proficiency,
      gstNumber,
      countryName,
      cityName,
      address,
      translatorPreference,
      description,
      procedures,
      hospitals,
      doctors,
      review,
    });

    if (req.file) {
      avatar = await upload(req.file)
      newUser.imgSrc = avatar
    }

    const savedUser = await newUser.save();

    await sendWelcomeMail(savedUser.email)

    const token = jwt.sign({ _id: savedUser._id, email }, process.env.JWT_KEY, { expiresIn: '30d' })

    return res.status(200).json({ savedUser, token, message: 'signup successfull' })
  } catch (error) {
    console.log("signup error: ", error)
    return res.status(500).json({ error: error })
  }
}