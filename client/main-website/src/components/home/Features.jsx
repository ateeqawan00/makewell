import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuresData } from "../../../data/homepageData";

const Features = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full px-12 mt-4">
      <h1 className="text-[3rem] font-semibold text-black text-center">
        Features
      </h1>
      <p className="text-center text-gray-500">
        These are just a few features you’ll get using Traiwel
      </p>
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          // When window width is > 500px
          768: {
            slidesPerView: 2,
          },
          1200: { slidesPerView: 3 },
        }}
        spaceBetween={150} // Adjust this value as needed for the gap
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ dynamicBullets: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="mt-8"
        ref={swiperRef}
      >
        {featuresData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-10 border border-gray-200 h-[400px] mb-8"
            style={{ width: "300px" }} // Set the width for each slide
          >
            <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#7367F029]">
              {item.icon}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[1.1rem] font-semibold text-black text-center">
                {item.title}
              </h1>
              <p className="text-center text-md">{item.description}</p>
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
