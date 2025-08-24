import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stages from "./Components/Stages";
import Highlights from "./Components/Highlights";
import Tickets from "./Components/Tickets";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Stages />
      {/* <Highlights /> */}
      <Tickets />
      <Footer />
    </div>
  );
}
