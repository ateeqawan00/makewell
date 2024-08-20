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

  const handleLanguageChange = (event) => {
    const selected = event.target.value;
    setSelectedLanguages(selected);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-6 text-primary">
        Set up your Profile
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
        id="profile-photo"
      />
      <label htmlFor="profile-photo" className="cursor-pointer">
        <div className="flex justify-center mb-4">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-zinc-200">
            {profilePhoto ? (
              <img
                src={URL.createObjectURL(profilePhoto)}
                alt="Profile Photo"
              />
            ) : (
              <img
                src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
                alt="Profile Photo"
                className="object-cover w-[150px] h-[150px]"
              />
            )}
          </div>
        </div>
      </label>
      <p className="text-center text-sm text-zinc-600 mb-6">
        Upload Profile Photo
      </p>
      <form>
        <div className="mb-4">
          <label
            className="block text-zinc-700 text-sm font-bold mb-2"
            htmlFor="date-of-birth"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="date-of-birth"
            name="date-of-birth"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-zinc-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Select your Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="block appearance-none w-full bg-white border border-zinc-400 hover:border-zinc-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-8 flex-grow">
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
              value={selectedLanguages}
              onChange={handleLanguageChange}
              input={<OutlinedInput label="Languages" />}
              renderValue={(selected) => selected.join(", ")}
              sx={{ p: 0, m: 0 }}
            >
              {languagesData.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedLanguages.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-primary hover:bg-primary/75 text-white font-bold py-2 px-4 w-full rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
