import { useParams, useNavigate } from "react-router-dom";
import sampleData from "../Data.js";
import Navbar from "../Navbar.jsx";
import bgImage from "../../assets/Logo.png";
import ContactInfo from "../ContactInfo.jsx";

const DetailsPage = () => {
  const { category, name } = useParams();
  const navigate = useNavigate();

  // Decode URL parameters to handle spaces & special characters correctly
  const decodedCategory = decodeURIComponent(category)
    .toLowerCase()
    .replace(/\s+/g, "-");
  const decodedName = decodeURIComponent(name)
    .toLowerCase()
    .replace(/\s+/g, "-");

  // Find the matching product in sampleData
  const item = sampleData.find(
    (data) =>
      data.category.toLowerCase().replace(/\s+/g, "-") === decodedCategory &&
      data.name.toLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!item) {
    return (
      <h1 className="text-center text-red-500 mt-10 text-2xl">
        Item Not Found
      </h1>
    );
  }

  return (
    <>
    <ContactInfo/>
      <Navbar />
      <div className="relative flex flex-col items-center h-screen p-8 z-0">
        <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
          <img src={bgImage} alt="Background" className="w-2/5" />
        </div>

        <h1 className="text-3xl font-bold mb-6 z-10">Product Details</h1>

        <div className="grid grid-cols-3 w-full z-10 relative">
          <div className="p-6 flex justify-center items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Product Information</h2>
            <p>
              <strong>Product Number:</strong> {item.productNumber}
            </p>
            <p>
              <strong>CAS Number:</strong> {item.casNumber}
            </p>
            <p>
              <strong>Parent Drug:</strong> {item.parentDrug}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Molecular Formula:</strong> {item.formula}
            </p>
            <p>
              <strong>Molecular Weight:</strong> {item.weight}
            </p>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Pricing & Availability</h2>
            <p className="text-lg text-orange-500 font-semibold">
              UNIT PRICE: Contact us for pricing.
            </p>
            <p className="mt-2 text-gray-700">Pending QC</p>
            <p className="mt-4">
              <strong>Submit Orders by Email:</strong>
              <a
                href="mailto:orders@acanthusresearch.com"
                className="text-blue-500"
              >
                {" "}
                orders@acanthusresearch.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Call Us:</strong>{" "}
              <span className="text-gray-800">1-647-478-1021</span>
            </p>
            <button
              onClick={() => navigate(`/quote-request/${item.productNumber}`)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer hover:bg-blue-600"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
