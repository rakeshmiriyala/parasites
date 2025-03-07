import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sampleData from "./Data.js";

const MainPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const services = [
    { name: "Web Development", path: `/services/web-development` },
    { name: "Mobile App Development", path: `/services/mobile-app` },
    { name: "UI/UX Design", path: `/services/ui-ux-design/${id || 1}` },
    { name: "SEO & Marketing", path: `/services/seo-marketing/${id || 1}` },
    { name: "E-commerce Solutions", path: `/services/e-commerce/${id || 1}` },
    { name: "Cloud Hosting", path: `/services/cloud-hosting/${id || 1}` },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Section (70%) */}
      <div className="w-[70%] p-6">
        <h1 className="text-2xl font-bold mb-4">Chemical Compounds</h1>
        <img
          src="/chemical-banner.jpg"
          alt="Chemical Banner"
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        {/* Cards Section */}
        <div className="space-y-6">
          {sampleData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 text-black p-4 rounded-md flex items-center shadow-md"
            >
              <Link to={`/services/web-development/${item.id}`} className="mr-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-md" />
              </Link>
              <div>
                <Link to={`/services/web-development/${item.id}`}>
                  <h2 className="font-bold hover:underline cursor-pointer">{item.name}</h2>
                </Link>
                <p>Product Number: {item.productNumber}</p>
                <p>Parent Drug: {item.parentDrug}</p>
                <p>CAS Number: {item.casNumber}</p>
                <p>Category: {item.category}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-orange-500 font-semibold">Pending QC</p>
                <Link to={`/services/web-development/${item.id}`} className="text-blue-500 underline">
                  See more size options
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="w-[30%] p-6 bg-gray-900 text-white">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.path}>
              <Link
                to={service.path}
                className={`block p-2 rounded-md ${
                  activeSection === service.path ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
