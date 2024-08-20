import { useRef } from "react";
import earningsPotentialImg from "../../assets/images/earningsPotentialImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { earningPotentialData } from "../../../data/homepageData";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Autoplay } from "swiper/modules";
const EarningsPotential = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mt-8 bg-[#503AA7] p-8 ">
      <h1 className="text-[1.5rem] md:text-[2rem] font-semibold text-white text-center">
        Maximize Your Earnings Potential
      </h1>
      <div className="flex items-center gap-1 800px:gap-4 flex-col 800px:flex-row ">
        <div className="800px:w-1/2 w-full">
          <img
            src={earningsPotentialImg}
            alt="earnings potential image"
            className="object-contain"
          />
        </div>
        <div className="800px:w-1/2 w-full">
          <Swiper
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="mySwiper min-w-full min-h-full"
            ref={swiperRef}
          >
            {earningPotentialData.map((item, index) => (
              <SwiperSlide
                className="px-4 mb-2 md:p-8 leading-none text-white"
                key={index + 0.25 * 9 + 0.1}
              >
                <h1 className="font-semibold text-[1.4rem]  md:text-[2rem]">
                  {item.title}
                </h1>
                <p className="md:text-lg  mt-4">{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{" "}
      <div className="flex items-center gap-4 mx-auto w-fit">
        <div
          className=" flex items-center justify-center p-4 rounded-md bg-[#F0F5FF] text-primary hover:cursor-pointer hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <IoMdArrowBack size={25} />
        </div>
        <div
          className=" flex items-center justify-center p-4 rounded-md bg-[#F0F5FF] text-primary hover:cursor-pointer hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <IoMdArrowForward size={25} />
        </div>
      </div>
    </div>
  );
};

export default EarningsPotential;
