import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  const { currentUser } = useAuth();

  return (
    <header
      className="
        fixed top-0
        left-0 md:left-64
        w-full md:w-[calc(100%-16rem)]
        h-28   /* increased height */
        bg-[#8393B5] text-white
        flex items-center justify-between
        px-4
        z-50
        shadow-md
      "
    >
      {/* Mobile sidebar toggle */}
      <button onClick={toggleSidebar} className="md:hidden text-2xl">
        <FaBars />
      </button>

      {/* Title */}
      <div className="absolute left-0 right-0 mx-auto text-center pointer-events-none">
        <h1 className="text-xl md:text-3xl font-bold select-none">
          Welcome to DebateGo!
        </h1>
      </div>

      {/* User Greeting */}
      {currentUser && (
  <div className="hidden md:flex items-center space-x-3 text-sm text-right">
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#8393B5] font-semibold uppercase shadow-md">
      { (currentUser.displayName || currentUser.email)[0] }
    </div>
    <div className="text-white font-medium">
      Hello, <span className="font-semibold">{currentUser.displayName || currentUser.email}</span>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;
