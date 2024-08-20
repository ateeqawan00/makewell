import { Outlet } from "react-router-dom";
import Navbar from "../components/hcf/home/Navbar";
import TopBar from "../components/hcf/home/TopBar";
import Footer from "../components/hcf/home/Footer";

const HomeLAyout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLAyout;
