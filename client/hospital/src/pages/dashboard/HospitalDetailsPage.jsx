import { FaAngleLeft, FaLocationDot } from "react-icons/fa6";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { specialtiesData } from "../../../data/dashboardData";
import { doctorData } from "../../../data/aboutUsData";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HospitalEnquireModal from "../../utils/modals/HospitalEnquireModal";
import { Link } from "react-router-dom";

const myStarStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const HospitalDetailsPage = () => {
  const ImagesLinks = [
    "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
    "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
    "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const handelPopup = (e) => {
    e.preventDefault();
    setShowModel(true);
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ImagesLinks.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ImagesLinks.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Hospital Details</h1>
      </div>
      <div className="flex gap-2 1000px:flex-row flex-col">
        <div className="p-2 flex flex-col gap-2 flex-1">
          <div className="w-full carousel ">
            <div className="carousel-item w-[100%] h-[100%] flex flex-col gap-5">
              <img
                src={ImagesLinks[currentImageIndex]}
                alt="Slide"
                className="object-cover w-[100%] rounded-box h-[256px]"
              />
              <div className="flex flex-row items-center text-lg text-[#8E8888] justify-between">
                <button onClick={prevImage} className=" text-4xl">
                  <IoIosArrowBack />
                </button>
                <div className="">1 of 3</div>
                <button onClick={nextImage} className=" text-4xl">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-10 flex-1">
          <div className=" ">
            <div className="flex flex-col w-[100%] gap-4">
              <h2 className="text-lg font-medium text-black ">Hospital Name</h2>
              <div className="text-center grid 1200px:grid-cols-4 1000px:grid-cols-2 500px:grid-cols-4 300px:grid-cols-2 w-[100%] gap-5 justify-between">
                <div className="flex shadow-sm flex-col items-center gap-2 py-2 rounded-lg  bg-[#E9E4FA] text-primary">
                  <div className="text-xl font-semibold">12</div>
                  <div className="text-xs w-[70%]">Pending Proposals</div>
                </div>
                <div className="flex shadow-sm flex-col items-center gap-2 py-2 rounded-lg  bg-[#E9E4FA] text-primary">
                  <div className="text-xl font-semibold">12</div>
                  <div className="text-xs w-[70%]">Pending Proposals</div>
                </div>
                <div className="flex shadow-sm flex-col items-center gap-2 py-2 rounded-lg  bg-[#E9E4FA] text-primary">
                  <div className="text-xl font-semibold">12</div>
                  <div className="text-xs w-[70%]">Pending Proposals</div>
                </div>
                <div className="flex shadow-sm flex-col items-center gap-2 py-2 rounded-lg  bg-[#E9E4FA] text-primary">
                  <div className="text-xl font-semibold">12</div>
                  <div className="text-xs w-[70%]">Pending Proposals</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid 500px:grid-cols-2 gap-4">
              <div className="border rounded-2xl  flex flex-col shadow-md justify-center px-4 py-2">
                <div className=" gap-2 flex items-center ">
                  <img
                    src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
                    alt="profile"
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-primary font-medium tracking-wide">
                      Patient
                    </div>
                    <div className="text-[#555555] text-sm">Cardiology</div>
                  </div>
                </div>
                <Link
                  onClick={handelPopup}
                  className=" text-right text-sm text-primary"
                >
                  See more
                </Link>
              </div>
              <div className="border shadow-md rounded-2xl flex flex-col justify-center px-4 py-2">
                <div className=" gap-2 flex items-center ">
                  <img
                    src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
                    alt="profile"
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-primary font-medium tracking-wide">
                      Patient
                    </div>
                    <div className="text-[#555555] text-sm">Cardiology</div>
                  </div>
                </div>
                <Link
                  onClick={handelPopup}
                  className=" text-right text-sm text-primary"
                >
                  See more
                </Link>
              </div>
              <div className="border shadow-md rounded-2xl flex flex-col justify-center px-4 py-2">
                <div className=" gap-2 flex items-center ">
                  <img
                    src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
                    alt="profile"
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-primary font-medium tracking-wide">
                      Patient
                    </div>
                    <div className="text-[#555555] text-sm">Cardiology</div>
                  </div>
                </div>
                <Link
                  onClick={handelPopup}
                  className=" text-right text-sm text-primary"
                >
                  See more
                </Link>
              </div>
              <div className="border shadow-md rounded-2xl flex flex-col justify-center px-4 py-2">
                <div className=" gap-2 flex items-center ">
                  <img
                    src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
                    alt="profile"
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-primary font-medium tracking-wide">
                      Patient
                    </div>
                    <div className="text-[#555555] text-sm">Cardiology</div>
                  </div>
                </div>
                <Link
                  onClick={handelPopup}
                  className=" text-right text-sm text-primary"
                >
                  See more
                </Link>
                {showModel && (
                  <HospitalEnquireModal
                    onClose={() => {
                      setShowModel(false);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-zinc-800 font-semibold">Review (86)</span>
                <span className="ml-2 text-yellow-500">⭐ 4.7</span>
              </div>
              <button className=" text-primary hover:text-primary/80">
                See All
              </button>
            </div>
            <div className="flex items-center mb-2">
              <img
                src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
                alt="profile"
                className="rounded-full w-[40px] h-[40px] object-cover"
              />
              <div className="ml-3 flex items-center justify-between w-full">
                <div>
                  <p className="text-sm font-semibold">Yelena Belova</p>
                  <Rating
                    style={{ maxWidth: 75 }}
                    itemStyles={myStarStyles}
                    readOnly
                    value={4}
                  />
                </div>
                <p className="text-xs text-zinc-600">9/2/2022</p>
              </div>
            </div>
            <p className="text-zinc-800 text-sm mb-8">
              Its best hospital. I would recommend anyone to
            </p>
            <input
              type="text"
              id="text"
              name="reply"
              placeholder="Reply"
              className="border w-[100%] p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailsPage;
