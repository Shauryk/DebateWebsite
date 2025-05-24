import React, { useState } from "react";

const Topics = () => {
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);

  const debateTopics = [
  "Should cryptocurrencies be regulated like traditional currencies?",
  "Is it ethical for corporations to prioritize shareholder profit over employee welfare?",
  "Should governments impose higher taxes on the ultra-wealthy to reduce inequality?",
  "Are tax havens legal loopholes or outright fraud?",
  "Should insider trading carry harsher penalties?",
  "Is universal basic income (UBI) a sustainable economic solution?",
  "Should intellectual property laws be relaxed to promote innovation?",
  "Are fines and penalties for corporations too lenient to deter misconduct?",
  "Does the gig economy exploit workers under current labor laws?",
  "Should student loans be forgiven to alleviate financial crises?",
];

  const handleSpin = () => {
    const randomTopic =
      debateTopics[Math.floor(Math.random() * debateTopics.length)];
    const isPro = Math.random() > 0.5;
  
    // Clear previous topics first
    setPros([]);
    setCons([]);
  
    // Add the new topic to either pros or cons
    if (isPro) {
      setPros([randomTopic]);
    } else {
      setCons([randomTopic]);
    }
  };
  

  return (
    <div className="ml-64 mt-30 p-5 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Topic of the Day</h1>
          <button
            onClick={handleSpin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md text-lg font-medium transform hover:scale-105 transition-all duration-200"
          >
            🎡 Spin for a Topic
          </button>
        </div>

        {/* <p className="mb-6 text-lg">
          Is it ethical for corporations to prioritize shareholder profit over
          employee welfare?
        </p> */}

        {/* Pros & Cons Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-green-100 p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Pros</h2>
            <ul className="list-disc list-inside space-y-2">
              {pros.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-red-100 p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Cons</h2>
            <ul className="list-disc list-inside space-y-2">
              {cons.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
