import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/iso logo.jpg';
import img2 from '../assets/WHO-GMP.png';
import img3 from '../assets/startupindia.png';
import img4 from '../assets/msme-logo.png';

const images = [img1, img2, img3, img4];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="h-auto flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Accreditation</h1>
      <div className="w-[600px] max-w-[900px] mx-auto">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-[600px] h-[500px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
