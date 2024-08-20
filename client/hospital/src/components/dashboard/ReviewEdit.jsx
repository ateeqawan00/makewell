/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const myStarStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const ReviewsEdit = () => {
  const [rating, setRating] = React.useState(2);
  const [reviewText, setReviewText] = React.useState("");

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
          value={rating}
          onChange={(rate) => setRating(rate)}
        />
        {/* No formik.touched or formik.errors */}
        <textarea
          name="reviewText"
          id="reviewText"
          cols="30"
          rows="5"
          placeholder="Write a review"
          className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  flex-grow p-2.5"
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
        {/* No formik.touched or formik.errors */}
        {/* Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[250px]">
            Save
          </button>
          <button className="rounded-2xl mt-4 flex-grow text-primary px-6 py-3 bg-white border border-primary flex items-center justify-center w-fit max-w-[250px]">
            Cancel{" "}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ReviewsEdit;
