import React from "react";
import { FaSearch, FaFlask, FaCogs, FaVial } from "react-icons/fa";

const CustomSynthesisProcess = () => {
  return (
    <div className="flex flex-col justify-start items-center py-6 lg:px-10">
      {/* Heading & Description */}
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Expertise and Experience</h1>
        <p className="text-md text-gray-700 leading-relaxed mb-4">
          We have been helping our customers innovate for over 55 years by taking on the most complex challenges 
          in organic chemical synthesis and producing custom molecules for novel products and projects. Biosynth 
          works in partnership to deliver high-quality materials and methods to take you and your organization forward. 
          As part of our suite of end-to-end CDMO services, we offer custom synthesis as a stand-alone project or as 
          part of a longer program towards large-scale or GMP manufacture.
        </p>
        <p className="text-md text-gray-700 leading-relaxed">
          Our skilled custom synthesis teams can start from your first ideas, route scouting and developing a synthesis method, 
          or we can use or improve upon an existing synthesis route as required. We welcome projects involving challenging 
          multi-step synthesis and are committed to innovating our internal processes to enable syntheses of complex compounds. 
          With support from our first-class analytical development and QC teams, we can provide the material you want at the 
          quality you need.
        </p>
      </div>

      {/* Cycle Representation */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-60 hover:scale-105 transition-transform">
          <FaSearch className="text-blue-600 text-5xl mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Scouting</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Identifying the best synthetic routes and starting materials.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-60 hover:scale-105 transition-transform">
          <FaFlask className="text-green-600 text-5xl mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Development</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Designing and refining the synthetic process for efficiency.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-60 hover:scale-105 transition-transform">
          <FaCogs className="text-yellow-600 text-5xl mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Optimization</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Enhancing yield, purity, and reproducibility for production.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-60 hover:scale-105 transition-transform">
          <FaVial className="text-purple-600 text-5xl mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Small Synthesis</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Producing materials in lab-scale quantities for testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSynthesisProcess;
