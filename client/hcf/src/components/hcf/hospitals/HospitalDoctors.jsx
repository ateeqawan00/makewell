import { MdLocationOn } from "react-icons/md";
import { recommendedDoctorsData } from "../../../../data/hcfData";
const HospitalDoctors = () => {
  return (
    <>
      <div className="w-full 800px:px-12">
        <h1 className="text-[2rem] font-semibold text-start mt-8">
          Top Doctors At Medanta- The Medicity, Gurgaon{" "}
        </h1>
        <div className="flex items-center  flex-wrap justify-start ">
          {recommendedDoctorsData.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center mx-auto p-3 gap-3 leading-none rounded-md shadow-lg w-[250px] h-[520px]"
              key={index + 0.032 * 9}
            >
              <img
                src={item.imgURL}
                alt="profile-image"
                className="w-[163px] h-[184px] object-cover"
              />
              <h1 className="font-semibold text-[1.2rem] text-center">
                {item.name}
              </h1>
              <h1 className="font-semibold text-[1rem] text-center">
                {item.speciality}
              </h1>
              <p className="text-sm text-center">{item.position}</p>
              <p className="text-sm text-center">{item.ranks}</p>
              <p className="text-sm text-center">{item.location}</p>
              <p className="text-sm text-center text-primary font-semibold">
                {item.experience} years of experience
              </p>
              <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                <MdLocationOn size={30} />
                <p className="text-xs">{item.address}</p>
              </div>
              <button className="border border-primary bg-white text-primary px-4 py-3 rounded-lg w-full self-end">
                View Doctor
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="rounded-2xl mt-2  text-white px-16 py-4 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex-grow max-w-[300px]">
            Show More
          </button>
        </div>
      </div>
      <div className="bg-[#4A3AFF2E] p-16 mt-8">
        <h1 className="text-[2rem] font-semibold text-primary text-center">
          Ask us anything about the Hospitals
        </h1>
        <p className="text-primary text-center">
          We will give you every information you need to know about hospitals.
        </p>
        <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit mx-auto">
          Purchase Now
        </button>
      </div>
    </>
  );
};

export default HospitalDoctors;
