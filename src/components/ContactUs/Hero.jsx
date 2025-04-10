import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const ContactHero = () => {
  return (
    <div
        className=" py-16 px-4 bg-cover bg-center"
      >
        {/* Color Overlay (using absolute positioning) */}
        <div className="inset-0 bg-[#F2EEEA] opacity-50 z-2"></div>
        {/* Content */}
        <div className=" z-10">
          <div className=" mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 xs:gap-4">
            {/* Left Section */}
            <div
              className="text-center lg:text-left relative fadeInUp animate-fadeIn"
              data-aos="fade-right"
            >
              <div className="mb-6 pl-4 p-2 md:p-0 sm:p-4 xs:pl-0 relative">
                {/* Upper Div (for h6 and h3) */}
                <div className="flex flex-col lg:flex-row mb-10 xs:mb-5">
                  {/* Left Div for "Contact" */}
                  <div className="flex flex-col items-start justify-center mb-4 lg:mb-0">
                    <h3 className="text-2xl sm:text-2xl lg:text-xl font-bold transform lg:rotate-270">
                      Contact
                    </h3>
                  </div>
                  {/* Right Div for "Reach out & Connect with Us" */}
                  <div className="flex flex-col items-start justify-start">
                    <h3 className="text-3xl xs:text-2xl text-start sm:text-2xl lg:text-5xl font-bold">
                      Reach out &amp; <br /> Connect with Us
                    </h3>
                  </div>
                </div>
                <hr className="font-thin text-sm mb-6" />
                {/* Lower Div (for p tag and the contact details) */}
                <div className="mb-6 xs:mb-2">
                  <p className="md:text-lg sm:text-md xs:text-md text-start lg:text-lg text-gray-600 mb-6 xs:mb-4">
                    Let’s bring your dream space to life! Whether it's ceiling,
                    lighting, plumbing, or complete building design, our experts
                    are here to help. Reach out today and let's create something
                    extraordinary together!
                  </p>
                  <div className="space-y-4 bg-transparent">
                    {/* Phone */}
                    <div className="flex items-center group transition-all hover:cursor-pointer duration-300 py-2 px-4 md:py-0 sm:py-0 xs:px-0 rounded-md">
                      <div className="bg-blue-500 text-white p-3 mr-4 transform group-hover:rotate-360 transition-transform duration-800">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                      <a
                        href="tel:+917989540212"
                        className="relative text-lg text-gray-600 group-hover:text-blue-500 transition-all duration-300"
                      >
                        +917989540212
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    </div>
                    <div className="flex items-center group transition-all hover:cursor-pointer duration-300 py-2 px-4 md:py-0 sm:py-0 xs:px-0 rounded-md">
                    <div className="bg-blue-500 text-white p-3 mr-4 transform group-hover:rotate-360 transition-transform duration-800">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                      <a
                        href="tel:+919709666777"
                        className="relative text-lg text-gray-600 group-hover:text-blue-500 transition-all duration-300"
                      >
                        +919709666777
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    </div>
                    {/* Email */}
                    <div className="flex items-center group transition-all hover:cursor-pointer duration-300 py-2 px-4 sm:py-0 md:py-0 xs:px-0 rounded-md">
                      <div className="bg-blue-500 text-white p-3 mr-4 transform group-hover:rotate-360 transition-transform duration-800">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <a
                        href="mailto:info@exeluslabs.com"
                        className="relative text-lg text-gray-600 group-hover:text-blue-500 transition-all duration-300"
                      >
                        info@exeluslabs.com
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    </div>
                    {/* Location */}
                    <div className="flex items-center group transition-all hover:cursor-pointer duration-300 py-2 px-4 sm:py-0 md:py-0 xs:px-0 rounded-md">
                      <div className="bg-blue-500 text-white p-3 mr-4 transform group-hover:rotate-360 transition-transform duration-800">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <address className="relative text-lg text-gray-600 group-hover:text-blue-500 transition-all duration-300">
                        <a
                          href="https://www.google.com/maps?q=17.5536403656006,78.4206161499023"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative"
                        >
                          Suraram, Hyderabad, Telangana - 500055.
                          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div
              className="text-center lg:text-left relative w-full max-w-lg mx-auto fadeInUp animate-fadeIn"
              data-aos="fade-left"
            >
              <form
                className="bg-white p-8 xs:p-6 relative group hover:bg-opacity-90 transition-all duration-300"
                action="#"
                method="POST"
                noValidate
              >
                <h2 className="md:text-xl xs:text-lg sm:text-xl lg:text-2xl font-bold mb-6">
                  Get In Touch With Us And Enjoy <br /> Top-Notch Support
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full  border-gray-400 focus:outline-none  py-3 px-4 transition-all duration-300 border-b "
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full  border-gray-400 focus:outline-none  py-3 px-4 transition-all duration-300 border-b "
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone no"
                    className="w-full  border-gray-400 focus:outline-none  py-3 px-4 transition-all duration-300 border-b "
                  />
                  {/* <select
                    name="service"
                    className="w-full text-gray-400 hover:cursor-pointer border-gray-400 focus:outline-none focus:border-[#00a69c] py-3 px-4 transition-all duration-300 border-b group-hover:border-[#00a69c]"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Civil Works">Civil Works</option>
                    <option value="Imterior Works">Interior Works</option>
                    <option value="Plumbing Works">Plumbing Works</option>
                    <option value="Electrical Works">Electrical Works</option>
                    <option value="Fire Fitting Works">
                      Fire Fitting Works
                    </option>
                    <option value="HVAC Works">HVAC Works</option>
                    <option value="Landscaping Works">Landscaping Works</option>
                    <option value="Water Proofing Works">
                      Water Proofing Works
                    </option>
                    <option value="Painting/Texture">Painting/Texture</option>
                  </select> */}
                  <textarea
                    name="message"
                    placeholder="Write message"
                    className="w-full border-b border-gray-400 focus:outline-none p-3 px-4 transition-all duration-300  "
                  ></textarea>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-500 text-white hover:cursor-pointer  transition-all duration-300 w-full lg:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactHero
