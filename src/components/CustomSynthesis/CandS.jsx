import React from "react";
import { useNavigate } from "react-router-dom";

const CustomSynthesisProcess = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div className="flex flex-col justify-start items-center py-6 px-4 sm:px-6 xs:px-10 md:px-10 lg:px-20">
      {/* Heading & Description */}
      <div className="text-start w-full max-w-7xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          Capabilities and Specialties
        </h1>
        <p className="lg:text-md lg:text-md sm:text-md text-gray-700 leading-relaxed mb-4 sm:mb-6">
          At Exelus Labs, our advanced synthetic chemistry laboratories are
          outfitted with cutting-edge preparative and analytical equipment, and
          staffed by highly qualified scientists. We offer unmatched expertise
          in carbohydrate and nucleoside chemistry, making us a trusted partner
          for designing efficient, scalable processes or working seamlessly with
          your existing methods.
        </p>
        <p className="lg:text-sm sm:text-md text-gray-700 leading-relaxed mb-4 sm:mb-6">
          Whether you need pharmaceutical ingredients or other complex chemical
          entities, we deliver precision, reliability, and scientific
          excellence at every step.
        </p>
      </div>

      {/* Centered Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/customsynthesis/quote")} // Redirect to the "Contact" page
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:cursor-pointer text-white font-semibold text-sm sm:text-lg rounded-lg hover:bg-blue-700 transition-all"
        >
          Tell us more about your next custom synthesis project.
        </button>
      </div>
    </div>
  );
};

export default CustomSynthesisProcess;
