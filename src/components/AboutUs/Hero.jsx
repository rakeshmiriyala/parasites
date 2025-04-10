import React from "react";
import bgImage from "../../assets/AboutUs_bg.jpg"; // adjust the path as needed

const AboutUs = () => {
  return (
    <div className="relative bg-white text-gray-800 px-6 py-16 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage} 
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
          About Us
        </h1>
        <p className="text-lg text-start text-black mb-12 leading-relaxed">
          Exelus Labs Private Limited is where precision meets innovation in the realm
          of impurity standards and custom organic synthesis. With a global client
          base and a steadfast commitment to quality, we deliver high-performance
          solutions tailored to the complex needs of the pharmaceutical, chemical,
          and research industries.
        </p>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">What We Do</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Impurity Standards</h3>
              <p className="text-black mt-2">
                We offer a comprehensive range of impurity standards, including
                nitroso impurities, stable isotope-labeled compounds, and deuterated
                compounds—all engineered to meet the highest standards of purity and
                regulatory compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Custom Organic Synthesis</h3>
              <p className="text-black mt-2">
                From novel compound development to complex multi-step synthesis, our
                team delivers scalable solutions from 1 mg to 1 kg, ensuring
                flexibility, efficiency, and precision for your specific needs.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-xl p-6 shadow transition">
              <h4 className="text-lg font-bold mb-2 text-blue-600">✔ Leading Expertise</h4>
              <p className="text-black">
                We provide high-purity impurity standards essential for research,
                testing, and regulatory compliance across a wide range of industries.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 shadow transition">
              <h4 className="text-lg font-bold mb-2 text-blue-600">✔ Tailored Solutions</h4>
              <p className="text-black">
                Our chemists excel in complexity—offering fully customized synthesis
                and process optimization to meet your unique project goals.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 shadow transition">
              <h4 className="text-lg font-bold mb-2 text-blue-600">✔ Global Delivery</h4>
              <p className="text-black">
                Serving clients across continents, we ensure fast, dependable delivery
                from our ready-stock inventory—no matter where you're located.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gray-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            More Than a Supplier — A Strategic Partner
          </h2>
          <p className="text-black mb-4">
            At Exelus Labs, we're more than a chemical manufacturer. We collaborate
            closely with our clients to solve challenges, drive innovation, and support
            the development of next-generation solutions.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            Let’s bring your next idea to life—with quality, precision, and scientific
            excellence.
          </p>
          <p className="mt-4 text-xl font-bold text-blue-600">Exelus Labs — Quality Leads.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
