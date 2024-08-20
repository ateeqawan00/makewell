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
  medicalTreatments,
} from "../../../data/inputsData";
import { useFormik } from "formik";
import { setupProfileStepTwoSchema } from "../../utils/validationSchemas";
import { Autocomplete, TextField } from "@mui/material";

const AdditionalDetails = ({
  setData,
  data,
  handleChange,
  setTab,
  setActive,
}) => {
  const formik = useFormik({
    initialValues: {
      procedures: [],
      hospitals: [],
      doctors: [],
    },
    validationSchema: setupProfileStepTwoSchema,
    onSubmit: (values) => {
      // setData({ ...data, ...values, languages: values.proficiency });
      setData({ ...data, ...values });
      setTab("reviews");
      setActive(3);
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
  return (
    <div className="w-full mx-auto p-4 md:p-8 rounded-lg bg-white">
      <h1 className="text-primary text-[1.5rem] font-semibold">
        Set-up Your Profile
      </h1>

      {/* FORM AREA  */}
      <div className="flex gap-2 flex-col mt-2 w-full">
        {/* preferences Select */}
        <div className="max-w-[400px] flex-grow">
          <label
            htmlFor="procedures"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Procedures{" "}
          </label>
          <Autocomplete
            multiple
            limitTags={1}
            id="multiple-limit-tags"
            options={medicalTreatments}
            value={formik.values.procedures}
            onChange={(event, newValue) => {
              formik.setFieldValue("procedures", newValue);
            }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Your Procedures"
                placeholder="Search"
              />
            )}
            sx={{ maxWidth: "500px" }}
          />
          {formik.touched.procedures && formik.errors.procedures && (
            <div className="text-red-500">{formik.errors.procedures}</div>
          )}
        </div>
        {/* hospitals Select */}
        <div className="max-w-[400px] flex-grow">
          <label
            htmlFor="hospitals"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hospitals{" "}
          </label>
          <Autocomplete
            multiple
            limitTags={1}
            id="multiple-limit-tags"
            options={indianHospitals}
            value={formik.values.hospitals}
            onChange={(event, newValue) => {
              formik.setFieldValue("hospitals", newValue);
            }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Your Hospitals"
                placeholder="Search"
              />
            )}
            sx={{ maxWidth: "500px" }}
          />
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
        <div className="max-w-[400px] flex-grow">
          <label
            htmlFor="doctors"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Doctors{" "}
          </label>
          <Autocomplete
            multiple
            limitTags={1}
            id="multiple-limit-tags"
            options={doctorsNameData}
            value={formik.values.doctors}
            onChange={(event, newValue) => {
              formik.setFieldValue("doctors", newValue);
            }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Your Doctors"
                placeholder="Search"
              />
            )}
            sx={{ maxWidth: "500px" }}
          />
          {formik.touched.doctors && formik.errors.doctors && (
            <div className="text-red-500">{formik.errors.doctors}</div>
          )}
        </div>{" "}
        {/* Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[250px]"
            onClick={formik.handleSubmit}
          >
            Save{" "}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(formik.values);
            }}
            className="rounded-2xl mt-4 flex-grow text-primary px-6 py-3 bg-white border border-primary flex items-center justify-center w-fit max-w-[250px]"
          >
            Cancel{" "}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default AdditionalDetails;
