import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

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
          <Link to="/" className="hover:text-gray-200">Home</Link>
          
          <div className="relative">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="hover:text-gray-200 flex items-center"
            >
              Location <IoIosArrowDown className="ml-2" />
            </button>
            {locationOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg flex flex-col z-50">
                <Link to="/jobs/mumbai" className="block px-4 py-2 hover:bg-gray-200">Mumbai</Link>
                <Link to="/jobs/pune" className="block px-4 py-2 hover:bg-gray-200">Pune</Link>
                <Link to="/jobs/delhi" className="block px-4 py-2 hover:bg-gray-200">Delhi</Link>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setBatchOpen(!batchOpen)}
              className="hover:text-gray-200 flex items-center"
            >
              Batch <IoIosArrowDown className="ml-2" />
            </button>
            {batchOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg flex flex-col z-50">
                <Link to="/batch/2023" className="block px-4 py-2 hover:bg-gray-200">2023</Link>
                <Link to="/batch/2024" className="block px-4 py-2 hover:bg-gray-200">2024</Link>
                <Link to="/batch/2025" className="block px-4 py-2 hover:bg-gray-200">2025</Link>
              </div>
            )}
          </div>
          
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-700 p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <FaTimes size={24} className="text-white" />
        </button>
        <nav className="mt-10 space-y-4">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <div>
            <button
              className="flex items-center w-full text-left hover:text-gray-200"
              onClick={() => setLocationOpen(!locationOpen)}
            >
              Location <IoIosArrowDown className="ml-2" />
            </button>
            {locationOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/jobs/mumbai" className="block hover:text-gray-200">Mumbai</Link>
                <Link to="/jobs/pune" className="block hover:text-gray-200">Pune</Link>
                <Link to="/jobs/delhi" className="block hover:text-gray-200">Delhi</Link>
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
                <Link to="/batch/2023" className="block hover:text-gray-200">2023</Link>
                <Link to="/batch/2024" className="block hover:text-gray-200">2024</Link>
                <Link to="/batch/2025" className="block hover:text-gray-200">2025</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="block hover:text-gray-200">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

