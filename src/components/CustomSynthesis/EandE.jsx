import React from "react";
import { FaSearch, FaFlask, FaCogs, FaVial } from "react-icons/fa";

const CustomSynthesisProcess = () => {
  return (
    <div className="flex flex-col justify-start items-center py-6 lg:px-10">
      {/* Heading & Description */}
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Expertise and Experience
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-4">
          Exelus Labs supports innovation by taking on complex challenges in
          organic chemical synthesis. We specialize in producing custom
          molecules for novel products and unique projects, working closely with
          clients to deliver high-quality materials and reliable methods that
          move their work forward.
        </p>
        <p className="text-md text-gray-700 leading-relaxed mb-4">
          As part of our comprehensive, end-to-end services, we offer custom
          synthesis either as a stand-alone project or integrated into broader
          development and manufacturing programs.
        </p>
        <p className="text-md text-gray-700 leading-relaxed">
          Our expert teams can engage at any stage—whether it’s early concept
          and route scouting or optimizing existing synthesis pathways. We
          welcome complex, multi-step synthesis projects and continually enhance
          our internal processes to meet evolving demands. With strong support
          from our analytical development and QC teams, we ensure you receive
          the material you need at the quality you require.
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
          <h2 className="text-xl font-semibold text-gray-800">
            Small Synthesis
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Producing materials in lab-scale quantities for testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSynthesisProcess;
