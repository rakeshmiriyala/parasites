import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import NewsPage from "./LatestUpdates";
import Footer from "./Footer";
import ImageCarousel from "./Our_Accreditation";
import ContactInfo from "./ContactInfo";

const Home = () => {
  return (
    <>
    <ContactInfo/>
      <Navbar />
      <HeroSection />
      <NewsPage />
      <ImageCarousel/>
      <Footer />
    </>
  );
};

export default Home;
