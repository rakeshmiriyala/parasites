import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 sm:px-8 md:px-10 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Products</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>
              <Link to="/products/impurities">Impurities</Link>
            </li>
            <li>
              <Link to="/products/nitrosamine">Nitrosamine</Link>
            </li>
            <li>
              <Link to="/products/stable-isotopes">Stable Isotopes</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Services</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>
              <Link to="/customsynthesis">Custom Synthesis</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Company</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Support</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/quote">Request a Quote</Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Connect</h3>
          <div className="flex gap-4 mb-4 sm:mb-6">
            <a
              href="https://www.instagram.com/exelus_labs?igsh=MXEyeWU2bXF0NHdhcg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/exelus-labs-private-limited-1/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600 transition" />
            </a>
          </div>

          <ul className="space-y-1 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+917989540212">+91 79895 40212</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+919709666777">+91 97096 66777</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:info@exeluslabs.com">info@exeluslabs.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 pt-4">
        <p>© 2025 EXELUSLABS , INC. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
