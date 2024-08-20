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
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HospitalDetailsPage from "./pages/dashboard/HospitalDetailsPage";
import ProfileSpecialities from "./pages/profile/ProfileSpecialities";
import HospitalProfileSpecialities from "./pages/dashboard/HospitalProfileSpeciality";
import Chat from "./components/Chat/Chat";
import Conversation from "./components/Chat/Conversation";

const TranslatorPage = React.lazy(() =>
  import("./pages/dashboard/TranslatorPage")
);

const App = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route element={<Login />} index />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/profile-specialities" element={<ProfileSpecialities />} />

        <Route path="/dashboard" element={<HCFDashboardLayout />}>
          <Route index element={<TranslatorPage />} />
          <Route path="hospital/:id" element={<HospitalDetailsPage />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="chat/conversation" element={<Conversation />} />
          <Route
            path="Hospital-profile-specialities"
            element={<HospitalProfileSpecialities />}
          />
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
