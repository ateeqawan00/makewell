import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary border-gray-200 p-4 ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 600px:px-12">
        <h1 className="text-xs text-white ">©2024 MedRoam AI Tech LLP</h1>
        {/* CONTACT AREA  */}

        {/* LANGUAGE BAR  */}
        <div className="flex items-center gap-4 md:gap-8">
          <FaYoutube size={25} color="#fff" />
          <FaInstagram size={25} color="#fff" />
          <FaLinkedinIn size={25} color="#fff" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
