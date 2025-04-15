import React from "react";

const AboutUs = () => {
  return (
    <div className="ml-64 min-h-screen mt-16 py-10 px-6 flex justify-center">
      <div className="max-w-3xl w-full p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Debate has always been a passion of mine, but I noticed there wasn’t a solid place online to practice and sharpen skills. So, I decided to create one!
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          This platform is built for high school and college debaters to <span className="font-semibold text-blue-700">engage</span>, <span className="font-semibold text-blue-700">improve</span>, and <span className="font-semibold text-blue-700">connect</span> with others who love the art of argument.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I truly believe this will be a <span className="italic text-green-700 font-semibold">game-changer</span> for the debate community—so let’s get debating!
        </p>

        <div className="mt-8">
          <span className="block text-sm text-gray-500">Built with ❤️ for debaters, by a debater.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
