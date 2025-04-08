import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import NewsPage from "./LatestUpdates";
import Footer from "./Footer";
import ImageCarousel from "./Our_Accreditation";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NewsPage />
      <ImageCarousel/>
      <Footer />
    </>
  );
};

export default Home;
