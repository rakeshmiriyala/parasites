import React from "react";

const Paragraphs = () => {
  return (
    <div className="flex flex-col justify-start items-center py-6 lg:px-10">
      {/* Heading & Description */}
      <div className="text-start px-20 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Quality and Analysis
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Quality is at the heart of what we do at Biosynth, from our
          company-wide quality management system to our state-of-the art
          laboratories and highly skilled scientists, technicians,
          administrators and project managers.
        </p>
        <br />
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Our research and synthesis laboratories operate to ISO 9001:2015, with
          rapid in-process and final product QC using our outstanding analytical
          facilities. This helps the teams understand, optimize and finalize the
          synthesis route for high quality products. In addition to our quality
          certifications, we also hold all necessary licenses to manufacture,
          store, ship and sell controlled substances.
        </p>
      </div>
      <div className="text-start px-20 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Partnership and Project Management
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Clear communication and partnership throughout the project is key to
          success. In advance of project initiation, our experts evaluate
          possible synthetic approaches for your specific challenge, assess
          risks and prepare a detailed tailored quote including consideration of
          documentation and QC needs. A dedicated account manager follows and
          manages your project from start to finish, ensuring you and your team
          stay informed and up to date as the project progresses.
        </p>
        <br />
      </div>
      <div className="text-start px-20 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Chemistry for All Applications
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          At Biosynth, we relish working on challenging projects. Our
          custom-made molecules for our customers in pharma and diagnostics,
          small and medium-sized enterprises (SMEs) and universities find
          applications in a huge range of applications across research and
          development in fields including medicines, foodstuffs, and cosmetics.
        </p>
      </div>
      <div className="text-start px-20 w-full">
        <h1 className="text-md font-bold text-gray-800 mb-3">
          Our huge range of applications include:
        </h1>
        {/* Unordered List (Aligned to the left) */}
        <ul className="list-disc text-left pl-6 text-md text-gray-700 space-y-1">
          <li>Novel research reagents</li>
          <li>Analytical standards and reference materials</li>
          <li>Medicinal chemistry</li>
          <li>Regulated materials</li>
        </ul>
      </div>
      <div className="text-start px-20 ">
        <br/>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          At Biosynth, we relish working on challenging projects. Our
          custom-made molecules for our customers in pharma and diagnostics,
          small and medium-sized enterprises (SMEs) and universities find
          applications in a huge range of applications across research and
          development in fields including medicines, foodstuffs, and cosmetics.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Paragraphs;
