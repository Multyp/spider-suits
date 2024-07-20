"use client";

/* Global imports */
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
/* Scoped imports */
/* Local imports */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-black bg-opacity-75 z-50 fixed w-full text-white shadow-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {
        /*<div className="bg-yellow-400 text-black p-2 text-center">
          <p className="text-sm">
            This page features images generated by AI.{" "}
            <Link
              href="/learn-more"
              className="text-sm underline hover:text-gray-500 transition-colors duration-300"
            >
              Learn more
            </Link>
          </p>
        </div>*/

        /* Optional banner for when using AI-Generated Images */
        }
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
            >
              Spider-Man Suits
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Links */}
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none mx-5 mt-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isMenuOpen ? "rotate(45deg)" : "rotate(0)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-transparent animate-fade-in-down z-10">
             {/* Links for responsiveness */}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;