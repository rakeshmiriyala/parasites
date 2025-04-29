import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import sampleData from "../Data.js";
import bgImage from "../../assets/product-1_bg.jpg";
import Navbar from "../Navbar.jsx";
import ContactInfo from "../ContactInfo.jsx";
import ReactPaginate from "react-paginate";

const ProductsPage = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    setAllProducts(sampleData);
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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <ContactInfo />
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[30%] p-6 bg-white text-black">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {["Stable isotopes", "Impurities", "Nitrosamine"].map(
              (category, index) => (
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
              )
            )}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-[70%] p-6">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <img
            src={bgImage}
            alt="Chemical Banner"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />

          {/* Product List */}
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

          {/* React Paginate */}
          <div className="flex justify-center mt-8 items-center">
            <ReactPaginate
              pageCount={totalPages}
              onPageChange={handlePageChange}
              forcePage={currentPage}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              containerClassName="flex items-center gap-2"
              pageClassName="px-3 py-1 rounded border bg-gray-100 hover:bg-gray-300 cursor-pointer"
              activeClassName="bg-blue-500 text-white"
              previousLabel={<FaArrowLeftLong />}
              nextLabel={<FaArrowRightLong />}
              previousClassName="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-blue-500"
              nextClassName="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-blue-500"
              disabledClassName="text-gray-400 cursor-not-allowed"
              breakLabel="..."
              breakClassName="px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
