/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {
  doctorsNameData,
  indianHospitals,
  languagesData,
  medicalTreatments,
} from "../../../data/inputsData";
import { useFormik } from "formik";
import { setupProfileStepOneSchema } from "../../utils/validationSchemas";

const ProfileDetails = ({ setData, data, handleChange }) => {
  const formik = useFormik({
    initialValues: {
      imgSrc:
        "data:image/jpeg;base64,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",
      username: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      companyname: "",
      languages: [],
      proficiency: {},
      gstNumber: "",
      countryName: "",
      cityName: "",
      address: "",
      translatorPreference: "specificRegion",
      description: "",
      procedures: [],
      hospitals: [],
      doctors: [],
    },
    // validationSchema: setupProfileStepOneSchema,
    onSubmit: (values) => {
      let profileData = {
        ...data,
        ...values,
        languages: values.proficiency,
        imgSrc: "",
      };
      setData({ ...profileData });
    },
  });
  const handleProceduresChange = (event) => {
    formik.handleChange(event);
    const selectedProcedures =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;
    formik.setFieldValue("procedures", selectedProcedures);
  };
  const handleDoctorsChange = (event) => {
    formik.handleChange(event);
    const selectedProcedures =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;
    formik.setFieldValue("procedures", selectedProcedures);
  };
  const handleHospitalsChange = (event) => {
    formik.handleChange(event);
    const selectedHospitals =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;
    formik.setFieldValue("hospitals", selectedHospitals);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const dataURL = event.target.result;
        formik.handleChange(event);
        formik.setFieldValue("imgSrc", dataURL);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLanguageChange = (event) => {
    formik.handleChange(event);
    const selectedLanguages =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;
    formik.setFieldValue("languages", selectedLanguages);

    const proficiencyObj = {};
    selectedLanguages.forEach((language) => {
      proficiencyObj[language] = "easy";
    });
    formik.setFieldValue("proficiency", proficiencyObj);
  };

  // DYNAMIC HANDLER FOR PROFICIENCIES
  const handleProficiencyChange = (event, language) => {
    formik.handleChange(event);
    formik.setFieldValue(`proficiency.${language}`, event.target.value);
  };
  return (
    <div className="w-full mx-auto p-4 md:p-8 rounded-lg bg-white">
      {/* PROFILE IMAGE AREA  */}
      <div className="flex gap-3 content-center items-center 600px:justify-start justify-center mt-2 flex-wrap">
        <img
          src={formik.values.imgSrc}
          alt=""
          className="rounded-full w-[150px] object-cover h-[150px] "
        />
        <label
          className=" block w-[110] h-10 text-sm 
         px-3 py-2
        rounded-full  
         font-semibold
        bg-white  text-primary border border-primary 
        hover:bg-violet-100 hover:cursor-pointer text-nowrap items-center"
          id="profile-Input"
        >
          Choose Profile Picture
          <input
            type="file"
            id="profile-Input"
            className="hidden"
            onChange={handleImageChange}
            name="image"
          />
        </label>
      </div>
      {/* FORM AREA  */}
      <div className="flex items-center gap-2 flex-wrap mt-2 w-full">
        {/* Username */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username{" "}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="John"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500">{formik.errors.username}</div>
          )}
        </div>

        {/* Email */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="John@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone{" "}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="+91-XXXXXXX"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500">{formik.errors.phone}</div>
          )}
        </div>

        {/* Gender */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="gender"
            name="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option defaultValue={""}>Choose a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unspecified">Prefer Not To Say</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div className="text-red-500">{formik.errors.gender}</div>
          )}
        </div>

        {/* Date of Birth */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date Of Birth{" "}
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="+91-XXXXXXX"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="text-red-500">{formik.errors.dob}</div>
          )}
        </div>

        {/* Company Name */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="companyname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name{" "}
          </label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="az enterprises"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyname}
          />
          {formik.touched.companyname && formik.errors.companyname && (
            <div className="text-red-500">{formik.errors.companyname}</div>
          )}
        </div>

        {/* Languages Select */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="languages"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Languages{" "}
          </label>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">Languages</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              name="languages"
              value={formik.values.languages}
              onChange={handleLanguageChange}
              input={<OutlinedInput label="Languages" />}
              onBlur={formik.handleBlur}
              renderValue={(selected) => selected.join(", ")}
              sx={{ p: 0, m: 0 }}
            >
              {languagesData.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    checked={formik.values.languages.indexOf(name) > -1}
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.touched.languages && formik.errors.languages && (
            <div className="text-red-500">{formik.errors.languages}</div>
          )}
        </div>

        {/* Render proficiency selects based on selected languages */}
        {formik.values.languages.map((language) => (
          <div className="w-[350px] flex-grow" key={language}>
            <label
              htmlFor={language + "_proficiency"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select proficiency for {language}:
            </label>
            <Select
              id={language + "_proficiency"}
              name={`proficiency.${language}`}
              value={formik.values.proficiency[language] || ""}
              onChange={(event) => handleProficiencyChange(event, language)}
              fullWidth
              onBlur={formik.handleBlur}
              size="small"
              sx={{ p: 0, m: 0 }}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
            {formik.touched.proficiency && formik.errors.proficiency && (
              <div className="text-red-500">{formik.errors.proficiency}</div>
            )}
          </div>
        ))}

        {/* GST Number */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="gstNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GST Number{" "}
          </label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="A588DIE4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gstNumber}
          />
          {formik.touched.gstNumber && formik.errors.gstNumber && (
            <div className="text-red-500">{formik.errors.gstNumber}</div>
          )}
        </div>

        {/* Country Name */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="countryName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country{" "}
          </label>
          <input
            type="text"
            id="countryName"
            name="countryName"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="United States"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.countryName}
          />
          {formik.touched.countryName && formik.errors.countryName && (
            <div className="text-red-500">{formik.errors.countryName}</div>
          )}
        </div>

        {/* City Name */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="cityName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="Arizona"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cityName}
          />
          {formik.touched.cityName && formik.errors.cityName && (
            <div className="text-red-500">{formik.errors.cityName}</div>
          )}
        </div>

        {/* Address */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
            placeholder="St 85, West Bank, Arizona"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500">{formik.errors.address}</div>
          )}
        </div>

        {/* Translator Preference */}
        <div className="w-[350px] flex-grow">
          <label
            htmlFor="translatorPreference"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Geographical Preferences for Translation
          </label>
          <div className="flex items-center gap-2 flex-wrap font-semibold">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="translatorPreference"
                  className="radio checked:bg-primary"
                  defaultChecked
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="specificRegion"
                />
                <span className="label-text ml-2">Specific Region</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="translatorPreference"
                  className="radio checked:bg-primary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="globally"
                />
                <span className="label-text ml-2">Globally</span>
              </label>
            </div>
          </div>
          {formik.touched.translatorPreference &&
            formik.errors.translatorPreference && (
              <div className="text-red-500">
                {formik.errors.translatorPreference}
              </div>
            )}
        </div>
      </div>
      {formik.touched.description && formik.errors.description && (
        <div className="text-red-500">{formik.errors.description}</div>
      )}
      {/* ADDITIONAL AREA  */}
      <div className=" p-4 md:p-8 rounded-lg bg-white">
        {/* FORM AREA  */}
        <div className="flex gap-2 flex-col mt-2 w-full">
          {/* preferences Select */}
          <div className="max-w-[350px] flex-grow">
            <label
              htmlFor="procedures"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Procedures{" "}
            </label>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">
                Select Your Procedures
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                name="procedures"
                value={formik.values.procedures}
                onChange={handleProceduresChange}
                input={<OutlinedInput label="Select Your Procedures" />}
                onBlur={formik.handleBlur}
                renderValue={(selected) => selected.join(", ")}
                sx={{ p: 0, m: 0 }}
                MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }} // Set the maxHeight here
              >
                {medicalTreatments.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={formik.values.procedures.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.procedures && formik.errors.procedures && (
              <div className="text-red-500">{formik.errors.procedures}</div>
            )}
          </div>
          {/* hospitals Select */}
          <div className="max-w-[350px] flex-grow">
            <label
              htmlFor="hospitals"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hospitals{" "}
            </label>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">
                Select Your Hospitals
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                name="hospitals"
                value={formik.values.hospitals}
                onChange={handleHospitalsChange}
                input={<OutlinedInput label="Select Your Hospitals" />}
                onBlur={formik.handleBlur}
                renderValue={(selected) => selected.join(", ")}
                sx={{ p: 0, m: 0 }}
              >
                {indianHospitals.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={formik.values.hospitals.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.hospitals && formik.errors.hospitals && (
              <div className="text-red-500">{formik.errors.hospitals}</div>
            )}
          </div>
          {/* Render selected hospitals */}
          <div className="flex items-center gap-2 flex-wrap w-full">
            {formik.values.hospitals.map((hospital, index) => (
              <div
                className="p-4 rounded-lg border border-gray-200 flex items-center gap-4"
                key={index + 0.0652}
              >
                <img
                  src="https://i.ibb.co/6BgxYBg/hospi.webp"
                  alt="hospital image"
                  className="rounded-full object-cover w-[50px] h-[50px]"
                />
                <h1 className="font-semibold text-xs">{hospital}</h1>
              </div>
            ))}
          </div>
          {/* Doctor Select */}
          <div className="max-w-[350px] flex-grow">
            <label
              htmlFor="doctors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Doctors{" "}
            </label>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">
                Select Your Doctors
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                name="doctors"
                value={formik.values.doctors}
                onChange={handleDoctorsChange}
                input={<OutlinedInput label="Select Your Doctors" />}
                onBlur={formik.handleBlur}
                renderValue={(selected) => selected.join(", ")}
                sx={{ p: 0, m: 0 }}
              >
                {doctorsNameData.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={formik.values.doctors.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.doctors && formik.errors.doctors && (
              <div className="text-red-500">{formik.errors.doctors}</div>
            )}
          </div>{" "}
        </div>
      </div>{" "}
      {/* Description */}
      <div className="">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileDetails;
