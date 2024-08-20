import { hospitalsData } from "../../../../data/hcfData";
import { IoLocationSharp } from "react-icons/io5";
import { FaHospital, FaRegStar } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { MdFolderSpecial } from "react-icons/md";

const AllHospitals = () => {
  return (
    <div className="px-12 flex items-start gap-4">
      {/* FILTER  */}
      <div className="800px:flex hidden w-[25%]  flex-col items-start gap-4">
        {/* HOSPITAL CITY FILTER  */}
        <div className="p-4 bg-[#DBDADE]/30 rounded-xl w-full">
          <div className="flex items-center justify-between ">
            <h1 className="text-[1rem] font-bold">By City</h1>
            <h3 className="text-primary text-sm">Clear Filter</h3>
          </div>
          <input
            type="text"
            placeholder="Search city"
            className="bg-gray-50 rounded-lg p-1 mt-2 text-sm w-full"
          />
          <div className="text-primary mt-2 text-sm flex flex-col gap-1">
            <h4 className="hover:underline hover:cursor-pointer">
              New Delhi (1420)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Mumbai (98)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Kerala (10)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Hyderabad (120)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Chennai (53)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Banglore (82)
            </h4>
          </div>
        </div>
        {/* HOSPITAL NAME FILTER  */}
        <div className="p-4 bg-[#DBDADE]/30 rounded-xl w-full">
          <div className="flex items-center justify-between ">
            <h1 className="text-[1rem] font-bold">By Hospital</h1>
            <h3 className="text-primary text-sm">Clear Filter</h3>
          </div>
          <input
            type="text"
            placeholder="Search city"
            className="bg-gray-50 rounded-lg p-1 mt-2 text-sm w-full"
          />
          <div className="text-primary mt-2 text-sm flex flex-col gap-1">
            <h4 className="hover:underline hover:cursor-pointer">
              Medanta - The Medicity, Gurgaon (196)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Indraprastha Apollo Hospital, New Delhi (146)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Apollo Hospitals, Greams Road, Chennai (135)
            </h4>
            <h4 className="hover:underline hover:cursor-pointer">
              Nanavati Super Specialty Hospital, Kerala (289)
            </h4>
          </div>
        </div>
      </div>
      {/* CONTENT  */}
      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-semibold text-center text-[2rem]">Hospitals</h1>
        <div className="flex flex-col items-start gap-4">
          {hospitalsData.map((item, index) => (
            <div
              className="p-4 border border-gray-100 rounded-lg w-full"
              key={index + 0.2799 * 2}
            >
              <div className="flex items-start gap-4 w-full flex-wrap 800px:flex-nowrap">
                <img
                  src={item.imgSrc}
                  alt="doctor profile img"
                  className="w-[125px] rounded-md"
                />
                <div className="">
                  <h1 className="text-primary font-semibold text-[1.5rem]">
                    {item.hospitalName}
                  </h1>
                  <h3 className="flex items-center gap-1 capitalize">
                    <IoLocationSharp size={15} color="#503AA7" />{" "}
                    {item.location}
                  </h3>
                  <h3 className="flex items-center gap-1 capitalize">
                    <FaHospital size={15} color="#503AA7" />{" "}
                    <span className="font-semibold">Established in:</span>
                    {item.estdYear}
                  </h3>
                  <h3 className="flex items-center gap-1 capitalize">
                    <FaBedPulse size={15} color="#503AA7" />{" "}
                    <span className="font-semibold">Number of beds:</span>
                    {item.numberOfBeds}
                  </h3>
                  <h3 className="flex items-center gap-1 capitalize">
                    <MdFolderSpecial size={15} color="#503AA7" />{" "}
                    <span className="font-semibold">Multispeciality:</span>
                    {item.multispeciality ? "true" : "false"}
                  </h3>
                  <h3 className="flex items-center gap-1 capitalize mb-2">
                    <FaRegStar size={15} color="#503AA7" /> About{" "}
                    {item.hospitalName}
                  </h3>
                  <p className="text-wrap">{item.description}</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <button className="rounded-2xl mt-4 flex-grow  px-6 py-3 gap-4 border border-primary text-primary flex items-center justify-center w-fit max-w-[300px]">
                      View Details{" "}
                    </button>
                    <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[300px]">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllHospitals;
