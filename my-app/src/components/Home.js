import React from "react";
import PictureSlideShow from "./PictureSlideShow";
import EventsDashboard from "./EventsDashboard";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 text-white h-200 flex flex-col md:flex-row">
        <PictureSlideShow />
      </div>
      <div className="bg-gray-900 text-white h-200 flex flex-col md:flex-row">
        <EventsDashboard />
      </div>
    </>
  );
};
export default Home;
