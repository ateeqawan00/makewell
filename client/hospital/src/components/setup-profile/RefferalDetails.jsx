/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";

const ReviewsDetails = ({ setData, data, handleChange, setTab, setActive }) => {
  React.useEffect(() => {
    const inputField = document.getElementById("referalLink");
    const copyButton = document.getElementById("copyButton");

    const handleCopyClick = () => {
      inputField.select();
      inputField.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      inputField.blur();

      // Provide user feedback
      copyButton.setAttribute("disabled", true);
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.removeAttribute("disabled");
        copyButton.textContent = "Copy";
      }, 2000); // Reset the button text after 2 seconds
    };

    copyButton.addEventListener("click", handleCopyClick);

    return () => {
      copyButton.removeEventListener("click", handleCopyClick);
    };
  }, []);

  return (
    <div className="w-full mx-auto p-4 md:p-8 rounded-lg bg-white">
      <h1 className="text-primary text-[1.5rem] font-semibold">
        Refer Friends And Earn Money{" "}
      </h1>
      <div className="mt-8">
        <label
          htmlFor="refferalLink"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Refferal Link
        </label>
        <div className="relative">
          <input
            type="text"
            id="referalLink"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={"http://www.figma.com/file/akshfKUAHFLAJF;LJFDAIFAPOD...."}
            readOnly
          />
          <button
            id="copyButton"
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-2">
        <button
          type="button"
          onClick={() => console.log(data)}
          className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[150px]"
        >
          Save
        </button>
        <button
          className="rounded-2xl mt-4 flex-grow text-primary px-6 py-3 bg-white border border-primary flex items-center justify-center w-fit max-w-[150px]"
          onClick={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          Cancel{" "}
        </button>
      </div>{" "}
    </div>
  );
};

export default ReviewsDetails;
