import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">My Website</Link>
        
        <div className="space-x-6 flex">
          <Link to="/" className="hover:underline">Home</Link>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              className="hover:underline"
              onClick={() => setLocationOpen(!locationOpen)}
            >
              Location ▼
            </button>
            {locationOpen && (
              <div className="absolute bg-white text-black mt-2 w-40 shadow-md">
                <Link to="/location?city=mumbai" className="block px-4 py-2 hover:bg-gray-200">Mumbai</Link>
                <Link to="/location?city=pune" className="block px-4 py-2 hover:bg-gray-200">Pune</Link>
              </div>
            )}
          </div>

          {/* Batch Dropdown */}
          <div className="relative">
            <button
              className="hover:underline"
              onClick={() => setBatchOpen(!batchOpen)}
            >
              Batch ▼
            </button>
            {batchOpen && (
              <div className="absolute bg-white text-black mt-2 w-40 shadow-md">
                <Link to="/batch?year=2024" className="block px-4 py-2 hover:bg-gray-200">Batch 2024</Link>
                <Link to="/batch?year=2025" className="block px-4 py-2 hover:bg-gray-200">Batch 2025</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
