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
          At Exelus Labs, our advanced synthetic chemistry laboratories are
          outfitted with cutting-edge preparative and analytical equipment, and
          staffed by highly qualified scientists. We offer unmatched expertise
          in carbohydrate and nucleoside chemistry, making us a trusted partner
          for designing efficient, scalable processes or working seamlessly with
          your existing methods.
        </p>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Whether you need pharmaceutical ingredients or other complex chemical
          entities, we deliver precision, reliability, and scientific
          excellence at every step.
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
