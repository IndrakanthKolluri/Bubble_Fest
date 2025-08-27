import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stages from "./Components/Stages";
import Highlights from "./Components/Highlights";
import Tickets from "./Components/Tickets";
import Footer from "./Components/Footer";
import BubbleCursor from "./Components/BubbleCursor";
import ScroolingImages from "./Components/ScroolingImages";
import BuubleFestImages from "./Components/BuubleFestImages";


export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <BubbleCursor />
      <Navbar />
      <Hero />
      <ScroolingImages />
      <Stages />
      {/* <Highlights /> */}
      <BuubleFestImages />
      <Tickets />
      <Footer />
    </div>
  );
}
