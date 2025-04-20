import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="ml-64 mt-30 max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to DebateGo. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Email address, name, and profile information (via Google sign-in or email sign-up).</li>
        <li>Usage data such as time spent, topics explored, scores, and other app activity.</li>
        <li>Technical information like browser type, operating system, and device type.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To personalize your experience and show relevant content.</li>
        <li>To maintain account access and improve app functionality.</li>
        <li>To analyze usage trends and enhance performance.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell or share your personal data with third parties except:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>To comply with legal obligations.</li>
        <li>To trusted partners for app operation (e.g., Firebase for authentication and database).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security practices to safeguard your information. However, no digital method is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Children's Privacy</h2>
      <p className="mb-4">
        Our app is not intended for children under the age of 13. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about this policy, please contact us at: <br />
        <strong>Email:</strong> jainharshita0604@gmail.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
