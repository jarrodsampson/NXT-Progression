"use client";

import { useEffect, useRef } from "react";

const Offers: React.FC = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Services - ${process.env.NEXT_PUBLIC_APP_NAME}`;
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
          <p
            data-cy="title"
            className="text-3xl text-center font-bold mb-6"
            style={{ marginTop: "-500px" }}
          >
            Our Services
          </p>
        </div>
        <div className="text-black text-center my-20">
          <h2 className="text-2xl font-bold my-4">Centered Title</h2>
          <p className="max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Service 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
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

export default Offers;
