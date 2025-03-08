import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons
import { motion, AnimatePresence } from "framer-motion"; // Smooth animation
import sampleData from './Data'; // Import sampleData
import Logo from "../assets/Logo.png"
const Navbar = () => {
  const { id } = useParams(); // Getting dynamic ID from URL
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let timeoutId = null; // Timeout to prevent flickering

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId); // Prevent immediate hiding
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setActiveDropdown(null), 300 )// Delay before hiding
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredResults = sampleData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  // Dropdown Links with dynamic params
  const menuLinks = {
    Products: [
      { name: "Our Story", path: `/about/story/${id || 1}` },
      { name: "Team", path: `/about/team/${id || 1}` },
      { name: "Mission", path: `/about/mission/${id || 1}` },
      { name: "Vision", path: `/about/vision/${id || 1}` },
      { name: "Careers", path: `/about/careers/${id || 1}` },
      { name: "Testimonials", path: `/about/testimonials/${id || 1}` },
    ],
    Services: [
      { name: "Our Story", path: `/about/story/${id || 1}` },
      { name: "Team", path: `/about/team/${id || 1}` },
      { name: "Mission", path: `/about/mission/${id || 1}` },
      { name: "Vision", path: `/about/vision/${id || 1}` },
      { name: "Careers", path: `/about/careers/${id || 1}` },
      { name: "Testimonials", path: `/about/testimonials/${id || 1}` },
    ],
    Company: [
      { name: "Web Development", path: `/services/web-development` },
      { name: "Mobile App Development", path: `/services/mobile-app/${id || 1}` },
      { name: "UI/UX Design", path: `/services/ui-ux-design/${id || 1}` },
      { name: "SEO & Marketing", path: `/services/seo-marketing/${id || 1}` },
      { name: "E-commerce Solutions", path: `/services/e-commerce/${id || 1}` },
      { name: "Cloud Hosting", path: `/services/cloud-hosting/${id || 1}` },
    ],
    Support: [
      { name: "Support", path: `/contact/support/${id || 1}` },
      { name: "Sales", path: `/contact/sales/${id || 1}` },
      { name: "Partnerships", path: `/contact/partnerships/${id || 1}` },
      { name: "Press", path: `/contact/press/${id || 1}` },
      { name: "Investors", path: `/contact/investors/${id || 1}` },
      { name: "Feedback", path: `/contact/feedback/${id || 1}` },
    ],
  };

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 relative">
          {Object.keys(menuLinks).map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/${menu.toLowerCase()}`} className="hover:text-gray-400">
                {menu}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {activeDropdown === menu && (
                  <motion.ul
                    className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg"
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuLinks[menu].map((item) => (
                      <li key={item.path} className=" last:border-none">
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
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-white text-black px-4 py-2 rounded-lg focus:outline-none border focus:ring-2 focus:ring-gray-600"
          />
          {searchResults.length > 0 && (
            <ul className="absolute top-12 right-0 w-64 bg-gray-800 text-white rounded shadow-lg">
              {searchResults.map((result) => (
                <li key={result.id} className="border-b border-gray-700 last:border-none">
                  <Link
                    to={`${result.link1}/${result.name}`} // Example: Generate path dynamically
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setSearchResults([])}
                  >
                    {result.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden mt-4 space-y-3 text-center bg-gray-900 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {Object.keys(menuLinks).map((menu, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === menu ? null : menu)}
                  className="block py-2 w-full text-left px-4 text-white"
                >
                  {menu}
                </button>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                  {activeDropdown === menu && (
                    <motion.ul
                      className="bg-gray-800 text-white mt-1 rounded shadow-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuLinks[menu].map((item) => (
                        <li key={item.path} className="border-b border-gray-700 last:border-none">
                          <Link
                            to={item.path}
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;