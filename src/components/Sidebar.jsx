import { useState } from "react";
import {
  FaBook,
  FaQuestionCircle,
  FaInfoCircle,
  FaTrophy,
  FaSignInAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/DebateGo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
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
    <>
      {/* Sidebar Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#8393B5] text-white p-5 flex flex-col z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-screen`}
      >
        <img src={logo} alt="Logo" className="w-32 h-auto mb-8 mx-auto" />

        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer transition-all duration-300 ${
                active === item.name ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActive(item.name);
                toggleSidebar(); // auto-close on mobile
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
