import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // Import Header
import Topics from "./pages/Topics"; // Ensure this file exists
import Welcome from "./pages/Welcome"; // Import Welcome page
import Parliamentary from "./pages/Parliamentary";
import Oxford from "./pages/Oxford";
import HowTo from "./pages/HowTo";
import Rooms from "./pages/Rooms";
import Leaderboard from "./pages/Leaderboard";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import RoleBasedRoute from "./components/RoleBasedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Header /> {/* Add the Header here */}
          <div className="flex flex-grow">
            <Sidebar />
            <div className="flex-1 p-5">
              <Routes>
                <Route path="/" element={<Welcome />} /> {/* Default route */}
                <Route path="/topics" element={<Topics />} />
                <Route path="/how-to" element={<HowTo />} />
                <Route path="/parliamentary" element={<Parliamentary />} />
                <Route path="/oxford" element={<Oxford />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route
  path="/admin-dashboard"
  element={
    <RoleBasedRoute allowedRoles={["admin"]}>
      <AdminDashboard />
    </RoleBasedRoute>
  }
/>
                <Route path="/signup" element={<Signup />} />
                <Route
  path="/dashboard"
  element={
    <RoleBasedRoute allowedRoles={["user", "admin"]}>
      <Dashboard />
    </RoleBasedRoute>
  }
/>
                {/* Add more routes as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
