import { FaLocationDot } from "react-icons/fa6";
import { caseData } from "../../../data/dashboardData";
import { MdOutlineStar } from "react-icons/md";

const TranslatorPage = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary font-semibold text-xl mx-auto 700px:m-0">
          Home
        </h1>
        <form className="700px:flex items-center max-w-sm hidden">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search here"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div className="w-full p-4 flex flex-col gap-3">
        {caseData.map((item, index) => (
          <div
            className="flex items-center p-2 rounded-lg shadow-lg max-w-[900px] flex-wrap 500px:flex-nowrap"
            key={index + 0.023 * 2}
          >
            <img src={item.imgUrl} alt="case image" className="w-[150px]" />
            <div className="w-full flex items-center justify-between flex-wrap p-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary font-semibold">{item.title}</h1>
                <div className="flex items-center gap-1">
                  <FaLocationDot size={25} />
                  <h2>{item.location}</h2>
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <MdOutlineStar size={30} color="#DAB700" />
                  <h2 className="text-sm">{item.rating}</h2>
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslatorPage;
