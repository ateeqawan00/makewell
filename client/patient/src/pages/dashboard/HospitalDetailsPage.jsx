import { FaAngleLeft, FaLocationDot } from "react-icons/fa6";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { specialtiesData } from "../../../data/dashboardData";
import { doctorData } from "../../../data/aboutUsData";
import HospitalEnquireModal from "../../utils/modals/HospitalEnquireModal";
const myStarStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const HospitalDetailsPage = () => {
  // const position = [51.505, -0.09];

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
          <div className="w-full h-56 carousel rounded-box">
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
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
          <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white">
            <h2 className="text-lg font-semibold text-primary dark:text-white">
              Dehli Hospital
            </h2>
            <div className="flex items-center justify-between flex-wrap">
              {" "}
              <p className="text-zinc-500 dark:text-zinc-400 flex items-center space-x-1">
                <FaLocationDot />
                <span>Dehli, India</span>
              </p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary dark:text-white mr-2">
                  4 out of 5
                </span>
                <Rating
                  style={{ maxWidth: 100 }}
                  itemStyles={myStarStyles}
                  readOnly
                  value={4}
                />
              </div>
            </div>{" "}
            <h3 className="text-zinc-900 dark:text-white font-semibold">
              Description
            </h3>
            <p className="text-zinc-600 ">
              Praesent pharetra nisi nec lectus consequat hotel gravid. Integer
              non risus non nibh porttitor.
            </p>
          </div>
          <div className="max-w-4xl p-6 bg-white rounded-2xl shadow-md">
            <h1 className="text-xl font-semibold text-primary my-6">
              Specialties
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
              {specialtiesData.map((item, index) => (
                <div className="text-center px-4 py-2" key={index + 0.022 * 2}>
                  <div className="mb-2 flex items-center justify-center">
                    <img src={item.iconUrl} alt={`${item.name} Icon`} />
                  </div>
                  <h3 className="font-semibold text-primary ">{item.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    From {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h1 className="text-xl font-semibold text-primary my-6">Doctors</h1>
            <div className="flex flex-wrap gap-2">
              {doctorData.map((item, index) => (
                <div
                  className="p-2 border border-gray-300 rounded-lg"
                  key={index + 0.0036 * 2}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imgUrl}
                      alt="doctor image"
                      className="w-[50px] h-[50px] object-cover rounded-full"
                    />
                    <div>
                      <h1 className="text-primary text-sm font-semibold">
                        {item.name}
                      </h1>
                      <p className="text-[12px] text-gray-600">
                        {item.speciality}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2 flex-1">
          <div className="max-w-lg  overflow-hidden bg-white rounded-2xl shadow-lg ">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary ">
                Work Location
              </h2>
              <p className="mt-1 text-sm text-zinc-600 ">
                Praesent pharetra nisi nec lectus consequat hotel gravida.
                Integer non risus non nibh porttitor.
              </p>
            </div>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/G78TWdC/Mask-Group.webp"
              alt="Map"
            />
          </div>
          <div className="  bg-white rounded-2xl shadow-md p-4">
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
            <button
              onClick={() =>
                document.getElementById("hospitalEnquireModal").showModal()
              }
              className="w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
      <HospitalEnquireModal />
    </div>
  );
};

export default HospitalDetailsPage;
