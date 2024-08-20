import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="flex items-center min-h-screen  bg-gray-50">
      <div className="flex-1 h-full  bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row 1200px:items-center">
          <div className="h-full  md:h-auto md:w-1/2 md:block hidden ">
            <img
              className="object-cover w-full h-full"
              src={"/authBanner.webp"}
              alt="rs global ties banner"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
