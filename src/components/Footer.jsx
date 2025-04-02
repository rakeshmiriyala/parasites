import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Products</h3>
          <ul className="space-y-1 text-sm">
            <li>Drug Impurities Reference Standards</li>
            <li>Drug Substance Reference Standards</li>
            <li>Drug Substance Stable Isotope Labeled Reference Standards</li>
            <li>Drug Metabolites Stable Isotope Labeled Reference Standards</li>
            <li>Drug Metabolites Reference Standards</li>
            <li>Fine Labeled Research Chemicals</li>
            <li>Fine Research Chemicals</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Custom Synthesis</li>
            <li>Research Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>Careers</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Contact Us</li>
            <li>Request a Quote</li>
            <li>Request COA/MSDS</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Connect</h3>
          <div className="flex gap-4 ">
            <FaInstagram className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
            <FaFacebook className="text-xl cursor-pointer" />
          </div>
          <ul className="space-y-1 text-sm mt-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 1-647-478-1021
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> Email Us
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 pt-4">
        <p>© 2025 EXELUSLABS , INC. ALL RIGHTS RESERVED. </p>
      </div>
    </footer>
  );
};

export default Footer;
