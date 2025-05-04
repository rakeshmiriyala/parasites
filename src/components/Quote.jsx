import React, { useState } from "react";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";

const Quote = () => {
  const [formData, setFormData] = useState({
    topic: "Custom Synthesis of Chemical",
    productCode: "",
    quantity: "",
    productName: "",
    casNumber: "",  // Add CAS Number
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <ContactInfo />
      <Navbar />
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white w-full max-w-4xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Chemical Services Quote
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Product Code and Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Product Code or CAS Number:</label>
                <input
                  type="text"
                  name="productCode"
                  value={formData.productCode}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter Product Code or CAS Number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Quantity:</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter Quantity"
                />
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-gray-700 font-medium">Product Name:</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border"
                placeholder="Enter Product Name"
              />
            </div>

            {/* CAS Number */}
            <div>
              <label className="block text-gray-700 font-medium">CAS Number:</label>
              <input
                type="text"
                name="casNumber" // Add CAS Number input
                value={formData.casNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border"
                placeholder="Enter CAS Number"
              />
            </div>

            {/* Contact Information */}
            <h2 className="text-xl font-semibold text-gray-700 mt-4">Contact Information</h2>

            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">First Name: *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Last Name: *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Email Address: *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-gray-700 font-medium">Company/Institution Name: *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border"
                placeholder="Enter Company Name"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 font-medium">Country: *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              >
                <option value="">Please Select</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 hover:cursor-pointer bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quote;
