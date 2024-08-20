import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "@smastrom/react-rating/style.css";

import MainLoader from "./utils/MainLoader";
import SetupProfile from "./pages/profile/SetupProfile";
import HCFDashboardLayout from "./layouts/HCFDashboardLayout";
import JobDetailsPage from "./pages/dashboard/JobDetailsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import RefferalPage from "./pages/dashboard/RefferalPage";
import HistoryPage from "./pages/dashboard/HistoryPage";
import EditProfilePage from "./pages/dashboard/EditProfilePage";
import PreviewProfilePage from "./pages/dashboard/PreviewProfile";

import NotificationPage from "./pages/dashboard/NotificationsPage";
const TranslatorPage = React.lazy(() =>
  import("./pages/dashboard/TranslatorPage")
);
const HCFHome = React.lazy(() => import("./pages/hcf/HCFHome"));
const HCFLayout = React.lazy(() => import("./layouts/HCFLayout"));
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
        <Route path="/setup-profile" element={<SetupProfile />} />

        <Route path="/" element={<HCFLayout />}>
          <Route index element={<HCFHome />} />
          <Route path="about" element={<HCFAbout />} />
          <Route path="doctors" element={<HCFDoctors />} />
          <Route path="doctor/detail/:id" element={<HCFDoctorDetail />} />
          <Route path="hospitals" element={<HCFHospitals />} />
          <Route path="hospital/detail/:id" element={<HCFHospitalDetail />} />
          <Route path="happy-patients" element={<HCFHappyPatients />} />
        </Route>
        <Route path="/dashboard" element={<HCFDashboardLayout />}>
          <Route index element={<TranslatorPage />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="refferal" element={<RefferalPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="edit-profile" element={<EditProfilePage />} />{" "}
          <Route path="preview-profile" element={<PreviewProfilePage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
