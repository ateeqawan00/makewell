import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { testimonialsData } from "../../../../data/homepageData";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="p-4 mb-4">
      <h1 className="text-[3rem] text-center font-semibold mb-4">
        Testimonials
      </h1>

      <div className="flex flex-col 900px:flex-row items-center justify-center w-full gap-4">
        <div className="flex flex-col gap-4 900px:w-1/2 w-full items-start">
          <h1 className="text-[3.7rem] font-semibold leading-tight w-3/4">
            What our client says about MakeWell
          </h1>
          <div className="flex items-center gap-4">
            <div
              className="swiper-button-prev flex items-center justify-center p-4 rounded-md bg-[#F0F5FF] text-primary hover:cursor-pointer hover:bg-gray-100"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <IoMdArrowBack size={25} />
            </div>
            <div
              className="swiper-button-next flex items-center justify-center p-4 rounded-md bg-[#F0F5FF] text-primary hover:cursor-pointer hover:bg-gray-100"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <IoMdArrowForward size={25} />
            </div>
          </div>
        </div>
        <div className="900px:w-1/2 w-full">
          <Swiper
            modules={[Pagination]}
            pagination={{ dynamicBullets: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="mySwiper"
            ref={swiperRef}
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" border-gray-100 border-4 rounded-2xl flex flex-col items-start gap-8 p-6 min-w-full min-h-full">
                  <img
                    src="https://i.ibb.co/JzCRLyD/Rating.png"
                    alt="rating-image"
                    className="object-contain max-w-[230px]"
                  />
                  <p className="text-start text-md">{item.reviewContent}</p>
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={item.imageSrc}
                      alt="user-img"
                      className="!w-[50px] !h-[50px] rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <h1 className="font-semibold leading-none">
                        {item.reviewer.name}
                      </h1>
                      <p className="text-sm leading-none">
                        {item.reviewer.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
