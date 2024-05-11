import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PictureGallary from "./components/PictureGallary";
import Events from "./components/Events";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<PictureGallary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
