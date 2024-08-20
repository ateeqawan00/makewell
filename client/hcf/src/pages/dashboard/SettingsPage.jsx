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
          <div className="relative">
            <input
              type="refLink"
              id="default-refLink"
              value={"http://www.traiwel.com"}
              className="block w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              disabled
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-primary focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Share My Profile
            </button>
          </div>
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
        <Link
          to={"/dashboard/refferal"}
          className="p-4 rounded-md border border-gray-300 hover:bg-gray-200 hover:cursor-pointer flex items-center justify-between max-w-lg"
        >
          <h1 className="text-gray-600 font-semibold">Refferals</h1>
        </Link>
        <div className="p-4 rounded-md border border-gray-300 flex items-center justify-between max-w-lg">
          <h1 className="text-gray-600 font-semibold">Notifications</h1>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
