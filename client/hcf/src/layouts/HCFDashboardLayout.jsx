import { Link, Outlet } from "react-router-dom";
import { sidebarData } from "../../data/dashboardData";
import { RxHamburgerMenu } from "react-icons/rx";

const HCFDashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        <Outlet />{" "}
        <label
          htmlFor="dashboardDrawer"
          className="absolute top-1 left-1 p-2 rounded-md bg-primary text-white lg:hidden"
        >
          <RxHamburgerMenu size={25} />
        </label>
      </div>
      <div className="drawer-side min-h-screen">
        <label
          htmlFor="dashboardDrawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu relative p-4 w-80 min-h-screen bg-cover bg-gradient-to-b from-[#3D3066] to-[#5941B6] text-white">
          <li className="mx-auto mb-4">
            <img
              src="https://i.ibb.co/D76FtsX/Layer-1-1.webp"
              alt="makewell logo"
              className="w-[200px]"
            />
          </li>
          <div className="flex flex-col mt-4 gap-3 w-full">
            {sidebarData.map((item, index) => (
              <Link
                to={item.href}
                className="self-start flex items-center gap-2 p-2 hover:bg-white/5 w-full rounded-lg cursor-pointer"
                key={index + 0.235 * 2}
              >
                {item.icon}
                <h1 className="text-lg">{item.title}</h1>
              </Link>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 -z-10 w-full">
            <img
              src="https://i.ibb.co/YTgzNg7/Vector.webp"
              alt="traiwel logo"
              className=" object-fill w-full"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HCFDashboardLayout;
