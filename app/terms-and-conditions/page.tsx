"use client";

import { useEffect } from "react";

const TermsConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Terms and Conditions - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);
  return (
    <div className="bg-gray-200 text-black">
      <div className="container mx-auto mt-10 p-20">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <p>
          Welcome to NXT Progression! By accessing and using our services, you agree to be bound by
          the following terms and conditions. Please read them carefully before using our platform.
        </p>

        <h2 className="text-2xl font-bold my-4">User Responsibilities</h2>
        <p>
          When using our services, you agree to comply with all applicable laws and regulations. You
          are responsible for maintaining the confidentiality of your account information and for
          all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-bold my-4">Intellectual Property</h2>
        <p>
          All content on our platform, including text, graphics, logos, and images, is the property
          of NXT Progression and is protected by intellectual property laws. You may not reproduce,
          modify, distribute, or otherwise use our content without our explicit permission.
        </p>

        <h2 className="text-2xl font-bold my-4">Prohibited Activities</h2>
        <p>
          You agree not to engage in any activities that may harm, disrupt, or impair the
          functionality of our platform. Prohibited activities include, but are not limited to,
          hacking, spamming, and distributing malicious software.
        </p>

        <h2 className="text-2xl font-bold my-4">Privacy</h2>
        <p>
          Our Privacy Policy outlines how we collect, use, and protect your personal information. By
          using our services, you consent to the practices described in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold my-4">Termination</h2>
        <p>
          NXT Progression reserves the right to terminate or suspend your access to our services at
          any time for violation of these terms and conditions or for any other reason.
        </p>

        <h2 className="text-2xl font-bold my-4">Changes to Terms and Conditions</h2>
        <p>
          We may update these terms and conditions from time to time. Any changes will be reflected
          on this page, and your continued use of our services after such changes constitutes your
          acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-bold my-4">Contact Us</h2>
        <p>
          If you have any questions about these terms and conditions, please contact us at
          info@nxtprogression.com.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
