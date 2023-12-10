import React, { useState, useEffect } from "react";
import "./slider.css";

export const Slider = () => {
  const images = [
    "https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph",
    "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph",
    "https://img.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph",
    "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=ais",
    "https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph",
    "https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image transitions
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to set up a timer for the image transitions
  useEffect(() => {
    const interval = setInterval(changeImage, 3000); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider_wrapper">
      <div className="images_wrapper">
        <img src={images[currentIndex]} alt="" />
      </div>
    </div>
  );
};
