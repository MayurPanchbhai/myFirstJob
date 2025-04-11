import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <div className="space-y-5 text-sm sm:text-base">
          {/* Email */}
          <div className="flex items-center gap-4">
            <MdEmail className="text-blue-600 text-xl sm:text-2xl" />
            <a
              href="mailto:yourmail@example.com"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              yourmail@example.com
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <FaInstagram className="text-pink-500 text-xl sm:text-2xl" />
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              @yourusername
            </a>
          </div>

          {/* WhatsApp Group */}
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
            <a
              href="https://chat.whatsapp.com/ClzxVUv7BtE9or25WM5Knu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-500 transition"
            >
              Join our WhatsApp Group
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
          We're here to help you find the best job opportunities. Reach out anytime!
        </p>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default Contact;
