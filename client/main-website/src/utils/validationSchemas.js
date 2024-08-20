import * as Yup from "yup";
export const waitingListSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone is required"),
});

const today = new Date();

// export const setupProfileStepOneSchema = Yup.object({
//   username: Yup.string().required("Username is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email Is required"),
//   phone: Yup.string().required("Phone is required"),
//   gender: Yup.string().required("Required"),
//   dob: Yup.date()
//     .max(today, "Date of birth must be on or before today")
//     .required("Date of birth is required"),
//   companyname: Yup.string().required("Required"),
//   languages: Yup.array()
//     .min(1, "Select at least one language")
//     .required("Select at least one language"),
//   proficiency: Yup.object().test(
//     "proficiency-check",
//     "Select proficiency for each language",
//     (value) => {
//       const selectedLanguages = Object.keys(value);
//       return selectedLanguages.every((language) => !!value[language]);
//     }
//   ),
//   gstNumber: Yup.string().required("Required"),
//   countryName: Yup.string().required("Required"),
//   cityName: Yup.string().required("Required"),
//   address: Yup.string().required("Required"),
//   translatorPreference: Yup.string().required("Required"),
//   description: Yup.string().required("Required"),
// });
export const setupProfileStepOneSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Is required"),
  phone: Yup.string().required("Phone is required"),
  gender: Yup.string().optional(),
  dob: Yup.date()
    .max(today, "Date of birth must be on or before today")
    .optional(),
  companyname: Yup.string().optional(),
  languages: Yup.array().optional(),
  proficiency: Yup.object()
    .test(
      "proficiency-check",
      "Select proficiency for each language",
      (value) => {
        const selectedLanguages = Object.keys(value);
        return selectedLanguages.every((language) => !!value[language]);
      }
    )
    .optional(),
  gstNumber: Yup.string().optional(),
  countryName: Yup.string().optional(),
  cityName: Yup.string().optional(),
  address: Yup.string().optional(),
  translatorPreference: Yup.string().optional(),
  description: Yup.string().optional(),
});
export const setupProfileStepTwoSchema = Yup.object({
  procedures: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one procedure.")
    .required("Procedures are required."),
  doctors: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one doctor.")
    .required("Doctors are required."),
  hospitals: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one hospital.")
    .required("Hospitals are required."),
});
export const setupProfileStepThreeSchema = Yup.object({
  rating: Yup.number()
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating cannot exceed 5.")
    .required("Rating is required."),
  reviewText: Yup.string()
    .min(10, "Review must be at least 10 characters.")
    .max(500, "Review cannot exceed 500 characters.")
    .required("Review is required."),
});
