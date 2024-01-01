"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface BackToTopButtonProps {
  scrollThreshold: number;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ scrollThreshold }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    isVisible && (
      <button
        data-cy="back-to-top"
        className="fixed bottom-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800
    font-bold w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:shadow-outline z-50"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTopButton;
