import React, { useState, useEffect } from 'react';
import PageLoading from './PageLoading';

const NASA_API_ENDPOINT = "https://images-api.nasa.gov/search?q=";

const PictureGallery = () => {
  const [mediaAssets, setMediaAssets] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchMediaAssets = async () => {
      try {
        const response = await fetch(`${NASA_API_ENDPOINT}&media_type=image`);
        const data = await response.json();
        setMediaAssets(data.collection.items);
      } catch (error) {
        console.error("Error fetching media assets:", error);
      }
    };

    fetchMediaAssets();
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % mediaAssets.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + mediaAssets.length) % mediaAssets.length
  //   );
  // };

  const handleImageClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {mediaAssets.length > 0 ? (
        <>
          <img
            src={mediaAssets[currentSlide].links[0].href}
            alt={mediaAssets[currentSlide].data[0]?.title || "NASA Image"}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 px-4 py-2 text-white">
            <h1 className="text-2xl font-bold">{mediaAssets[currentSlide].data[0]?.title || "NASA Image"}</h1>
            <p className="text-lg">{mediaAssets[currentSlide].data[0]?.description || "No description available"}</p>
          </div>
          {/* <div className=" bg-gray-800 bg-opacity-50 px-4 py-2 text-white flex justify-between items-center">
            <button onClick={prevSlide}>Previous</button>
            <span>{currentSlide + 1}/{mediaAssets.length}</span>
            <button onClick={nextSlide}>Next</button>
          </div> */}
        </>
      ) : (
        <PageLoading /> 
      )}

      {/* Clickable images at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 px-4 py-2 text-white flex overflow-x-auto">
        {mediaAssets.map((asset, index) => (
          <img
            key={index}
            src={asset.links[0].href}
            alt={asset.data[0]?.title || "NASA Image"}
            className={`h-20 cursor-pointer mr-4 border-2 border-transparent hover:border-white ${index === currentSlide ? 'border-white' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PictureGallery;
