import { FaArrowRight } from "react-icons/fa";
import visualBg from "../../assets/images/ai-report.webp";
const MbbsDoctors = () => {
  return (
    <div className="px-12 mb-4 flex flex-col gap-4 900px:gap-0  900px:flex-row items-center justify-center w-full">
      <div className="flex items-center justify-center 900px:w-1/2 w-full  ">
        <img
          src={visualBg}
          alt="mbbs-harness image"
          className="object-contain w-[450px] "
        />
      </div>{" "}
      <div className="flex flex-col gap-1 900px:gap-4 900px:w-1/2 w-full items-start  ">
        <h1 className="md:text-[2rem] text-[1.2rem] font-semibold leading-tight w-3/4">
          Unlock the Power of AI Medical Report Analysis{" "}
        </h1>
        <p className="md:text-lg">
          With MakeWell, gain access to AI-powered medical report analysis,
          providing you with valuable insights and actionable recommendations to
          enhance patient care and drive profitability.
        </p>
        <button
          onClick={() =>
            document.getElementById("joinWaitlistModal").showModal()
          }
          className="rounded-2xl mt-4 text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center w-fit"
        >
          <h3>Get Started</h3> <FaArrowRight size={20} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default MbbsDoctors;
