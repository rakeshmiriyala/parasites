import React from "react";
import bgImage from "../assets/Updates_bg.jpg"

const SubscribeSection = () => {
  return (
    <div
      className=" w-full h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay"

       }}
    >
      {/* Overlay */}
      <div className="inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl text- md:text-4xl font-bold mb-4">
          GET UPDATES FROM ACANTHUS RESEARCH
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 lg:w-[550px] md:w-80 bg-white text-black "
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
