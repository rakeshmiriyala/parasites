import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sampleData from "../Data.js";
import bgImage from "../../assets/product-1_bg.jpg";
import Navbar from "../Navbar.jsx";
import ContactInfo from "../ContactInfo.jsx";

const MainPage = () => {
  const { category } = useParams();
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
      setFilteredData(sampleData);
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
      <ContactInfo />
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-[30%] p-4 sm:p-6 bg-white text-black">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Categories</h2>
          <ul>
            {services.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className={`block p-2 text-sm sm:text-base ${
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

        {/* Main Content */}
        <div className="w-full lg:w-[70%] p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Chemical Compounds</h1>
          <img
            src={bgImage}
            alt="Chemical Banner"
            className="w-full h-32 sm:h-40 object-cover mb-4"
          />

          {/* Product Listing */}
          <div className="space-y-4 sm:space-y-6">
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
                    <div className="text-black p-4 rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link to={productPath} className="sm:mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-contain"
                        />
                      </Link>
                      <div>
                        <Link to={productPath}>
                          <h2 className="font-bold hover:underline cursor-pointer text-sm sm:text-base">
                            {item.name}
                          </h2>
                        </Link>
                        <p className="text-sm">Product Number: {item.productNumber}</p>
                        <p className="text-sm">Parent Drug: {item.parentDrug}</p>
                        <p className="text-sm">CAS Number: {item.casNumber}</p>
                        <p className="text-sm">Category: {item.category}</p>
                      </div>
                    </div>
                    {index !== filteredData.length - 1 && (
                      <hr className="my-2 sm:my-4 border-gray-300" />
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-red-500 text-sm sm:text-base">
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
