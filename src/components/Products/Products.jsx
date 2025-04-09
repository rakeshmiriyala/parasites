import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import sampleData from "../Data.js";
import bgImage from "../../assets/product-1_bg.jpg";
import Navbar from "../Navbar.jsx";

const ProductsPage = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of products per page

  useEffect(() => {
    setAllProducts(sampleData); // Load all products
  }, []);

  const decodedCategory =
    category && category !== "null"
      ? decodeURIComponent(category).toLowerCase().replace(/\s+/g, "-")
      : null;

  const filteredProducts = decodedCategory
    ? allProducts.filter(
        (item) =>
          item.category.toLowerCase().replace(/\s+/g, "-") === decodedCategory
      )
    : allProducts;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle Pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Generate Pagination Buttons
  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2);
      if (currentPage > 4) pages.push("...");
      if (currentPage > 3 && currentPage < totalPages - 2)
        pages.push(currentPage);
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages - 1, totalPages);
    }
    return pages;
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Sidebar (30%) */}
        <div className="w-[30%] p-6 bg-white text-black">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {[
              "Stable isotopes",
              "Impurities",
              "Nitrosamine",
            ].map((category, index) => (
              <li key={index}>
                <Link
                  to={`/products/${encodeURIComponent(
                    category.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="block p-2 hover:bg-blue-500 hover:text-white"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section - Display Paginated Products (70%) */}
        <div className="w-[70%] p-6">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <img
            src={bgImage}
            alt="Chemical Banner"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          {/* Display Paginated Products */}
          <div className="space-y-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((item, index) => {
                const productPath = `/products/${encodeURIComponent(
                  item.category.toLowerCase().replace(/\s+/g, "-")
                )}/${encodeURIComponent(
                  item.name.toLowerCase().replace(/\s+/g, "-")
                )}`;
                return (
                  <div key={item.id} className="p-4 bg-white">
                    <div className="text-black flex items-center">
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
                    {/* Horizontal Line After Each Product */}
                    {index !== currentProducts.length - 1 && (
                      <hr className="my-4 border-gray-300" />
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-red-500">No products available.</p>
            )}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 items-center">
            {/* Left Arrow Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-3 mx-2 rounded-full transition ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              <FaArrowLeftLong size={25} />
            </button>
            {/* Page Number Buttons in Boxes */}
            <div className="flex gap-2">
              {generatePageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" && setCurrentPage(page)
                  }
                  className={`px-4 py-2 rounded-md border ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-300 text-black"
                  } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}
            </div>
            {/* Right Arrow Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-3 mx-2 rounded-full transition ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              <FaArrowRightLong size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
