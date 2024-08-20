import { IoRocketOutline } from "react-icons/io5";

const HeroDoctorsHCF = () => {
  return (
    <div className="w-full md:mb-10  relative bg-homeBg bg-cover bg-no-repeat bg-center p-4 md:p-8 md:pb-36 pb-12 text-white flex flex-col md:gap-12 gap-2">
      <h1 className="text-[2rem] md:text-[4rem] font-semibold">
        Grow better with Makewell
      </h1>
      <p className="md:w-2/4">
        Optimize medical travel experiences by utilizing our sophisticated
        website builder and patient management tools, ensuring increased patient
        influx and revenue maximization
      </p>
      <button className="rounded-3xl px-6 py-3 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex items-center w-fit">
        <IoRocketOutline size={20} color="#fff" /> <h3>Get Started</h3>
      </button>
    </div>
  );
};

export default HeroDoctorsHCF;
