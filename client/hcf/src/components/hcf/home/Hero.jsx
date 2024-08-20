import { IoRocketOutline, IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsChat, BsGenderAmbiguous } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full md:mb-40  relative bg-homeBg bg-cover bg-no-repeat bg-center p-4 md:p-8 md:pb-36 pb-12 text-white flex flex-col md:gap-12 gap-2">
      <h1 className="text-[2rem] md:text-[4rem] font-semibold">
        Grow better with MakeWell
      </h1>
      <p className="md:w-2/4">
        Optimize medical travel experiences by utilizing our sophisticated
        website builder and patient management tools, ensuring increased patient
        influx and revenue maximization
      </p>
      <button className="rounded-3xl px-6 py-3 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex items-center w-fit">
        <IoRocketOutline size={20} color="#fff" /> <h3>Get Started</h3>
      </button>
      <div className="md:w-[95%]  md:flex items-center justify-between bg-white text-black rounded-lg p-4 hidden md:absolute bottom-0 translate-y-[80%] shadow-lg">
        <div className="flex">
          <img
            src="https://i.ibb.co/k8nkDpR/a0728f285c72e9ea26018e48125c1fbc.png"
            alt="user-img"
            className="w-[125px] h-[125px] rounded-full object-cover"
          />
          <div className=" p-2">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <div className="flex items-center w-[400px] flex-wrap gap-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <IoLocationOutline /> <p>Location:</p>
                </div>
                <p className="text-primary font-semibold">Abbotabad,Mansehra</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <CiUser /> <p>Age:</p>
                </div>
                <p className="text-primary font-semibold">25</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <BsChat /> <p>Language:</p>
                </div>
                <p className="text-primary font-semibold">25</p>
              </div>{" "}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-semibold">
                  <BsGenderAmbiguous /> <p>Gender:</p>
                </div>
                <p className="text-primary font-semibold">Male / Female</p>
              </div>
            </div>
          </div>
        </div>
        <button className="rounded-md p-2 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex items-center w-fit self-start text-white font-semibold gap-2">
          <FaTelegramPlane size={20} color="#fff" /> <h3>Contact Me</h3>
        </button>
      </div>
    </div>
  );
};

export default Hero;
