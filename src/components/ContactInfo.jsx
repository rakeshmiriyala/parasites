import React from 'react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-end justify-end ">
      <div className="flex flex-col md:flex-row gap-10 px-10 bg-blue-400 py-6 justify-center">
        <div className="text-center">
          <p className="text-lg font-medium  text-black">example@email.com</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-black">+91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
