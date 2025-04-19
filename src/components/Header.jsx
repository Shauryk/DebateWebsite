import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
    return (
      <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-30 bg-[#8393B5] text-white flex items-center justify-center text-4xl font-bold z-50">
        <div>Welcome to DebateGo!</div>
      {currentUser && (
        <div className="absolute right-8 text-right text-lg font-normal">
          Hello, {currentUser.displayName || currentUser.email}
        </div>
      )}
      </header>
    );
  };
  
  export default Header;
  