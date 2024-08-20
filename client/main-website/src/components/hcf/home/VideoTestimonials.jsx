// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import videoItem from "../../../assets/videos/video.mp4";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { testimonialsVideosData } from "../../../../data/homepageData";

export default function VideoTestimonials() {
  return (
    <div className="p-4 mb-4">
      <h1 className="text-[3rem] text-center font-semibold mb-4">
        Video Testimonials
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="p-6"
      >
        {testimonialsVideosData.map((item, index) => (
          <SwiperSlide key={index + 0.23 * 2}>
            <video
              width="560"
              height="315"
              src={videoItem}
              autoPlay
              muted
              loop
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
