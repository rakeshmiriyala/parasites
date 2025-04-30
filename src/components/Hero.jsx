import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/bg_video.mp4";

const HeroSection = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
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
    </div>
  );
};

export default HeroSection;
