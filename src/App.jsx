import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import MainPage from "./components/Dropdown1";
import DetailsPage from "./components/Separarte";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development/:name" element={<DetailsPage />} />
        <Route path="/services/web-development" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
