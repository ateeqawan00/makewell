import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/swiper-bundle.css";

import MainLoader from "./utils/MainLoader";
import SetupProfile from "./pages/profile/SetupProfile";
import FAQPage from "./pages/home/FAQPage";
const HCFHome = React.lazy(() => import("./pages/hcf/HCFHome"));
const HCFLayout = React.lazy(() => import("./layouts/HCFLayout"));
const HomeLayout = React.lazy(() => import("./layouts/HomeLayout"));
const Homepage = React.lazy(() => import("./pages/home/Homepage"));
const HCFAbout = React.lazy(() => import("./pages/hcf/HCFAbout"));
const HCFDoctors = React.lazy(() => import("./pages/hcf/HCFDoctors"));
const HCFDoctorDetail = React.lazy(() => import("./pages/hcf/HCFDoctorDetail"));
const HCFHospitals = React.lazy(() => import("./pages/hcf/HCFHospitals"));
const HCFHospitalDetail = React.lazy(() =>
  import("./pages/hcf/HCFHospitalDetail")
);
const HCFHappyPatients = React.lazy(() =>
  import("./pages/hcf/HCFHappyPatients")
);

const App = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/faqs" element={<FAQPage />} />
        </Route>
        <Route path="/setup-profile" element={<SetupProfile />} />

        <Route path="/hcf" element={<HCFLayout />}>
          <Route index element={<HCFHome />} />
          <Route path="about" element={<HCFAbout />} />
          <Route path="doctors" element={<HCFDoctors />} />
          <Route path="doctor/detail/:id" element={<HCFDoctorDetail />} />
          <Route path="hospitals" element={<HCFHospitals />} />
          <Route path="hospital/detail/:id" element={<HCFHospitalDetail />} />
          <Route path="happy-patients" element={<HCFHappyPatients />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
