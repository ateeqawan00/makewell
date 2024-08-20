import { BsChat, BsGenderAmbiguous } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaStar, FaTelegramPlane } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { doctorData, hospitalsData } from "../../../data/aboutUsData";
import { reviewProfileData } from "../../../data/dashboardData";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const PreviewProfilePage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Preview Profile</h1>
      </div>
      <div className=" flex-wrap gap-2  flex items-center justify-between bg-white text-black rounded-lg p-4 ">
        <div className="flex flex-wrap gap-2">
          <img
            src="https://i.ibb.co/k8nkDpR/a0728f285c72e9ea26018e48125c1fbc.png"
            alt="user-img"
            className="w-[125px] h-[125px] rounded-full object-cover"
          />
          <div className=" p-2">
            <h1 className="text-xl font-bold">John Doe</h1>
            <div className="flex items-center w-[400px] flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <IoLocationOutline /> <p>Location:</p>
                </div>
                <p className="text-primary font-semibold">Abbotabad,Mansehra</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <CiUser /> <p>Age:</p>
                </div>
                <p className="text-primary font-semibold">25</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <BsChat /> <p>Language:</p>
                </div>
                <p className="text-primary font-semibold">25</p>
              </div>{" "}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <BsGenderAmbiguous /> <p>Gender:</p>
                </div>
                <p className="text-primary font-semibold">Male / Female</p>
              </div>
            </div>
          </div>
        </div>
        <button className="rounded-md p-2 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex items-center w-fit self-start text-white font-semibold gap-2">
          <FaTelegramPlane size={20} color="#fff" /> <h3>Contact Me</h3>
        </button>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">About Us</h1>
        <p className="">
          Hi, I&apos;m John Doe, your friendly UI/UX designer! 🎨 Specializing
          in Figma, I will design your app, web, and landing page ideas to life
          with creative flair and smooth functionality. Let&apos;s collaborate
          on designs that captivate and elevate your online presence. Ready to
          make your digital dreams a reality? Let&apos;s talk!
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Specialized Fields</h1>
        <ul className="list-disc px-8">
          <li>Phycology</li>
          <li>Physicology</li>
        </ul>
      </div>{" "}
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Procedures</h1>
        <ul className="list-disc px-8">
          <li>Phycology</li>
        </ul>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">
          Number of Clients Served
        </h1>
        <p>50</p>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Hospitals </h1>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          {hospitalsData.map((item, index) => (
            <div
              className="p-4 border border-gray-200 rounded-2xl flex items-center gap-4 w-[180px]"
              key={index + 0.012 * 2}
            >
              <img
                src={item.imgUrl}
                alt="profile image"
                className="rounded-full w-[50px] h-[50px] object-cover"
              />
              <div className="">
                <h1 className="text-primary">{item.name}</h1>
                <h2 className="text-sm">{item.location}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Doctor </h1>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          {doctorData.map((item, index) => (
            <div
              className="p-4 border border-gray-200 rounded-2xl flex items-center gap-4 "
              key={index + 0.012 * 2}
            >
              <img
                src={item.imgUrl}
                alt="profile image"
                className="rounded-full w-[50px] h-[50px] object-cover"
              />
              <div className="">
                <h1 className="text-primary">{item.name}</h1>
                <h2 className="text-sm">{item.speciality}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Reviews</h1>
        <div className="mt-2 flex items-center gap-1">
          <FaStar size={25} fill="#FBBC04" />
          <h1 className="font-semibold">(3.5)</h1>
        </div>
        <div className="w-full">
          {reviewProfileData.map((item, index) => (
            <div className="p-2 flex flex-col gap-1" key={index + 0.03 * 5}>
              <div className="flex items-center gap-2">
                <h1 className=" text-sm">{item.Name}</h1>
                <Rating
                  style={{ maxWidth: 85 }}
                  value={item.Rating}
                  itemStyles={starStyles}
                  readOnly
                />
              </div>
              <h1 className="text-gray-600 text-sm">{item.DaysAgo} Days Ago</h1>
              <p>{item.Review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewProfilePage;
const starStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
