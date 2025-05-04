import { useParams, useNavigate } from "react-router-dom";
import sampleData from "../Data.js";
import Navbar from "../Navbar.jsx";
import bgImage from "../../assets/Logo.png";
import ContactInfo from "../ContactInfo.jsx";

const DetailsPage = () => {
  const { category, name } = useParams();
  const navigate = useNavigate();

  const decodedCategory = decodeURIComponent(category)
    .toLowerCase()
    .replace(/\s+/g, "-");
  const decodedName = decodeURIComponent(name)
    .toLowerCase()
    .replace(/\s+/g, "-");

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
      <ContactInfo />
      <Navbar />
      <div className="relative flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-8 z-0">
        <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
          <img src={bgImage} alt="Background" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5" />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 z-10 text-center">
          Product Details
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full z-10 relative">
          <div className="p-4 sm:p-6 flex justify-center items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            />
          </div>

          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Product Information</h2>
            <p><strong>Product Number:</strong> {item.productNumber}</p>
            <p><strong>CAS Number:</strong> {item.casNumber}</p>
            <p><strong>Parent Drug:</strong> {item.parentDrug}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Molecular Formula:</strong> {item.formula}</p>
            <p><strong>Molecular Weight:</strong> {item.weight}</p>
          </div>

          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Pricing & Availability</h2>
            <p className="text-base sm:text-lg text-orange-500 font-semibold">
              UNIT PRICE: Contact us for pricing.
            </p>
            <p className="mt-1 sm:mt-2 text-gray-700">Pending QC</p>
            <p className="mt-2 sm:mt-4">
              <strong>Submit Orders by Email:</strong>
              <a href="mailto:info@exeluslabs.com" className="text-blue-500"> info@exeluslabs.com</a>
            </p>
            <p className="mt-1 sm:mt-2">
              <strong>Call Us:</strong>
              <a href="tel:+917989540212" className="text-blue-500"> +91 79895 40212</a>
            </p>
            <button
              onClick={() => navigate(`/quote-request/${item.productNumber}`)}
              className="mt-3 sm:mt-4 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer hover:bg-blue-600 w-full sm:w-auto"
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
