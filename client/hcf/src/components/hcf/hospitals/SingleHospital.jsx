import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaRegCalendarAlt, FaRegCalendarPlus } from "react-icons/fa";
const SingleHospital = () => {
  return (
    <>
      <div className="px-12 flex items-start gap-4">
        {/* FILTER  */}
        <div className="800px:flex hidden w-[25%]  flex-col items-start gap-4">
          {/* HOSPITAL CITY FILTER  */}
          <div className="p-4 bg-[#DBDADE]/30 w-full">
            <div className="flex flex-col items-start gap-4 mt-2">
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                About Hospital
              </h1>
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                Teams and Specialities{" "}
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                Top Doctors
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                Infrastructure{" "}
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                Location
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400] text-primary border-b-2 w-full p-3">
                Facilities
              </h1>
            </div>
          </div>
          {/* HOSPITAL NAME FILTER  */}
        </div>
        {/* CONTENT  */}
        <div className="flex flex-col gap-1 w-full leading-none">
          <h1 className="font-semibold text-[2rem]">
            Medanta - The Medicity Hospital, Gurgaon
          </h1>
          <h2 className="mb-4">Gurgaon, India</h2>
          <button className="rounded-2xl mt-4 mb-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center  max-w-[300px]">
            Contact Now
          </button>
          <h1 className="font-semibold text-[1.2rem]">
            Images Related To Medanta - The Medicity Hospital, Gurgaon
          </h1>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper py-6"
          >
            <SwiperSlide className="w-fit">
              <img
                src="https://i.ibb.co/hgYRWSX/d9cdaf3cf03235d6f987da695a36051f.jpg"
                alt="hospital-img"
                className="w-[400px]"
              />
            </SwiperSlide>
            <SwiperSlide className="w-fit">
              <img
                src="https://i.ibb.co/hgYRWSX/d9cdaf3cf03235d6f987da695a36051f.jpg"
                alt="hospital-img"
                className="w-[400px]"
              />
            </SwiperSlide>
            <SwiperSlide className="w-fit">
              <img
                src="https://i.ibb.co/hgYRWSX/d9cdaf3cf03235d6f987da695a36051f.jpg"
                alt="hospital-img"
                className="w-[400px]"
              />
            </SwiperSlide>
            <SwiperSlide className="w-fit">
              <img
                src="https://i.ibb.co/hgYRWSX/d9cdaf3cf03235d6f987da695a36051f.jpg"
                alt="hospital-img"
                className="w-[400px]"
              />
            </SwiperSlide>
          </Swiper>{" "}
          <div className="flex leading-none items-center justify-between flex-wrap">
            <div className="flex items-center gap-1 text-primary text-sm">
              <FaLocationDot /> <p>Gurgaon</p>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm">
              <FaBed /> <p>1250 Beds</p>
            </div>{" "}
            <div className="flex items-center gap-1 text-primary text-sm">
              <FaRegCalendarAlt /> <p>Established in : 2009</p>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm">
              <FaRegCalendarPlus /> <p>Super Speciality</p>
            </div>
          </div>
          <div className="leading-normal">
            <h1 className="font-semibold text-[1.5rem] mt-2">About Hospital</h1>
            <p>
              Medanta Hospital was founded in 2009 by the renowned
              Cardiovascular and Cardiothoracic surgeon, Dr. NareshTrehan. The
              hospital is both NABH and NABL accredited. Centers of excellence
              include the Heart Institute, Institute of Neurosciences, Bone &
              Joint Institute, Kidney & Urology Institute, Cancer Institute and
              Division of Medical Oncology and Hematology.
            </p>
          </div>{" "}
          <div className="leading-normal">
            <h1 className="font-semibold text-[1.5rem] mt-2">
              Teams And Specialities
            </h1>
            <p>
              In January 2013, a team of doctors led by Dr. A.S. Soin at Medanta
              successfully conducted India&apos;s first intestinal transplant.
              The Medanta team boasts an impressive track record, having
              completed over 15,000 cardiac surgeries and 2,500 joint
              replacement surgeries. Furthermore, they have accomplished over
              500 living donor liver transplants, marking the highest number of
              liver transplants in India and the second highest globally.
            </p>
          </div>
          <div className="leading-normal">
            <h1 className="font-semibold text-[1.5rem] mt-2">
              Hospital Address{" "}
            </h1>
            <h3>Medanta - The Medicity</h3>
            <h3>Gurgaon 122001</h3>
            <h3>India</h3>
          </div>
          <div className=" p-16 mt-8 flex flex-col w-full gap-2">
            <h1 className="text-[2rem] bg-[#F8F9FF] font-semibold text-center">
              Patients from 85+ countries have trusted us.{" "}
            </h1>
            <p className=" text-center">
              Join hundreds of happy patients who choose the right treatment and
              care.{" "}
            </p>
            <button className="rounded-2xl mt-2  text-white px-16 py-4 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex-grow max-w-[300px] self-center">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHospital;
