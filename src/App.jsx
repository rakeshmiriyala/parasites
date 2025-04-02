import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainPage from "./components/EachProduct"; // Displays product categories
import DetailsPage from "./components/EachCompound"; // Displays product details
import ProductsPage from "./components/Products";
import QuoteRequestPage from "./components/RequestQuote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<MainPage />} />
        <Route path="/products/:category/:name" element={<DetailsPage />} />
        <Route
          path="/products/:productName/:productId"
          element={<DetailsPage />}
        />
        <Route
          path="/quote-request/:catalogNumber"
          element={<QuoteRequestPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
