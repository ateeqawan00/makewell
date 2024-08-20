import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email Address is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    username: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    dateOfBirth: {
      type: Date
    },
    languages: {
      type: [String]
    },
    country: {
      type: String
    },
    city: {
      type: String
    },
    address: {
      type: String
    },
    detailedDescription: {
      type: String
    },
    gender: {
      type: String
    },
    gstNumber: {
      type: String
    },
    geoPreference: {
      type: String,
      enum: ['specificRegion', 'globally']
    },
    geoPreferenceCity: {
      type: String
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v
      },
    },
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

export default User
