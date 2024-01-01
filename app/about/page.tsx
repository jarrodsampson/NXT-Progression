"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `About - ${process.env.NEXT_PUBLIC_APP_NAME}`;
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
            About Us
          </p>
        </div>

        <div className="container alternating-container mx-auto my-16">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Column */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-3xl text-black font-bold mb-4">Your Title 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod auctor
                bibendum. Curabitur sit amet erat in quam semper ultrices. Integer imperdiet quam at
                sapien varius vestibulum. Nullam euismod, quam in venenatis blandit, tortor tellus
                interdum quam, vel feugiat augue orci vitae elit.
              </p>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
              <Image
                src="https://via.placeholder.com/600x400"
                alt="Image Placeholder 1"
                className="w-full h-full object-cover rounded-md"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Column */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-black mb-4">Your Title 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod auctor
                bibendum. Curabitur sit amet erat in quam semper ultrices. Integer imperdiet quam at
                sapien varius vestibulum. Nullam euismod, quam in venenatis blandit, tortor tellus
                interdum quam, vel feugiat augue orci vitae elit.
              </p>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
              <Image
                src="https://via.placeholder.com/600x400"
                alt="Image Placeholder 1"
                className="w-full h-full object-cover rounded-md"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Column */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-4 text-black">Your Title 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod auctor
                bibendum. Curabitur sit amet erat in quam semper ultrices. Integer imperdiet quam at
                sapien varius vestibulum. Nullam euismod, quam in venenatis blandit, tortor tellus
                interdum quam, vel feugiat augue orci vitae elit.
              </p>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
              <Image
                src="https://via.placeholder.com/600x400"
                alt="Image Placeholder 1"
                className="w-full h-full object-cover rounded-md"
                width={600}
                height={400}
              />
            </div>
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

export default About;
