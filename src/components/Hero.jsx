import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/bg_video.mp4";

const HeroSection = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedMetadata={(e) => (e.target.playbackRate = 0.5)} // Set playback rate
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      {/* <div className="relative text-center text-white p-6 rounded-lg max-w-2xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Our art is at the heart of 1,000+ reference standards
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          High-quality reference standards from our lab to yours
        </p>
        
        <button
          onClick={() => navigate("/products")} // Navigate to /products
          className="px-6 py-3 hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          Browse Products
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
