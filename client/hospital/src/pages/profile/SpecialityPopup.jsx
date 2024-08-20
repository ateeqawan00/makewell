import React, { useState } from "react";

const SpecialityPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    specialist: "",
    cost: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save form data to your backend or perform any other action
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col justify-center rounded-lg py- items-center w-[50%] py-16 bg-white">
        <div className="w-[90%]">
          <h2 className="text-left  text-2xl font-medium  mb-6 text-primary">
            Add Category
          </h2>
        </div>
        <form className="flex flex-col gap-3 w-[90%] ">
          <div className=" flex-grow">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Specialities
            </label>
            <input
              type="specialist"
              id="specialist"
              name="specialist"
              value={formData.specialist}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Medical Specialties like Cardiology, Urology etc"
            />
          </div>
          <div className="mb-8 flex-grow">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cost
            </label>
            <input
              type="cost"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Estimate Medical Cost"
            />
          </div>
          <div className="flex justify-center gap-2">
            <button
              onClick={onClose}
              className="bg-transparent text-primary border-none font-semibold rounded-3xl py-2 w-[25%]"
            >
              Cancel
            </button>{" "}
            <button
              onClick={handleSubmit}
              className="bg-transparent border border-primary  text-primary font-semibold rounded-3xl py-2 w-[25%]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecialityPopup;
