import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full md:px-12 px-4 py-4 flex items-center justify-between">
      <h1 className="text-[1.3rem] text-primary font-semibold">
        MakeWell.life
      </h1>
      <div className=" items-center gap-2 md:gap-6 flex">
        <Link
          to={"/faqs"}
          className="rounded-2xl hidden  text-primary  items-center w-fit font-semibold"
        >
          FAQ&apos;s
        </Link>
        <button
          onClick={() => document.getElementById("loginModal").showModal()}
          className="md:rounded-2xl rounded-md  text-black px-4 py-2 md:px-12 md:py-3  gap-4 bg-gray-200 flex items-center w-fit"
        >
          <h3>Sign In</h3>
        </button>
        <button
          onClick={() => document.getElementById("loginModal").showModal()}
          className="hidden 800px:flex rounded-2xl  text-white px-6 py-3  gap-4 bg-[#503AA7]  items-center w-fit"
        >
          <IoRocketOutline size={20} color="#fff" /> <h3>Get Started</h3>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
