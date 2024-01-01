"use client";

import { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = `Contact - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);

  return (
    <div className="flex">
      <div
        className="w-1/2 bg-blue-900 text-white p-10"
        style={{
          backgroundImage:
            "url('https://www.wwe.com/f/2023/11/20231128_NXT_Brooks_Lexis--13d853091d0021da305494adad55e60f.jpg')",
        }}
      >
        <h1 className="text-4xl mt-80 mb-5 w-3/4 float-right">We’d love to hear from you</h1>
      </div>
      <div className="w-1/2 text-black">
        <div className="p-5 bg-gray-200">
          <h2 className="text-2xl mt-20 mb-5">Talk to us</h2>
          <p>
            If you have any questions about HubSpot, HubSpot Products, HubSpot CRM, HubSpot Tools or
            HubSpot Demo, please connect with us through the support chat or contact&nbsp;
            <a className="underline text-red-500" href="mailto:support@hubspot.com">
              support@hubspot.com
            </a>
          </p>
          <hr className="mt-10 border-t border-gray-400" />
          <div className="mt-5">
            <h3 className="text-xl mt-10 mb-5">Live Chat</h3>
            <p className="mt-5 mb-5">Don’t like phone calls? We get it</p>
            <button className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Chat with us
            </button>
          </div>
          <div className="mt-5">
            <h3 className="text-xl mt-5 mb-5">Product Demo</h3>
            <p className="mt-5 mb-5">Our product specialist will give you a full run-down</p>
            <button className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Book now
            </button>
          </div>
        </div>
        <div className="w-full bg-blue-100 pb-40">
          <div className="p-5">
            <div className="mt-5 flex items-start">
              <FaPhone className="text-red-500 mt-1 mr-2" />
              <p>
                <b>Phone call</b> Available 3:00 - 21:00 EST Monday to Friday
                <br />
                UK{" "}
                <a className="underline text-red-500" href="tel:44 20 4525 1373">
                  +44 20 4525 1373
                </a>{" "}
                US{" "}
                <a className="underline text-red-500" href="tel:1 317 482 7165">
                  +1 317 482 7165
                </a>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <FaEnvelope className="text-red-500 mt-1 mr-2" />
              <p>
                <b>Email us</b> Too busy to chat? Email us & we’ll get back ASAP
                <br />
                <a className="underline text-red-500" href="mailto:support@hubspot.com">
                  support@hubspot.com
                </a>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <FaMapMarkerAlt className="text-red-500 mt-1 mr-2" />
              <p>
                <b>Mailing address:</b>
                <br />
                11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
