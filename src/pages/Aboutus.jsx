import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to our job portal – a dedicated space for individuals seeking genuine job opportunities and career growth. Whether you're a fresher stepping into the professional world or an experienced individual searching for the next challenge, this platform is built to serve you.
          </p>

          <p>
            The idea behind this website came from a simple thought — to make job hunting easier, faster, and more accessible for everyone. We noticed how difficult it can be to find the right opportunity at the right time, especially with so much noise online. That’s why we created a space with a **clean, simple, and distraction-free interface**, so you can focus on what matters most: finding the job that fits you.
          </p>

          <p>
            Our mission is clear – to help people connect with the right job opportunities without confusion, clutter, or unnecessary steps. We strive to bridge the gap between job seekers and companies, offering updates that are relevant, timely, and trustworthy.
          </p>

          <p>
            We currently focus on curating job posts that are relevant and verified, and while we started with a focus on a specific region, our vision is to grow and reach as many job seekers as possible across different locations in India.
          </p>

          <p>
            To stay connected, we regularly post job updates on our website, our <span className="font-medium">WhatsApp groups</span>, and our <span className="font-medium">Instagram page</span>. This ensures you're always one step ahead when new opportunities arise.
          </p>

          <p>
            Thank you for visiting our platform. We hope to be a small part of your big success story. Keep checking in, and let’s grow together.
          </p>
        </div>
      </div>
    </div>
      <Footer />   
    </> 
  );
};

export default AboutUs;
