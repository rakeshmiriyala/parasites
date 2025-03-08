import React from "react";
import image1 from "../assets/contact_1.jpg";
import image2 from "../assets/contact_2.jpg";
import image3 from "../assets/contact_3.png";

const CardsSection = () => {
  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
        {/* Card 1 */}
        <div className="border border-gray-300 p-4 text-center">
            <br/>
          <h3 className="text-lg font-semibold mb-2">OUR FACILITY AND CAPABILITIES</h3>
          <br/>
          <img src={image1} alt="Card 1" className="w-full h-auto" />
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 p-4 text-center">
            <br/>
          <h3 className="text-lg font-semibold mb-2">MEET OUR EXPERTS</h3>
          <br/>
          <img src={image2} alt="Card 2" className="w-full h-auto" />
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 p-4 text-center">
            <br/>
          <h3 className="text-lg font-semibold mb-2">OUR HERITAGE</h3>
          <br/>
          <img src={image3} alt="Card 3" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
