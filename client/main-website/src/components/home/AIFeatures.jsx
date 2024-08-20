import { useRef } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { AIFeaturesData } from "../../../data/homepageData";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const AIFeatures = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full md:px-12 px-4 mt-8">
      <h1 className="md:text-[2.5rem] text-[1.5rem] font-semibold text-center">
        Get Digital Ready with AI Features
      </h1>
      <p className="md:text-[1.3rem] text-center text-gray-500">
        These are just a few features you&apos;ll get using Makewell
      </p>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="mySwiper min-w-full min-h-full"
        ref={swiperRef}
      >
        {AIFeaturesData.map((item, index) => (
          <SwiperSlide key={index} className="800px:h-[350px] mb-12 ">
            <div className="flex flex-col 800px:flex-row items-center gap-4 800px:mt-24 mt-8 justify-center 800px:justify-between">
              <div className="relative 800px:w-1/3 w-full flex flex-col items-center 800px:items-start">
                <h1 className="text-[1.2rem] 600px:text-[2.1rem]  font-semibold">
                  {item.title}
                </h1>
                <img
                  src={item.imgSrc}
                  alt="card-image"
                  className="w-[150px] object-contain"
                />
              </div>
              <div className=" 800px:w-2/3 w-full">
                <div className="text-[1rem] w-full 800px:w-2/3 800px:mx-auto text-center 800px:text-start">
                  <p> {item.description}</p>
                  <button
                    onClick={() =>
                      document.getElementById("joinWaitlistModal").showModal()
                    }
                    className="bg-[#503AA7] py-[18px] mt-4 px-[30px] rounded-xl font-semibold text-white inline-block"
                  >
                    Join Waitlist{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
      <div className="flex items-center gap-4 mx-auto w-fit mt-4">
        <div
          className=" flex items-center justify-center p-4 rounded-md bg-primary text-[#F0F5FF] hover:cursor-pointer hover:bg-primary/80"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <IoMdArrowBack size={25} />
        </div>
        <div
          className=" flex items-center justify-center p-4 rounded-md bg-primary text-[#F0F5FF] hover:cursor-pointer hover:bg-primary/80"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <IoMdArrowForward size={25} />
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
