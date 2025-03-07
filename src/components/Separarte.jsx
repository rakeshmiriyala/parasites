import { useParams } from "react-router-dom";
import sampleData from "./Data.js";

const DetailsPage = () => {
  const { id } = useParams();
  const item = sampleData.find((data) => data.id === parseInt(id));

  if (!item) {
    return <h1 className="text-center text-red-500">Item Not Found</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-100 text-black p-6 rounded-md shadow-lg w-[50%]">
        <img src={item.image} alt={item.name} className="w-40 h-40 rounded-md mx-auto mb-4" />
        <h2 className="text-xl font-bold text-center">{item.name}</h2>
        <p className="text-center">Product Number: {item.productNumber}</p>
        <p className="text-center">Parent Drug: {item.parentDrug}</p>
        <p className="text-center">CAS Number: {item.casNumber}</p>
        <p className="text-center">Category: {item.category}</p>
        <p className="text-center text-orange-500 font-semibold mt-4">Pending QC</p>
      </div>
    </div>
  );
};

export default DetailsPage;
