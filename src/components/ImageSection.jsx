import React from "react";
import image1 from "../assets/Image_section_1.jpg";
import image2 from "../assets/Image_section_2.jpg";
import image3 from "../assets/Image_section_3.jpg";
import image4 from "../assets/Image_section_4.jpg";

const NewsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="md:w-7/10 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={image1}
            alt="News 1"
            className="w-full h-auto"
          />
          <img
            src={image2}
            alt="News 2"
            className="w-full h-auto"
          />
          <img
            src={image3}
            alt="News 3"
            className="w-full h-auto"
          />
          <img
            src={image4}
            alt="News 4"
            className="w-full h-auto"
          />
        </div>
        
        {/* Right Section */}
        <div className="md:w-3/10 w-full h-auto bg-gray-100 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-2">Latest News</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">17th Drug Discovery Strategic Summit</h3>
              <p>Acanthus Research is excited to announce our participation as a Gold Sponsor at the Drug Discovery Strategic Summit (DDSS) in...</p>
              <a href="#" className="text-blue-500">READ MORE</a>
            </div>
            <div>
              <h3 className="font-semibold">Exciting News from Acanthus Research!</h3>
              <p>We're thrilled to announce our participation in the Convention on Pharmaceutical Ingredients (CPhI) at Fiera Milano, Milan, Italy, from October...</p>
              <a href="#" className="text-blue-500">READ MORE</a>
            </div>
            <div>
              <h3 className="font-semibold">Quantitative NMR Spectroscopy</h3>
              <p>Written By: John Tobin Ph.D. Quantitative NMR Spectroscopy What is qNMR? Quantitative NMR (qNMR) uses nuclear magnetic resonance spectroscopy to...</p>
              <a href="#" className="text-blue-500">READ MORE</a>
            </div>
            <div>
              <h3 className="font-semibold">STATEMENT IN SUPPORT OF UKRAINE</h3>
              <p>Acanthus Research Inc. | As of March 10th, 2022, in support of Ukraine we will be withdrawing the sale of our products...</p>
              <a href="#" className="text-blue-500">READ MORE</a>
            </div>
            <div>
              <h3 className="font-semibold">Acanthus Research Inc. announces the launch of CDMO</h3>
              <p>Announcing the launch of CDMO, Acanthus Pharma Services Inc. MISSISSAUGA, ON – Acanthus Research Inc. is proud to announce...</p>
              <a href="#" className="text-blue-500">READ MORE</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 font-semibold">READ MORE FROM OUR BLOG &gt;&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;