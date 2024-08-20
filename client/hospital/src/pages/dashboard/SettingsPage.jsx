import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center w-[100%] gap-2">
        <h1 className="text-primary text-2xl font-semibold"> Setting</h1>
      </div>
      <div className="flex flex-col 600px:w-[50%] 300px:w-[85%] gap-2 mt-4">
        <div className="flex items-center 500px:gap-12 300px:gap-6">
          <img
            src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
            alt="profile image"
            className="800px:w-[150px] 800px:h-[150px] 300px:w-[100px] 300px:h-[100px] rounded-full object-cover"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl">Hospital</h1>
            <Link
              to={"/dashboard/edit-profile"}
              className="hover:bg-gray-200 px-4 py-2 text-sm rounded-md border-gray-200 border"
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <Link to={"/dashboard/hospital-profile-specialities"}>
          <div className="p-4 rounded-md border border-gray-300 text300px:sm flex items-center justify-between max-w-lg">
            <h1 className="text-gray-600 font-semibold">
              Hospital Specialities
            </h1>
            <h1 className="text-black font-semibold">$100</h1>
          </div>
        </Link>
        <Link
          to={"/dashboard/history"}
          className="p-4 rounded-md border border-gray-300 hover:bg-gray-200 hover:cursor-pointer flex items-center justify-between max-w-lg"
        >
          <h1 className="text-gray-600 font-semibold">History</h1>
        </Link>

        <div className="p-4 rounded-md border border-gray-300 flex items-center justify-between max-w-lg">
          <h1 className="text-gray-600 font-semibold">Notifications</h1>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>
        </div>
        <div className=" flex flex-col items-end w-[97%] mt-10">
          <button className="text-primary border border-primary rounded-3xl w-[50%] py-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
