import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { blogsData } from "../../../../data/homepageData";
export default function VideoTestimonials() {
  return (
    <div className="p-4 mb-4">
      <h1 className="text-[3rem] text-center font-semibold mb-4">
        Latest Blogs{" "}
      </h1>
      <div className="p-4 flex flex-wrap items-center justify-center gap-4">
        {blogsData.map((item, index) => (
          <div
            className="card w-80 h-[450px] bg-base-100 shadow-xl"
            key={index + 0.0125 * 2}
          >
            <figure>
              <img
                src={item.imgUrl}
                alt="Blog Image"
                className="w-80 h-56 object-cover object-center"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm">{item.title}</h2>
              <p className="text-xs">{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
