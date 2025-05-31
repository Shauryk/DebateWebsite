import React from "react";
import { useNavigate } from "react-router-dom";
import { Gavel, BookOpen } from "lucide-react"; // Icons from lucide-react

const HowTo = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 min-h-screen flex py-18 flex-col justify-center items-center p-5 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Debate Format</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Parliamentary Box */}
        <div
          onClick={() => navigate("/parliamentary")}
          className="cursor-pointer bg-white hover:bg-blue-100 transition rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <Gavel size={48} className="text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Public Forum</h2>
          <p className="text-gray-500 mt-2">Learn how the Public Forum format works.</p>
        </div>

        {/* Oxford Box */}
        <div
          onClick={() => navigate("/oxford")}
          className="cursor-pointer bg-white hover:bg-green-100 transition rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <BookOpen size={48} className="text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Lincoln Douglas</h2>
          <p className="text-gray-500 mt-2">Understand the classic Lincoln Douglas debate format.</p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
