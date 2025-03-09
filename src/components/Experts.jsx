import React from "react";
import image1 from "../assets/contact_1.jpg";
import image2 from "../assets/contact_2.jpg";
import image3 from "../assets/contact_3.png";
import image4 from "../assets/contact_1.jpg";
import image5 from "../assets/contact_2.jpg";

const teamMembers = [
  { name: "Alice Johnson", designation: "Project Manager", img: image1 },
  { name: "Bob Smith", designation: "Lead Developer", img: image2 },
  { name: "Charlie Brown", designation: "UI/UX Designer", img: image3 },
  { name: "David Wilson", designation: "Marketing Head", img: image4 },
  { name: "David Wilson", designation: "Marketing Head", img: image5 },
];

const OurExperts = () => {
  return (
    <div className="flex flex-col items-center p-6 h-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Our Experts</h1>
      <p className="text-lg text-gray-600 text-center mb-6">Let's Meet Our Team</p>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-6 w-64 h-80 text-center flex flex-col items-center justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-200"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-500">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
