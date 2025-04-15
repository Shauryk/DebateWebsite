import { useState } from "react";
import { FaHome, FaQuestionCircle, FaSignInAlt, FaTrophy, FaInfoCircle, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/DebateGo.png"; // 👈 update path if different

const Sidebar = () => {
  const [active, setActive] = useState("Today's Topics");

  const menuItems = [
    { name: "Today's Topics", icon: <FaBook />, path: "/topics" },
    { name: "How To", icon: <FaQuestionCircle />, path: "/how-to" },
    { name: "Meetings", icon: <FaInfoCircle />, path: "/rooms" },
    { name: "Leaderboard", icon: <FaTrophy />, path: "/leaderboard" },
    { name: "About Us", icon: <FaInfoCircle />, path: "/about" },
    { name: "Help", icon: <FaQuestionCircle />, path: "/help" },
    { name: "Login/Sign In", icon: <FaSignInAlt />, path: "/signup" }
  ];

  return (
    <div className="w-64 h-screen bg-[#8393B5] text-white p-5 flex flex-col fixed left-0 top-0">
      {/* 👇 Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-auto mb-8 mx-auto"
      />

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer transition-all duration-300 ${
              active === item.name ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
