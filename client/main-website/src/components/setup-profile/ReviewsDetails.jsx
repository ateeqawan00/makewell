/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { useFormik } from "formik";
import { setupProfileStepThreeSchema } from "../../utils/validationSchemas";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import axiosInstance from "../../utils/axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
const myStarStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const ReviewsDetails = ({ setData, data, handleChange, setTab, setActive }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      reviewText: "",
    },
    validationSchema: setupProfileStepThreeSchema,
    onSubmit: async (values) => {
      setData({ ...data, review: { ...values } });
      try {
        setLoading(true);
        const res = await axiosInstance.post(
          "/waiting-list/add-to-waiting-list",
          { ...data, review: { ...values } }
        );

        toast.success("Subscription Added For Waitlist");
      } catch (error) {
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else console.error("Error when fetching:", error);
      } finally {
        setLoading(false);
        // formik.resetForm();
        // navigate("/");
      }
      setTab("refferal");
      setActive(4);
    },
  });

  return (
    <div className="w-full mx-auto p-4 md:p-8 rounded-lg bg-white">
      <h1 className="text-primary text-[1.5rem] font-semibold">
        Add A Review{" "}
      </h1>

      {/* FORM AREA  */}
      <div className="flex gap-2 flex-col mt-2 w-full">
        <Rating
          style={{ maxWidth: 250 }}
          itemStyles={myStarStyles}
          value={formik.values.rating}
          onChange={(rate) => formik.setFieldValue("rating", rate)}
        />
        {formik.touched.rating && formik.errors.rating && (
          <div className="text-red-500">{formik.errors.rating}</div>
        )}
        <textarea
          name="reviewText"
          id="reviewText"
          cols="30"
          rows="5"
          placeholder="Write a review"
          className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reviewText}
        ></textarea>
        {formik.touched.reviewText && formik.errors.reviewText && (
          <div className="text-red-500">{formik.errors.reviewText}</div>
        )}
        {/* Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            disabled={loading}
            className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[250px]"
            onClick={formik.handleSubmit}
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Save"
            )}
          </button>
          <button
            onClick={() => {
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

export default ReviewsDetails;
