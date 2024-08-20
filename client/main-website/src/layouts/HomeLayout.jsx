import { Outlet } from "react-router-dom";

import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
