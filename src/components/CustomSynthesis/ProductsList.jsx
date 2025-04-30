// src/pages/ProductsList.jsx

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import productsData from "../CustomSynthesis/ProducstData";
import Navbar from "../Navbar";

const ITEMS_PER_PAGE = 50;

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = productsData.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(productsData.length / ITEMS_PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 sm:px-6 xs:px-10 md:px-10 py-6 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Product List
        </h1>

        <div className="overflow-auto max-h-[75vh] border border-gray-300 rounded-md">
          <table className="min-w-[600px] w-full text-left border-collapse">
            <thead className="bg-blue-100 sticky top-0 z-10">
              <tr>
                <th className="py-3 px-4 border text-sm sm:text-base">S.No</th>
                <th className="py-3 px-4 border text-sm sm:text-base">Product Code</th>
                <th className="py-3 px-4 border text-sm sm:text-base">Product Name</th>
                <th className="py-3 px-4 border text-sm sm:text-base">CAS No</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentItems.map((product) => (
                <tr key={product.sno} className="hover:bg-gray-100 text-sm sm:text-base">
                  <td className="py-2 px-4 border">{product.sno}</td>
                  <td className="py-2 px-4 border">{product.productCode}</td>
                  <td className="py-2 px-4 border">{product.productName}</td>
                  <td className="py-2 px-4 border">{product.casNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6 hover:cursor-pointer text-sm sm:text-base">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex flex-wrap justify-center gap-2"}
            pageClassName={"px-3 py-1 border rounded"}
            activeClassName={"bg-blue-500 text-white"}
            previousClassName={"px-3 py-1 border rounded"}
            nextClassName={"px-3 py-1 border rounded"}
            breakClassName={"px-3 py-1"}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsList;
