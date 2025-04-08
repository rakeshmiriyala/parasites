import React from "react";
import bgImage from "../../assets/product-1_bg.jpg"; // Adjust the path based on your project structure
import Navbar from "../Navbar";

const CustomSynthesis = () => {
  return (
    <>
    <Navbar/>
    <div
      className="h-[250px] bg-cover bg-center flex justify-start items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="py-6 text-white text-start lg:px-26">
        <h1 className="text-3xl font-bold mb-4 h-1/5 flex items-center justify-start">
          Custom Synthesis
        </h1>
        <p className="text-lg">
          Biosynth excels in complex and challenging custom synthesis,
          specializing in carbohydrate and nucleoside chemistry. We solve the
          problems others cannot.
        </p>
      </div>
    </div>
    </>
  );
};

export default CustomSynthesis;
