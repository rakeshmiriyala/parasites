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
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Products</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="/products/stable-isotopes"
                className=""
              >
                Stable Isotopes
              </a>
            </li>
            <li>
              <a
                href="/products/impurities"
                className=""
              >
                Impurities
              </a>
            </li>
            <li>
              <a
                href="/products/nitrosamine"
                className=""
              >
                Nitrosamine
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Custom Synthesis</li>
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
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Connect</h3>
          <div className="flex gap-4">
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

          <ul className="space-y-1 text-sm mt-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+917989540212" className="">
                +91 79895 40212
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+919709666777" className="">
                +91 97096 66777
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="info@exeluslabs.com" className="">
              info@exeluslabs.com
              </a>
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
