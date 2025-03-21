import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainPage from "./components/Dropdown1"; // Displays product categories
import DetailsPage from "./components/Separarte"; // Displays product details
import ProductsPage from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<MainPage />} />
        <Route path="/products/:category/:name" element={<DetailsPage />} />
        <Route path="/:productName/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
