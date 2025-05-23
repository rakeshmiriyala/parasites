import React from "react";
import image1 from "../assets/Products/EXL-004.png";
import image2 from "../assets/Products/EXL-002.png";
import image3 from "../assets/Products/EXL-003.png";
import image4 from "../assets/Products/EXL-012.png";
import image5 from "../assets/Products/EXL-005.png";
import image6 from "../assets/Products/EXL-006.png";
import image7 from "../assets/Products/EXL-011.png";

const NewsPage = () => {
  return (
    <div className=" my-10 p-4">
      <div className="flex flex-col">
        {/* First Row - 4 Cards */}
        <h2 className="text-2xl text-center font-bold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{
            id: 1,
            image: image1,
            title: "N-Nitroso Vortioxetine",
            desc: "High-quality research chemical for laboratory use."
          },
          {
            id: 2,
            image: image2,
            title: "Clarithromycin-13CD3",
            desc: "Advanced drug compound with high purity levels."
          },
          {
            id: 3,
            image: image3,
            title: "N-Nitroso-varenicline",
            desc: "Stable isotope labeled reference standard."
          },
          {
            id: 4,
            image: image7,
            title: "N-Nitrosodimethylamine – 13C2D6",
            desc: "Innovative formulation with enhanced stability."
          }
          ].map((product) => (
            <div key={product.id} className="bg-white p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="font-semibold mt-2">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.desc}</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 w-full">
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Second Row - Latest News (Scrollable) */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Upcoming Products - 3 Images & 1 Placeholder */}
          {[{
            id: 5,
            image: image5,
            title: "N-Nitroso Rizatriptan",
            desc: "New formulation launching soon."
          },
          {
            id: 6,
            image: image6,
            title: "N-Nitroso Enalapril",
            desc: "Next-generation drug metabolite."
          },
          {
            id: 7,
            image: image4,
            title: "N-Nitroso Perindopril",
            desc: "Highly stable research chemical."
          }
          ].map((product) => (
            <div key={product.id} className="bg-white p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="font-semibold mt-2">{product.title}</h3>
            </div>
          ))}
          {/* News Section with Scroll */}
          <div className="bg-gray-100 p-4 col-span-4 lg:col-span-1 h-[325px] overflow-y-auto">
            <h3 className="text-xl text-center font-semibold mb-2">Latest Updates</h3>
            {/* <div className="space-y-4">
              {[{
                title: "17th Drug Discovery Strategic Summit",
                desc: "Acanthus Research is excited to announce our participation as a Gold Sponsor at the Drug Discovery Strategic Summit (DDSS) in..."
              },
              {
                title: "Exciting News from Acanthus Research!",
                desc: "We're thrilled to announce our participation in the Convention on Pharmaceutical Ingredients (CPhI) at Fiera Milano, Milan, Italy, from October..."
              },
              {
                title: "Quantitative NMR Spectroscopy",
                desc: "Written By: John Tobin Ph.D. Quantitative NMR Spectroscopy What is qNMR? Quantitative NMR (qNMR) uses nuclear magnetic resonance spectroscopy to..."
              },
              {
                title: "STATEMENT IN SUPPORT OF UKRAINE",
                desc: "Acanthus Research Inc. | As of March 10th, 2022, in support of Ukraine we will be withdrawing the sale of our products..."
              },
              {
                title: "Acanthus Research Inc. announces the launch of CDMO",
                desc: "Announcing the launch of CDMO, Acanthus Pharma Services Inc. MISSISSAUGA, ON – Acanthus Research Inc. is proud to announce..."
              }
              ].map((news, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{news.title}</h3>
                  <p>{news.desc}</p>
                  <a href="#" className="text-blue-500">
                    READ MORE
                  </a>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
