import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sampleData from "./Data.js";
import bgImage from "../assets/product-1_bg.jpg";
import Navbar from "./Navbar.jsx";

const MainPage = () => {
  const { category } = useParams(); // Get category from the URL
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setActiveSection(location.pathname);

    // Filter products based on category
    if (category) {
      const filteredProducts = sampleData.filter((item) =>
        item.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
      );
      setFilteredData(filteredProducts);
    } else {
      setFilteredData(sampleData); // Show all if no category is selected
    }
  }, [category, location.pathname]);

  const services = [
    { name: "Drug Impurities Reference Standards", path: `/products/drug-impurities-reference-standards` },
    { name: "Drug Substance Reference Standards", path: `/products/drug-substance-reference-standards` },
    { name: "Drug Substance Stable Isotope Labeled Reference Standards", path: `/products/drug-substance-stable-isotope-labeled-reference-standards` },
    { name: "Drug Metabolites Stable Isotope Labeled Reference Standards", path: `/products/drug-metabolites-stable-isotope-labeled-reference-standards` },
    { name: "Drug Metabolites Reference Standards", path: `/products/drug-metabolites-reference-standards` },
    { name: "Fine Labeled Research Chemicals", path: `/products/fine-labeled-research-chemicals` },
    { name: "Fine Research Chemicals", path: `/products/fine-research-chemicals` },
  ];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        
        {/* Left Section (Sidebar - 30%) */}
        <div className="w-[30%] p-6 bg-white text-black">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {services.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className={`block p-2 ${
                    activeSection.includes(service.path) ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Main Content - 70%) */}
        <div className="w-[70%] p-6">
          <h1 className="text-2xl font-bold mb-4">Chemical Compounds</h1>
          <img
            src={bgImage}
            alt="Chemical Banner"
            className="w-full h-40 object-cover mb-4"
          />

          {/* Cards Section */}
          <div className="space-y-6">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={item.id}>
                  <div className="text-black p-4 rounded-md flex items-center">
                    <Link to={`/products/${category}/${item.name}`} className="mr-4">
                      <img src={item.image} alt={item.name} className="w-24 h-24 rounded-md" />
                    </Link>
                    <div>
                      <Link to={`/products/${category}/${item.name}`}>
                        <h2 className="font-bold hover:underline cursor-pointer">{item.name}</h2>
                      </Link>
                      <p>Product Number: {item.productNumber}</p>
                      <p>Parent Drug: {item.parentDrug}</p>
                      <p>CAS Number: {item.casNumber}</p>
                      <p>Category: {item.category}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-orange-500 font-semibold">Pending QC</p>
                      <Link to={`/products/${category}/${item.name}`} className="text-blue-500 underline">
                        See more size options
                      </Link>
                    </div>
                  </div>

                  {/* Horizontal Line After Each Product */}
                  {index !== filteredData.length - 1 && <hr className="my-4 border-gray-300" />}
                </div>
              ))
            ) : (
              <p className="text-red-500">No products found for this category.</p>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default MainPage;
