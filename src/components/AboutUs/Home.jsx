import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";

const AboutHome = () => {
  return (
    <>
    <ContactInfo/>
      <Navbar />
      <Hero />
      <Footer/>
    </>
  );
};

export default AboutHome;
