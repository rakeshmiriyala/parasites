import React from "react";

const Points = () => {
  return (
    <div className="justify-start items-center px-4 sm:px-10 xs:px-10 md:px-16 lg:px-40">
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          Operational areas of excellence:
        </h1>
        {/* Unordered List */}
        <ul className="list-disc list-inside lg:text-md sm:text-md text-gray-700 space-y-1">
          <li>High purity complex products</li>
          <li>Innovative Synthetic Route Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Points;
