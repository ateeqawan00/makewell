import { useState } from "react";
import ProfileDetails from "../../components/setup-profile/ProfileDetails";
import AdditionalDetails from "../../components/setup-profile/AdditionalDetails";
import ReviewsDetails from "../../components/setup-profile/ReviewsDetails";
import RefferalDetails from "../../components/setup-profile/RefferalDetails";

const SignUp = () => {
  const [tab, setTab] = useState("profile-details");
  const [active, setActive] = useState(1);

  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(data);
  };
  return (
    <div className="flex items-center  justify-center p-6 sm:p-12 min-h-full  relative bg-[#f0efef] ">
      <div className="w-full mt-8 md:mt-6 lg:mt-0 md:max-h-[800px]  md:p-8 self-center">
        <ol className=" items-center w-full mb-12 hidden md:flex">
          <li className="flex w-full gap-2  items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <span className="flex bg-primary text-white items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0">
              1
            </span>{" "}
            <span className="text-nowrap text-primary">Setup Profile</span>
          </li>
          <li
            className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block
            }`}
          >
            <span
              className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0  ${
                active >= 2 ? "bg-primary text-white" : "bg-gray-100"
              }`}
            >
              2
            </span>
            {active >= 2 && (
              <span className="text-nowrap ml-2 text-primary">Experience</span>
            )}
          </li>{" "}
          <li
            className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block`}
          >
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12  shrink-0  ${
                active >= 3 ? "bg-primary text-white" : "bg-gray-100 "
              }`}
            >
              3
            </span>
            {active >= 3 && (
              <span className="text-nowrap ml-2 text-primary">Reviews</span>
            )}
          </li>
          <li className="flex items-center w-fit">
            <span
              className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0 ${
                active === 4 ? "bg-primary text-white" : "bg-gray-100"
              }`}
            >
              4
            </span>
            {active >= 4 && (
              <span className="text-nowrap ml-2 text-primary">Referral</span>
            )}
          </li>
        </ol>
        <form onSubmit={handleSubmit}>
          {tab === "profile-details" && (
            <ProfileDetails
              setData={setData}
              data={data}
              handleChange={handleChange}
              setTab={setTab}
              setActive={setActive}
            />
          )}
          {tab === "additional_details" && (
            <AdditionalDetails
              setData={setData}
              data={data}
              handleChange={handleChange}
              setTab={setTab}
              setActive={setActive}
            />
          )}
          {tab === "reviews" && (
            <ReviewsDetails
              setData={setData}
              data={data}
              handleChange={handleChange}
              setTab={setTab}
              setActive={setActive}
            />
          )}
          {tab === "refferal" && (
            <RefferalDetails
              setData={setData}
              data={data}
              handleChange={handleChange}
              setTab={setTab}
              setActive={setActive}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
