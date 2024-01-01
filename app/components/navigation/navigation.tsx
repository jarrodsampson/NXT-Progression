"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaUser, FaSearch } from "react-icons/fa";

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isScrollingUp, setIsScrollingUp] = useState<boolean | null>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPos > 200) {
        setIsScrollingUp(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      }
    };

    if (typeof window !== "undefined") {
      setPrevScrollPos(window.pageYOffset || document.documentElement.scrollTop);
      window.addEventListener("scroll", handleScroll);

      // Remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`main-navigation bg-gray-900 p-4 fixed w-full top-0 z-50 ${
          isScrollingUp
            ? "transition-all duration-300 ease-in"
            : "transition-all duration-300 ease-out transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center uppercase">
          <div className="flex items-center space-x-2">
            <div className="text-white font-bold text-lg">
              <Image src="/wwe_logo.svg" alt="WWE Logo" width={50} height={50} />
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center space-x-4">
            <Link
              href="/"
              className={`text-white hover:text-gray-300 ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/superstars"
              className={`text-white hover:text-gray-300 ${
                pathname === "/superstars" ? "active" : ""
              }`}
            >
              Superstars
            </Link>
            <Link
              href="/offers"
              className={`text-white hover:text-gray-300 ${pathname === "/offers" ? "active" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-gray-300 ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              href="/faqs"
              className={`text-white hover:text-gray-300 ${pathname === "/faqs" ? "active" : ""}`}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-gray-300 ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex-grow flex items-center justify-center space-x-4"></div>
          <div className="flex-grow flex items-center justify-end space-x-4">
            <div className="text-white">
              <FaUser size={24} />
            </div>
            <div className="text-white">
              <FaSearch size={24} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
