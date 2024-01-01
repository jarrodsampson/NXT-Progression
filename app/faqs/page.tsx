"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { faqData } from "../utils/data";

const Faqs: React.FC = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `FAQs - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    if (!parallaxElement) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      (parallaxElement as HTMLDivElement).style.backgroundPositionY = `${scrollPosition * 0}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative mb-[-3em]">
      <div
        ref={parallaxRef}
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://www.wwe.com/f/2023/11/20231128_NXT_Brooks_Lexis--13d853091d0021da305494adad55e60f.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div
        className="w-full mt-40 my-10 p-8 relative z-10 bg-gray-200"
        style={{
          marginTop: "500px",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl text-center font-bold mb-6" style={{ marginTop: "-500px" }}>
            FAQs
          </p>
        </div>
        <div className="text-black text-center my-20">
          <h2 className="text-2xl font-bold my-4">Centered Title</h2>
          <p className="max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
        </div>

        <div className="container text-black mx-auto my-16 w-3/4">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              {/* Question */}
              <div
                className="flex justify-between cursor-pointer items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {/* Answer */}
              <div
                className={`mt-2 overflow-hidden transition-max-height duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-20 text-black">
          <h2 className="text-2xl font-bold my-4">Centered Title</h2>
          <p className="max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
