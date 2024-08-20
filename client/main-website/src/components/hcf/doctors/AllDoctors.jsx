import { doctorsData } from "../../../../data/hcfData";

const AllDoctors = () => {
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
        <h1 className="font-semibold text-center text-[2rem]">Doctors</h1>
        <div className="flex flex-col items-start gap-4">
          {doctorsData.map((item, index) => (
            <div
              className="p-4 border border-gray-100 rounded-lg w-full"
              key={index + 0.2799 * 2}
            >
              <div className="flex items-start justify-between gap-4 w-full flex-wrap">
                <img
                  src={item.imgURL}
                  alt="doctor profile img"
                  className="w-[125px] h-[150px] rounded-md"
                />
                <div className="">
                  <h1 className="text-primary font-semibold text-[1.2rem]">
                    {item.name}
                  </h1>
                  <h3>{item.location}</h3>
                  <h3>
                    Years of experience:{" "}
                    <span className="text-primary font-semibold">
                      {item.experience}+
                    </span>
                  </h3>
                  <h3>
                    Surgeries done:{" "}
                    <span className="text-primary font-semibold">
                      {item.surgeriesCount}+
                    </span>
                  </h3>
                  <h3>
                    Designation:{" "}
                    <span className="text-primary font-semibold">
                      {item.designation}
                    </span>
                  </h3>
                </div>
                <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit max-w-[300px]">
                  Book Me Now
                </button>
              </div>
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <div className="collapse collapse-arrow bg-base-200  !text-sm">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title  font-medium">
                    Doctor Profile{" "}
                  </div>
                  <div className="collapse-content">
                    <p>{item.profileDescription}</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 !p-1 !text-sm">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title  font-medium">Speciality </div>
                  <div className="collapse-content">
                    <p>{item.profileSpecialityDesc}</p>
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

export default AllDoctors;
