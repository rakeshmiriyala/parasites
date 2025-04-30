import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import sampleData from "./Data";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let timeoutId = null;

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (menu === "Products") {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setActiveDropdown(null), 300);
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
      { name: "Stable isotopes", path: "/products/stable-isotopes" },
      { name: "Impurities", path: "/products/impurities" },
      { name: "Nitrosamine", path: "/products/nitrosamine" },
    ],
    CustomSynthesis: "/customsynthesis",
    AboutUs: "/aboutus",
    ContactUs: "/contactus",
  };

  return (
    <nav className="bg-white text-black border-b border-gray-300 shadow-sm">
      <div className=" flex justify-between items-center p-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 relative text-[20px] font-medium">
          {Object.keys(menuLinks).map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              {menu === "Products" ? (
                <>
                  <Link
                    to="/products"
                    className="hover:text-blue-600 transition duration-200"
                  >
                    Products
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === menu && (
                      <motion.ul
                        className="absolute left-0 mt-3 w-[300px] rounded-md bg-white shadow-2xl z-50 overflow-hidden"
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
                              className="block px-4 py-3 hover:bg-gray-100 text-sm"
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
                  className="hover:text-blue-600 transition duration-200"
                >
                  {menu}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Search Input Desktop */}
        <div className="relative hidden md:block ml-4">
          <input
            type="text"
            placeholder="Search by name or CAS"
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border rounded-md w-[240px] text-sm focus:ring-2 focus:ring-blue-500"
          />
          {searchResults.length > 0 && (
            <ul className="absolute top-12 right-0 w-64 bg-white text-black rounded-md shadow-lg z-50 text-sm">
              {searchResults.map((result) => (
                <li
                  key={result.id}
                  className="border-b border-gray-200 last:border-none"
                >
                  <Link
                    to={`${result.link1}/${result.name}`}
                    className="block px-4 py-2 hover:bg-blue-50"
                    onClick={() => setSearchResults([])}
                  >
                    {result.name} - {result.casNumber}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 py-4 border-t border-gray-200 bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="space-y-4 text-lg font-medium">
              {Object.keys(menuLinks).map((menu, index) => (
                <li key={index}>
                  {menu === "Products" ? (
                    <>
                      <Link
                        to="/products"
                        className="text-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        Products
                      </Link>
                      <ul className="ml-3 mt-2 space-y-2 text-sm text-gray-600">
                        {menuLinks[menu].map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={menuLinks[menu]}
                      className="text-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {menu}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Search by name or CAS"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-2 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
              {searchResults.length > 0 && (
                <ul className="absolute top-12 left-0 w-full bg-white text-black rounded-md shadow-md z-50 text-sm">
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="border-b border-gray-200 last:border-none"
                    >
                      <Link
                        to={`${result.link1}/${result.name}`}
                        className="block px-4 py-2 hover:bg-blue-50"
                        onClick={() => {
                          setSearchResults([]);
                          setIsOpen(false);
                        }}
                      >
                        {result.name} - {result.casNumber}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
