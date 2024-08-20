import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Profile Settings</h1>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-12">
          <img
            src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
            alt="profile image"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl">Mr Khan</h1>
            <Link
              to={"/dashboard/edit-profile"}
              className="hover:bg-gray-200 p-2 rounded-md border-gray-200 border"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <form className="max-w-lg">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
        </form>
        <div className="p-4 rounded-md border border-gray-300 flex items-center justify-between max-w-lg">
          <h1 className="text-gray-600 font-semibold">Wallet</h1>
          <h1 className="text-black font-semibold">$100</h1>
        </div>
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
          </div>{" "}
        </div>
        <div className="flex items-center justify-center px-6 py-2 border w-fit border-primary text-primary bg-white rounded-3xl hover:bg-gray-200 hover:cursor-pointer">
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
