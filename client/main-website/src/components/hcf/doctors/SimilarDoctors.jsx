import { MdLocationOn } from "react-icons/md";
import { recommendedDoctorsData } from "../../../../data/hcfData";
const SimilarDoctors = () => {
  return (
    <div className="w-full 800px:px-12">
      <h1 className="text-[2rem] font-semibold text-center mt-8">
        Grow better with Makewell
      </h1>
      <div className="flex items-center gap-2 flex-wrap justify-center mx-auto">
        {recommendedDoctorsData.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center p-3 gap-3 leading-none rounded-md shadow-lg w-[250px] h-[520px]"
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
                <MdLocationOn size={30}/>
                <p className="text-xs">{item.address}</p>
            </div>
            <button className="border border-primary bg-white text-primary px-4 py-3 rounded-lg w-full self-end">View Doctor</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarDoctors;
