import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainPage from "./components/Products/EachProduct"; // Displays product categories
import DetailsPage from "./components/Products/EachCompound"; // Displays product details
import ProductsPage from "./components/Products/Products";
import CustomSynthesisHome from "./components/CustomSynthesis/Home";
import QuoteRequestPage from "./components/Products/RequestQuote";
import QuotePage from "./components/CustomSynthesis/Quote";
import AboutHome from "./components/AboutUs/Home";
import ContactHome from "./components/ContactUs/Home";
import ProductsList from "./components/CustomSynthesis/ProductsList";
import Quote from "./components/Quote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/aboutus" element={<AboutHome/>} />
        <Route path="/contactus" element={<ContactHome/>} />
        <Route path="/customsynthesis" element={<CustomSynthesisHome />} />
        <Route path="/customsynthesis/products-list" element={<ProductsList />} />
        <Route path="/customsynthesis/quote" element={<QuotePage />} />
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
