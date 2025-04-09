import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sampleData from "../Data.js";
import bgImage from "../../assets/product-1_bg.jpg";
import Navbar from "../Navbar.jsx";

const MainPage = () => {
  const { category } = useParams(); // Get category from the URL
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setActiveSection(location.pathname);

    if (category) {
      const decodedCategory = decodeURIComponent(category)
        .toLowerCase()
        .replace(/\s+/g, "-");

      const filteredProducts = sampleData.filter(
        (item) =>
          item.category.toLowerCase().replace(/\s+/g, "-") === decodedCategory
      );

      setFilteredData(filteredProducts);
    } else {
      setFilteredData(sampleData); // Show all products if no category is selected
    }
  }, [category, location.pathname]);

  const services = [
    {
      name: "Stable isotopes",
      path: "/products/stable-isotopes",
    },
    {
      name: "Impurities",
      path: "/products/impurities",
    },
    {
      name: "Nitrosamine",
      path: "/products/nitrosamine",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Sidebar (30%) */}
        <div className="w-[30%] p-6 bg-white text-black">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {services.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className={`block p-2 ${
                    activeSection.includes(service.path)
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Main Content (70%) */}
        <div className="w-[70%] p-6">
          <h1 className="text-2xl font-bold mb-4">Chemical Compounds</h1>
          <img
            src={bgImage}
            alt="Chemical Banner"
            className="w-full h-40 object-cover mb-4"
          />

          {/* Product Listing */}
          <div className="space-y-6">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => {
                const productPath = category
                  ? `/products/${encodeURIComponent(
                      category.toLowerCase().replace(/\s+/g, "-")
                    )}/${encodeURIComponent(
                      item.name.toLowerCase().replace(/\s+/g, "-")
                    )}`
                  : `/products/${encodeURIComponent(
                      item.name.toLowerCase().replace(/\s+/g, "-")
                    )}`;

                return (
                  <div key={item.id}>
                    <div className="text-black p-4 rounded-md flex items-center">
                      <Link to={productPath} className="mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-md"
                        />
                      </Link>
                      <div>
                        <Link to={productPath}>
                          <h2 className="font-bold hover:underline cursor-pointer">
                            {item.name}
                          </h2>
                        </Link>
                        <p>Product Number: {item.productNumber}</p>
                        <p>Parent Drug: {item.parentDrug}</p>
                        <p>CAS Number: {item.casNumber}</p>
                        <p>Category: {item.category}</p>
                      </div>
                    </div>
                    {index !== filteredData.length - 1 && (
                      <hr className="my-4 border-gray-300" />
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-red-500">
                No products found for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
