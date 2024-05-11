import React, { useState, useEffect } from "react";
import { NASA_API_KEY } from "../configs/config";

const PictureSlideShow = () => {
  const [apodData, setApodData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`
        );
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchApodData();

    const TIME_INTERVAL = 15000;
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % apodData.length);
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, [apodData.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % apodData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + apodData.length) % apodData.length
    );
  };

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      {apodData.length > 0 ? (
        <>
          <img
            src={apodData[currentSlide].url}
            alt={apodData[currentSlide].title}
            className="w-full object-cover"
          />
          <div className="absolute top-20 left-6 right-0 bottom-0">
            <h1 className="text-6xl font-bold">Welcome to NASA</h1>
            <p className="text-2xl mt-2">Explore the wonders of the universe!</p>
            <p className="text-lg mt-4">Discover breathtaking images captured by NASA's space missions.</p>
            <p className="text-lg mt-2">Learn about the latest discoveries in astronomy and space exploration.</p>
          </div>
        </>
      ) : (
        <div className="absolute top-20 left-6 right-0 bottom-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Welcome to NASA</h1>
          <p className="text-2xl mt-2">Explore the wonders of the universe!</p>
          <p className="text-lg mt-4">Discover breathtaking images captured by NASA's space missions.</p>
          <p className="text-lg ">Learn about the latest discoveries in astronomy and space exploration.</p>
        </div>
      )}
      <button
        className="absolute top-0 left-0 bg-gray-900 bg-opacity-50 px-4 py-2 text-gray-300"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-0 right-0 bg-gray-800 bg-opacity-50 px-4 py-2 text-gray-300"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default PictureSlideShow;
