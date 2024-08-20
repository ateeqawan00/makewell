import mongoose from "mongoose"

const { Schema, model } = mongoose;

const HcfUserSchema = new Schema(
  {
    imgSrc: { type: String, required: false },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: false },
    dob: { type: Date, required: false },
    companyname: { type: String, required: false },
    languages: { type: Map, of: String, required: false }, // Dynamic languages
    proficiency: { type: Map, of: String, required: false }, // Dynamic proficiencies
    gstNumber: { type: String, required: false },
    countryName: { type: String, required: false },
    cityName: { type: String, required: false },
    address: { type: String, required: false },
    translatorPreference: { type: String, required: false },
    description: { type: String, required: false },
    procedures: { type: [String], required: false },
    hospitals: { type: [String], required: false },
    doctors: { type: [String], required: false },
    review: {
      rating: { type: Number, required: false },
      reviewText: { type: String, required: false },
    },
  },
  { timestamps: true }
);

const HcfUser = model("HcfUser", HcfUserSchema)

export default HcfUser