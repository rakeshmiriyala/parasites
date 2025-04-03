import React from "react";

const Points = () => {
  return (
    <div className="justify-start items-center py-6 lg:px-10">
        <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Functional chemistry experts in 
        </h1>

        {/* Unordered List */}
        <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
          <li>Functionalized carbohydrate building blocks and derivatives</li>
          <li>Oligosaccharide synthesis</li>
          <li>Nucleosides, dinucleotides and analogues</li>
          <li>Heterocyclic chemistry</li>
          <li>Fluorination, phosphorylation and sulphation chemistry</li>
          <li>Novel enzyme substrates</li>
          <li>Natural product synthesis</li>
          <li>Impurities and metabolites</li>
          <li>Protein conjugation, biotin and click linkers</li>
          <li>Biocatalysis</li>
          <li>Polymer Chemistry (amphiphilic polymers)</li>
        </ul>
      </div>
        <br/>
        <br/>
      <div className="text-start px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Operational areas of excellence:
        </h1>

        {/* Unordered List */}
        <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
          <li>High purity complex products</li>
          <li>Synthetic route development</li>
          <li>Medicinal chemistry</li>
          <li>Regulated materials</li>
        </ul>
      </div>
    </div>
  );
};

export default Points;
