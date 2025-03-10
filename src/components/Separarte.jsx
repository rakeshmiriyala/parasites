import { useParams } from "react-router-dom";
import sampleData from "./Data.js";
import Navbar from "./Navbar.jsx";

const DetailsPage = () => {
  const { category, name } = useParams();
  
  // Find the product that matches both category and name
  const item = sampleData.find((data) => 
    data.category.toLowerCase().replace(/\s+/g, "-") === category &&
    data.name === name
  );

  if (!item) {
    return <h1 className="text-center text-red-500 mt-10 text-2xl">Item Not Found</h1>;
  }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>

      {/* Row with 3 Columns */}
      <div className="grid grid-cols-3 w-full">
        
        {/* First Column: Image */}
        <div className="bg-white p-6 flex justify-center items-center">
          <img src={item.image} alt={item.name} className="w-48 h-48 object-contain" />
        </div>

        {/* Second Column: Product Information */}
        <div className="bg-white p-6">
          <h2 className="text-xl font-bold mb-4">Product Information</h2>
          <p><strong>Product Number:</strong> {item.productNumber}</p>
          <p><strong>CAS Number:</strong> {item.casNumber}</p>
          <p><strong>Parent Drug:</strong> {item.parentDrug}</p>
          <p><strong>Category:</strong> {item.category}</p>
        </div>

        {/* Third Column: Pricing & Availability */}
        <div className="bg-white p-6">
          <h2 className="text-xl font-bold mb-4">Pricing & Availability</h2>
          <p className="text-lg text-orange-500 font-semibold">UNIT PRICE: Contact us for pricing.</p>
          <p className="mt-2 text-gray-700">Pending QC</p>
          <p className="mt-4">
            <strong>Submit Orders by Email:</strong>  
            <a href="mailto:orders@acanthusresearch.com" className="text-blue-500"> orders@acanthusresearch.com</a>
          </p>
          <p className="mt-2">
            <strong>Call Us:</strong> <span className="text-gray-800">1-647-478-1021</span>
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer hover:bg-blue-600">
            Request a Quote
          </button>
        </div>

      </div>
    </div>
    </>
  );
};

export default DetailsPage;
