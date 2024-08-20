const ChangeAuthDetails = () => {
  return (
    <div className="w-full">
      <h1 className="text-[1rem] mb-2 font-semibold text-primary">
        Change Email
      </h1>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex-1 inline-block">
          <label
            htmlFor="changeEmail"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Change Email{" "}
          </label>
          <input
            type="email"
            id="changeEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[500px] 500px:min-w-[400px] p-2.5"
            placeholder="New Email"
          />{" "}
        </div>{" "}
        <div className="flex-1 inline-block">
          <label
            htmlFor="changeEmailConfirmPass"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password{" "}
          </label>
          <input
            type="password"
            id="changeEmailConfirmPass"
            className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[500px] 500px:min-w-[400px] p-2.5"
            placeholder="Confirm Password"
          />{" "}
        </div>{" "}
      </div>{" "}
      <h1 className="text-[1rem] mt-4 mb-2 font-semibold text-primary">
        Change Password
      </h1>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex-1 inline-block">
          <label
            htmlFor="oldPassword"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Old Password{" "}
          </label>
          <input
            type="password"
            id="oldPassword"
            className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[500px] 500px:min-w-[400px] p-2.5"
            placeholder="Old Password"
          />{" "}
        </div>{" "}
        <div className="flex-1 inline-block">
          <label
            htmlFor="newPass"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password{" "}
          </label>
          <input
            type="password"
            id="newPass"
            className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[500px] 500px:min-w-[400px] p-2.5"
            placeholder="New Password"
          />{" "}
        </div>{" "}
        <div className="flex-1 inline-block">
          <label
            htmlFor="confirmNewPass"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm New Password{" "}
          </label>
          <input
            type="password"
            id="confirmNewPass"
            className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[500px] 500px:min-w-[400px] p-2.5"
            placeholder="Confirm New Password"
          />{" "}
        </div>{" "}
      </div>
      <h1 className="text-gray-500 mt-4">Password Requirements:</h1>
      <ul className="list-disc text-gray-500">
        <li>Minimum 8 characters long - the more, the better</li>
        <li>At least one lowercase character</li>
        <li>At least one number, symbol, or whitespace character</li>
      </ul>
      <div className="flex items-center flex-wrap gap-2">
        <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[250px]">
          Save{" "}
        </button>
        <button className="rounded-2xl mt-4 flex-grow text-primary px-6 py-3 bg-white border border-primary flex items-center justify-center w-fit max-w-[250px]">
          Cancel{" "}
        </button>
      </div>{" "}
    </div>
  );
};

export default ChangeAuthDetails;
