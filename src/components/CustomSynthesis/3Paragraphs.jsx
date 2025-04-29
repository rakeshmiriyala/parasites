import React from "react";
import { useNavigate } from "react-router-dom";

const Paragraphs = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/customsynthesis/products-list");
  };

  return (
    <div className="flex flex-col justify-start items-center py-6 lg:px-10">
      {/* Heading & Description */}
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Quality and Analysis
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          At Exelus Labs, quality isn’t just a standard — it’s a core principle
          that defines every aspect of our operations. From our comprehensive
          quality management systems to cutting-edge laboratories and a team of
          expert scientists, technicians, administrators, and project managers,
          we are committed to delivering excellence.
        </p>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Our research and synthesis facilities adhere to ISO 9001:2015
          standards, enabling precise and efficient in-process and final product
          quality control through advanced analytical technologies. This
          capability allows our teams to thoroughly understand, refine, and
          complete synthesis processes, ensuring the production of high-quality
          outcomes. Beyond certifications, Exelus Labs is fully licensed to
          manufacture, store, distribute, and sell controlled substances,
          ensuring full regulatory compliance at every step.
        </p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button
            onClick={handleRedirect}
            className="bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="text-start px-20 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Partnership and Project Management
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Effective collaboration and transparent communication are integral to
          successful project execution in chemical research and development.
          Prior to project initiation, our scientific team conducts a thorough
          evaluation of feasible synthetic pathways tailored to your target
          molecule, performs risk assessments, and generates a detailed
          proposal. This includes comprehensive documentation planning and
          alignment with quality control (QC) specifications.
        </p>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Throughout the project lifecycle, a dedicated project manager acts as
          your primary liaison, ensuring seamless coordination, real-time
          updates, and alignment with technical and regulatory milestones from
          route scouting through to final delivery.
        </p>
      </div>

      <div className="text-start px-20 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Chemistry for All Applications
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          At Exelus Labs, we excel in tackling complex synthetic challenges. Our
          core expertise lies in the design and synthesis of bespoke molecules
          tailored to meet diverse R&D requirements. We collaborate with
          partners across the pharmaceutical and diagnostic industries, as well
          as academic and research institutions.
        </p>
      </div>
    </div>
  );
};

export default Paragraphs;
