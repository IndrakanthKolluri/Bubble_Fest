import { useState } from "react";
import { Menu, X } from "lucide-react"; // nice icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold">Bubble Fest</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#stages" className="hover:text-pink-300">Stages</a></li>
          <li><a href="#highlights" className="hover:text-pink-300">Highlights</a></li>
          <li><a href="#tickets" className="hover:text-pink-300">Tickets</a></li>
          <li><a href="#footer" className="hover:text-pink-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li><a href="#stages" className="hover:text-pink-300" onClick={() => setIsOpen(false)}>Stages</a></li>
            <li><a href="#highlights" className="hover:text-pink-300" onClick={() => setIsOpen(false)}>Highlights</a></li>
            <li><a href="#tickets" className="hover:text-pink-300" onClick={() => setIsOpen(false)}>Tickets</a></li>
            <li><a href="#footer" className="hover:text-pink-300" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
