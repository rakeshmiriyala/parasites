import React from "react";
import { useNavigate } from "react-router-dom";

const CustomSynthesisProcess = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div className="flex flex-col justify-start items-center py-6 lg:px-10">
      {/* Heading & Description */}
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Capabilities and Specialties
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Our state-of-the-art synthetic chemistry laboratories based in the UK,
          Switzerland, Slovakia, and China are equipped with modern preparative
          and analytical equipment and predominantly PhD-qualified scientists.
          Our expertise in carbohydrate and nucleoside chemistry is unrivaled
          globally, and you can trust us with the design of efficient and
          effective processes, or work with your existing methods, to produce
          your carbohydrate or nucleoside-based pharmaceutical ingredients or
          other complex chemical entities.
        </p>
      </div>

      {/* Centered Button */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/customsynthesis/quote")} // Redirect to the "Contact" page
          className="px-6 py-3 bg-blue-600 hover:cursor-pointer text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all"
        >
          Tell us more about your next custom synthesis project.
        </button>
      </div>
    </div>
  );
};

export default CustomSynthesisProcess;
