import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Your Logo</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center">Location <IoIosArrowDown className="ml-2" /></button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 group-hover:flex flex-col transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Mumbai</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Pune</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Delhi</a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center">Batch <IoIosArrowDown className="ml-2" /></button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 group-hover:flex flex-col transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Batch 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Batch 2</a>
            </div>
          </div>
          <a href="/contact" className="hover:text-gray-200">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-700 p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <FaTimes size={24} className="text-white" />
        </button>
        <nav className="mt-10 space-y-4">
          <a href="/" className="block hover:text-gray-200">Home</a>
          <div>
            <button
              className="flex items-center w-full text-left hover:text-gray-200"
              onClick={() => setLocationOpen(!locationOpen)}
            >
              Location <IoIosArrowDown className="ml-2" />
            </button>
            {locationOpen && (
              <div className="ml-4 space-y-1">
                <a href="#" className="block hover:text-gray-200">Mumbai</a>
                <a href="#" className="block hover:text-gray-200">Pune</a>
                <a href="#" className="block hover:text-gray-200">Delhi</a>
              </div>
            )}
          </div>
          <div>
            <button
              className="flex items-center w-full text-left hover:text-gray-200"
              onClick={() => setBatchOpen(!batchOpen)}
            >
              Batch <IoIosArrowDown className="ml-2" />
            </button>
            {batchOpen && (
              <div className="ml-4 space-y-1">
                <a href="#" className="block hover:text-gray-200">Batch 1</a>
                <a href="#" className="block hover:text-gray-200">Batch 2</a>
              </div>
            )}
          </div>
          <a href="/contact" className="block hover:text-gray-200">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
