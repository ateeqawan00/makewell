import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary border-gray-200 p-4 ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 600px:px-12">
        <h1 className="text-xs text-white ">© 2023 copy right. </h1>
        {/* CONTACT AREA  */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <BsEnvelope size={17} color="#fff" />

            <h3 className=" text-white">abc123@email.com</h3>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone size={17} color="#fff" />

            <h3 className=" text-white">03248238411</h3>
          </div>
        </div>
        {/* LANGUAGE BAR  */}
        <div className="flex items-center gap-3">
          <FaGithub size={25} color="#fff" />
          <FaInstagram size={25} color="#fff" />
          <FaXTwitter size={25} color="#fff" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
