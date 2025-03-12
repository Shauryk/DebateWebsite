import { useState } from "react";
import { FaHome, FaQuestionCircle, FaSignInAlt, FaTrophy, FaInfoCircle, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Today's Topics");
  
  const menuItems = [
    { name: "Today's Topics", icon: <FaBook />, path: "/topics" },
    { name: "How To", icon: <FaQuestionCircle />, path: "/how-to" },
    { name: "About Debate Go", icon: <FaInfoCircle />, path: "/about-debate" },
    { name: "Leaderboard", icon: <FaTrophy />, path: "/leaderboard" },
    { name: "About Us", icon: <FaInfoCircle />, path: "/about-us" },
    { name: "Help", icon: <FaQuestionCircle />, path: "/help" },
    { name: "Login/Sign In", icon: <FaSignInAlt />, path: "/login" }
  ];

  return (
    <div className="w-64 h-screen bg-[#8393B5] text-white p-5 flex flex-col fixed left-0 top-0">
      <h1 className="text-2xl font-bold mb-18 flex items-center justify-center">Navigation</h1>
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
