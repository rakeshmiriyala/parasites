import React from "react";
import bgImage from "../../assets/CustomSyntesis_bg.jpg"; // Adjust the path based on your project structure
import Navbar from "../Navbar";

const CustomSynthesis = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex justify-start items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="px-4 sm:px-10 md:px-16 lg:px-24 py-4 sm:py-6 text-white text-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Custom Synthesis
          </h1>
        </div>
      </div>
    </>
  );
};

export default CustomSynthesis;
