import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex justify-center sm:justify-end w-full bg-gray-200">
      {/* Contact Info Section */}
      <div className="flex items-center gap-4 bg-blue-600 rounded-tl-4xl rounded-br-4xl text-white px-4 py-3 w-full sm:w-auto">
        {/* Email */}
        <div className="flex items-center gap-2">
          <MdEmail className="text-white text-lg" />
          <a
            href="mailto:info@exeluslabs.com"
            className="hover:underline text-white font-medium"
          >
            info@exeluslabs.com
          </a>
        </div>

        {/* Divider */}
        <div className="border-l border-white h-5 hidden sm:block" />

        {/* Phone */}
        <div className="flex items-center gap-2 pl-4">
          <MdPhone className="text-white text-lg" />
          <a
            href="tel:+91 7989540212"
            className="hover:underline text-white font-medium"
          >
            +91 79895 40212
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
