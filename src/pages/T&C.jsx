import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
    <Header />
    
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-4xl border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          Terms & Conditions
        </h1>

        <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            These Terms & Conditions ("Terms") govern your use of our job portal. By accessing or using our website, you agree to comply with and be bound by these Terms. Please read them carefully.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">1. Use of the Website</h2>
          <p>
            This platform is designed to help users find job opportunities easily. You may use the website for personal, non-commercial purposes only. Any misuse, spamming, or harmful activity is strictly prohibited.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">2. Job Listings</h2>
          <p>
            We share job information gathered from trusted sources and company announcements. However, we do not guarantee the authenticity, availability, or accuracy of job posts. Always verify the details before applying.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">3. Third-Party Links</h2>
          <p>
            Our job posts may include links to third-party websites or application forms. We are not responsible for any content, job process, or privacy practices of those websites. Proceed at your own discretion.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">4. No Guarantee of Employment</h2>
          <p>
            We only provide job-related information. We do not guarantee job placement or success in any hiring process. Your communication with the hiring company is solely your responsibility.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">5. Limitation of Liability</h2>
          <p>
            We are not liable for any direct or indirect loss, damage, or inconvenience caused by the use of this website or reliance on the job listings provided.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">6. Intellectual Property</h2>
          <p>
            All content, including logos, text, and graphics, is owned by this website and cannot be copied or reused without permission.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">7. Policy Updates</h2>
          <p>
            We reserve the right to update or modify these Terms at any time. Continued use of the website after changes indicates acceptance of the updated Terms.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">8. Contact Information</h2>
          <p>
            For questions or concerns about these Terms, you can contact us at:
            <br />
            📧 <span className="underline">your-email@example.com</span><br />
            📲 Instagram: <span className="underline">@yourhandle</span><br />
            📱 Join our WhatsApp group for latest job updates.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
