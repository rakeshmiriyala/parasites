import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-end justify-end">
      <div className="flex flex-col md:flex-row gap-10 px-10 bg-blue-400 py-4 justify-center">
        <div className="text-center">
          <a
            href="mailto:info@exeluslabs.com"
            className="text-lg font-medium text-black"
          >
            info@exeluslabs.com
          </a>
        </div>
        <div className="text-center">
          <a
            href="tel:+917989540212"
            className="text-lg font-medium text-black"
          >
            +917989540212
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
