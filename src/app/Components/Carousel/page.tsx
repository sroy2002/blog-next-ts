"use client";
import { useState, } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import pic1 from "../../../../public/Assests/1.jpg";
import pic2 from "../../../../public/Assests/2.jpg";
import pic3 from "../../../../public/Assests/3.jpg";
import pic4 from "../../../../public/Assests/4.jpg";


const images = [
  pic1,pic2,pic3,pic4
];

const buttonClasses = "px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg right-[5rem] bottom-8";


const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      <motion.div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * 100 / images.length}%)` }}
      >
        {images.map((image, index) => (
          <motion.div key={index} className="w-full h-[30rem] relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill" // Use layout fill to cover the container
              objectFit="cover" // Maintain aspect ratio
              className="relative" // Optional: Add rounded corners
            />
            <button className={` absolute z-10 ${buttonClasses}`}>Learn More</button>
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-md hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-md hover:bg-gray-200"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;