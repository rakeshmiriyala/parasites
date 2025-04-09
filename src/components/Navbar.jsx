import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons
import { motion, AnimatePresence } from "framer-motion"; // Smooth animation
import sampleData from "./Data"; // Import sampleData
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const { id } = useParams(); // Getting dynamic ID from URL
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let timeoutId = null; // Timeout to prevent flickering

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId); // Prevent immediate hiding
    if (menu === "Products") {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setActiveDropdown(null), 300); // Delay before hiding
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredResults = sampleData.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.casNumber.toLowerCase().includes(query)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const menuLinks = {
    Home: "/",
    Products: [
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
    ],
    CustomSynthesis: "/customsynthesis",
    AboutUs: "/aboutus",
    ContactUs: "/contactus",
  };

  return (
    <nav className="bg-white text-black p-6">
      <div className="container mx-auto flex justify-between items-center px-8">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={Logo} alt="Logo" className="h-24 w-auto mr-2" />
        </Link>

        <ul className="hidden md:flex space-x-6 relative">
          {Object.keys(menuLinks).map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              {menu === "Products" ? (
                <>
                  {/* Clickable "Products" that redirects */}
                  <Link
                    to="/products"
                    className="hover:text-gray-400 text-xl cursor-pointer"
                  >
                    Products
                  </Link>
                  {/* Dropdown on hover */}
                  <AnimatePresence>
                    {activeDropdown === menu && (
                      <motion.ul
                        className="absolute left-0 mt-2 w-[450px] bg-white text-black shadow-xl z-50"
                        onMouseEnter={() => handleMouseEnter(menu)}
                        onMouseLeave={handleMouseLeave}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {menuLinks[menu].map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="block px-4 py-2 hover:bg-gray-300"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={menuLinks[menu]}
                  className="hover:text-gray-400 text-xl"
                >
                  {menu}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Search Input */}
        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="Search by name or CAS"
            value={searchQuery}
            onChange={handleSearch}
            className="bg-white text-black px-4 py-2 rounded-lg focus:outline-none border focus:ring-2 focus:ring-gray-600"
          />
          {searchResults.length > 0 && (
            <ul className="absolute top-12 right-0 w-64 bg-gray-800 text-white rounded shadow-lg">
              {searchResults.map((result) => (
                <li
                  key={result.id}
                  className="border-b border-gray-700 last:border-none"
                >
                  <Link
                    to={`${result.link1}/${result.name}`}
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setSearchResults([])}
                  >
                    {result.name} - {result.casNumber}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
