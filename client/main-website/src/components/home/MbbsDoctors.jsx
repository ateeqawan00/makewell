import { FaArrowRight } from "react-icons/fa";
import visualBg from "../../assets/images/mbbsImg.webp";
const MbbsDoctors = () => {
  return (
    <div className="px-12 mb-4 flex flex-col 900px:flex-row items-center justify-center w-full">
      <div className="flex flex-col gap-4 900px:w-1/2 w-full items-start  ">
        <h1 className="md:text-[3rem] text-[2rem] font-semibold leading-tight w-3/4">
          Harness the Power of 10,000 MBBS Doctors
        </h1>
        <p className="text-lg">
          Join forces with a network of over 10,000 MBBS doctors who are ready
          to support you in converting leads and providing expert guidance to
          your patients, ensuring optimal outcomes and patient satisfaction.
        </p>
        <button className="rounded-2xl mt-4 text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center w-fit">
          <h3>Get Started</h3> <FaArrowRight size={20} color="#fff" />
        </button>
      </div>
      <div className="flex items-center justify-center 900px:w-1/2 w-full  ">
        <img
          src={visualBg}
          alt="mbbs-harness image"
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default MbbsDoctors;
