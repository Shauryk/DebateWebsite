import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Topics from "./pages/Topics";
import Welcome from "./pages/Welcome";
import Parliamentary from "./pages/Parliamentary";
import Oxford from "./pages/Oxford";
import HowTo from "./pages/HowTo";
import Rooms from "./pages/Rooms";
import Leaderboard from "./pages/Leaderboard";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./pages/AboutUs";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import RoleBasedRoute from "./components/RoleBasedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header toggleSidebar={toggleSidebar} />

          <div className="flex flex-1">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 p-5 ml-0 md:ml-64  ">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/how-to" element={<HowTo />} />
                <Route path="/parliamentary" element={<Parliamentary />} />
                <Route path="/oxford" element={<Oxford />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route
                  path="/admin-dashboard"
                  element={
                    <RoleBasedRoute allowedRoles={["admin"]}>
                      <AdminDashboard />
                    </RoleBasedRoute>
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <RoleBasedRoute allowedRoles={["user", "admin"]}>
                      <Dashboard />
                    </RoleBasedRoute>
                  }
                />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
