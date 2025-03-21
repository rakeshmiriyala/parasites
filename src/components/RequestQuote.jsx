import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const QuoteRequestPage = () => {
  const { catalogNumber } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote Request Submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="mx-6 p-6 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Quote</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Item Details */}
            <div>
              <h3 className="font-bold mb-3">ITEM DETAILS</h3>
              <label className="block text-gray-700">Catalog Number</label>
              <input 
                type="text" 
                value={catalogNumber} 
                readOnly 
                className="w-full border border-gray-300 p-2 rounded bg-gray-100 cursor-not-allowed"
              />
              <label className="block mt-3 text-gray-700">Quantity</label>
              <input 
                type="number" 
                className="w-full border border-gray-300 p-2 rounded" 
                required 
              />
              <label className="block mt-3 text-gray-700">Special Requirements</label>
              <textarea 
                className="w-full border border-gray-300 p-2 rounded" 
                rows="3"
              ></textarea>
            </div>

            {/* Shipping Information */}
            <div>
              <h3 className="font-bold mb-3">SHIPPING INFORMATION</h3>
              <label className="block text-gray-700">Country</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
              <label className="block mt-3 text-gray-700">Address</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
              <label className="block mt-3 text-gray-700">Zip/Postal Code</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
              <label className="block mt-3 text-gray-700">State / Province</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
              <label className="block mt-3 text-gray-700">City</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
          </div>

          {/* Second Row - Contact Information */}
          <div>
            <h3 className="font-bold mb-3">CONTACT INFORMATION</h3>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-[720px] border border-gray-300 p-2 rounded" required />
            <label className="block mt-3 text-gray-700">Affiliation</label>
            <input type="text" className="w-[720px] border border-gray-300 p-2 rounded" />
            <label className="block mt-3 text-gray-700">Email Address</label>
            <input type="email" className="w-[720px] border border-gray-300 p-2 rounded" required />
            <label className="block mt-3 text-gray-700">Phone Number</label>
            <input type="tel" className="w-[720px] border border-gray-300 p-2 rounded" required />
          </div>

          <button className="bg-blue-500 text-center items-center text-white py-2 px-4 w-64 mt-4">Submit Request</button>
        </form>
      </div>
    </>
  );
};

export default QuoteRequestPage;
