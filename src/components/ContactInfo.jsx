import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex justify-end w-full bg-gray-200">
      {/* Stylized Slash Section */}
      {/* <div className="flex items-center px-2">
        <div className="w-1 h-5 bg-gray-600 rotate-12 origin-bottom mr-0.5"></div>
        <div className="w-1 h-5 bg-gray-600 rotate-12 origin-bottom"></div>
      </div> */}

      {/* Contact Info Section */}
      <div className="flex items-center gap-4 bg-blue-600 rounded-tl-4xl rounded-br-4xl text-white px-4 py-3">
        {/* Email */}
        <div className="flex items-center gap-2">
          <MdEmail className="text-white text-lg" />
          <a
            href="mailto:info@prasilabs.com"
            className="hover:underline text-white font-medium"
          >
            info@prasilabs.com
          </a>
        </div>

        {/* Divider */}
        <div className="border-l border-white h-5" />

        {/* Phone */}
        <div className="flex items-center gap-2 pl-4">
          <MdPhone className="text-white text-lg" />
          <a
            href="tel:+919160006515"
            className="hover:underline text-white font-medium"
          >
            +91 9160006515
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
