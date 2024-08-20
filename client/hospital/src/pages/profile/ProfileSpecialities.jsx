import React, { useState } from "react";
import SpecialityPopup from "./SpecialityPopup";
const ProfileSpecialities = () => {
  const [showModel, setShowModel] = useState(false);
  const handlePopup = (event) => {
    event.preventDefault();
    setShowModel(true);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className=" p-16 w-[50%] bg-white rounded-lg shadow-md">
        <div className="flex flex-col text-left items-start">
          <h2 className="text-center text-2xl font-semibold mb-6 text-primary">
            Medical Specialities
          </h2>
        </div>
        <form className="flex flex-col gap-20">
          <button
            onClick={handlePopup}
            className=" bg-primary w-[30%] text-center text-white py-2 px-3 rounded-3xl text-sm"
            type="submit"
          >
            +Create Category
          </button>
          {showModel && (
            <SpecialityPopup
              onClose={() => {
                setShowModel(false);
              }}
            />
          )}
          <button className="bg-primary text-white font-semibold rounded-3xl py-2 w-[90%]">
            Step 1/2
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default ProfileSpecialities;
