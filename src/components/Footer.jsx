import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 flex flex-col md:flex-row items-center justify-center md:justify-around space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
      <p className="text-lg font-semibold">&copy; 2025 MyFirstJob</p>
      <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
        <a href="#" className="hover:underline transition-colors duration-200">About Us</a>
        <a href="#" className="hover:underline transition-colors duration-200">Contact Us</a>
        <a href="#" className="hover:underline transition-colors duration-200">Disclaimer</a>
        <a href="#" className="hover:underline transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="hover:underline transition-colors duration-200">Terms & Conditions</a>
      </nav>
      <a
        href="https://chat.whatsapp.com/your-group-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 text-3xl hover:text-green-300 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
