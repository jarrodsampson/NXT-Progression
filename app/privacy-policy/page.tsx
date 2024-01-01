"use client";

import { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Privacy Policy - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);
  return (
    <div className="bg-gray-200 text-black">
      <div className="container mx-auto mt-10 p-20">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p>
          Welcome to NXT Progression! This Privacy Policy outlines how we collect, use, disclose,
          and protect your personal information. By using our services, you agree to the terms
          outlined in this policy.
        </p>

        <h2 className="text-2xl font-bold my-4">Information We Collect</h2>
        <p>
          We may collect personal information, including but not limited to, your name, contact
          information, email address, and other relevant details when you interact with our
          services.
        </p>

        <h2 className="text-2xl font-bold my-4">How We Use Your Information</h2>
        <p>
          We use the collected information to provide and improve our services, communicate with
          you, and ensure the security of our platform. We may also use your information for
          marketing and promotional purposes with your consent.
        </p>

        <h2 className="text-2xl font-bold my-4">Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties
          without your consent. However, we may share information with trusted third parties who
          assist us in operating our website, conducting business, or servicing you.
        </p>

        <h2 className="text-2xl font-bold my-4">Security</h2>
        <p>
          We implement security measures to protect your personal information from unauthorized
          access, disclosure, alteration, and destruction.
        </p>

        <h2 className="text-2xl font-bold my-4">Your Choices</h2>
        <p>
          You may choose not to provide certain personal information, but this may limit your access
          to certain features of our services. You can opt-out of receiving marketing communications
          from us at any time.
        </p>

        <h2 className="text-2xl font-bold my-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be reflected on this
          page, and we encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-bold my-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at
          info@nxtprogression.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
