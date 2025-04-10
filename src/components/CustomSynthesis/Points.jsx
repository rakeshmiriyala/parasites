import React from "react";

const Points = () => {
  return (
    <div className="justify-start items-center lg:px-10">
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Operational areas of excellence:
        </h1>
        {/* Unordered List */}
        <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
          <li>High purity complex products</li>
          <li>Innovative Synthetic Route Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Points;
