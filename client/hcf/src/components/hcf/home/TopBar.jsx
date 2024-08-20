import { CircleFlag } from "react-circle-flags";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const TopBar = () => {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 600px:px-12">
        <h1 className="text-xl text-primary font-bold">MakeWell.Life</h1>
        {/* CONTACT AREA  */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-[35px] h-[35px] rounded-full bg-[#D1C8F5] flex items-center justify-center">
              <BsEnvelope size={17} color="#503AA7" />
            </div>
            <h3 className="font-semibold text-primary">abc123@email.com</h3>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[35px] h-[35px] rounded-full bg-[#D1C8F5] flex items-center justify-center">
              <FiPhone size={17} color="#503AA7" />
            </div>
            <h3 className="font-semibold text-primary">03248238411</h3>
          </div>
        </div>
        {/* LANGUAGE BAR  */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center justify-center gap-2"
          >
            <CircleFlag countryCode="uk" className="h-4" />
            <p>English</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="flex items-center justify-center gap-2 w-full">
                <CircleFlag countryCode="sa" className="h-4" />
                <a>Arabic</a>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center gap-2 w-full">
                <CircleFlag countryCode="pk" className="h-4" />
                <a>Urdu</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
