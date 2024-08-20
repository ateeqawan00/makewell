import { useState } from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { languagesData } from "../../../data/inputsData";

const SignUp = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col text-left items-start">
        <h2 className="text-center text-2xl font-semibold mb-6 text-primary">
          Set up your Profile
        </h2>
        <p className="text-center text-sm text-zinc-600 mb-6">
          Upload Hospital Pictures
        </p>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
        id="profile-photo"
      />
      <label htmlFor="profile-photo" className="cursor-pointer">
        <div className="flex justify-center mb-4">
          <div className="w-[100%] h-[250px] shadow-lg rounded-lg overflow-hidden ">
            {profilePhoto ? (
              <img
                className="w-[100%]"
                src={URL.createObjectURL(profilePhoto)}
                alt="Profile Photo"
              />
            ) : (
              <img
                src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
                alt="Profile Photo"
                className="object-cover w-[100%] h-[250px]"
              />
            )}
          </div>
        </div>
      </label>

      <form>
        <div className="mb-4">
          <label
            className="block text-zinc-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Hospital Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-zinc-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="location"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Hospital Location"
          />
        </div>
        <div className="mb-8 flex-grow">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Phone Number"
          />{" "}
        </div>
        <div className="mb-8 flex-grow">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="description"
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Hospital Description"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-primary hover:bg-primary/75 text-white font-bold py-2 px-4 w-full rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Step 1/2
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
