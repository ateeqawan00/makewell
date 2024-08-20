import { IoRocketOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="flex items-center 800px:flex-row flex-col gap-4 md:px-12 px-4">
      <div className="flex flex-col items-start gap-4 w-full 800px:w-1/2">
        <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-none">
          Welcome to Makewell <br />
          <span className="text-[1.2rem] md:text-[1.5rem]">
            Your Gateway to Profitable Facilitation
          </span>
        </h1>
        <p className="text-md md:text-lg">
          Simplify medical tourism, attract more patients, and maximize revenue
          with our intelligent website builder and patient management tools.
        </p>
        <button
          onClick={() =>
            document.getElementById("joinWaitlistModal").showModal()
          }
          className="rounded-2xl  text-white px-6 py-3  gap-4 bg-[#503AA7] flex items-center w-fit"
        >
          <IoRocketOutline size={20} color="#fff" /> <h3>Get Started</h3>
        </button>
      </div>
      <div className="w-full 800px:w-1/2 flex items-center justify-center 800px:justify-end">
        <img
          fetchPriority="high"
          src="https://i.ibb.co/fns4Cfz/Visuals.webp"
          alt="landing image"
          className=" object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
