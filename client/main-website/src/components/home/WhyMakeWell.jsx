import { WhyMakwellData } from "../../../data/homepageData";
import { FaArrowRight } from "react-icons/fa";

const WhyMakeWell = () => {
  return (
    <div className="w-full p-4 mb-4 bg-[#F8F9FF]">
      <h1 className="md:text-[3rem] text-[2rem] text-center font-semibold">
        Why Makewell{" "}
      </h1>
      <div className="flex items-center justify-center flex-wrap p-6 gap-8">
        {WhyMakwellData.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center border-b-4 border-primary  gap-1 h-[150px] flex-1 shadow-lg text-black hover:bg-gray-100 hover:cursor-pointer"
            key={index + 0.025 * 2}
          >
            <h1 className=" text-3xl font-extrabold">{item.quantity}</h1>
            <h1 className=" text-lg text-center">{item.title}</h1>
          </div>
        ))}
      </div>
      <button
        onClick={() => document.getElementById("joinWaitlistModal").showModal()}
        className="rounded-2xl mt-4 text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center w-fit mx-auto"
      >
        <h3>Get Started</h3> <FaArrowRight size={20} color="#fff" />
      </button>
    </div>
  );
};

export default WhyMakeWell;
