import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-4xl border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          Privacy Policy
        </h1>

        <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            This Privacy Policy describes how we collect, use, and protect the personal information of visitors to our website. By using our platform, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">1. Information We Collect</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>We do not require users to register or create an account to access job listings.</li>
            <li>We may collect non-personal data such as IP address, browser type, and pages visited for analytics and security purposes.</li>
            <li>In case we ever include contact forms or newsletter subscriptions, we may collect name and email address (not currently active).</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>To improve user experience and website performance.</li>
            <li>To analyze site traffic and user behavior (via tools like Google Analytics).</li>
            <li>To show personalized and relevant ads through Google AdSense.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">3. Google AdSense</h2>
          <p>
            Our website uses Google AdSense to display ads. Google may use cookies and web beacons to collect non-personal data in order to serve personalized ads. Users can opt out of personalized advertising by visiting Google's Ads Settings.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">4. Cookies</h2>
          <p>
            Cookies are small files stored on your device to help websites remember user preferences. We use cookies to improve functionality and analyze website performance. You can disable cookies in your browser settings if you prefer.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">5. Third-Party Links</h2>
          <p>
            Our website contains job listings that link to external websites. We are not responsible for the content or privacy practices of those third-party sites. We encourage users to review their privacy policies separately.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">6. Data Security</h2>
          <p>
            We take reasonable steps to secure any data collected and prevent unauthorized access. However, please understand that no internet transmission is ever completely secure.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">7. Children's Privacy</h2>
          <p>
            This website is not intended for children under the age of 13. We do not knowingly collect personal data from minors.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">8. Policy Updates</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with a revised effective date.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to reach out to us at:
            <br />
            📧 <span className="underline">your-email@example.com</span><br />
            📱 Instagram: <span className="underline">@yourhandle</span><br />
            📲 Join our <span className="underline">
              <a href="https://chat.whatsapp.com/ClzxVUv7BtE9or25WM5Knu" target="_blank">WhatsApp group</a></span> for latest updates
          </p>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default PrivacyPolicy;
