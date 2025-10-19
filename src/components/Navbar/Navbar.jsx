"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md w-[90%] rounded-2xl"
          : "bg-white w-full rounded-none top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          MyLogo
        </Link>

        {/* Middle: Nav Links (Visible only on md+) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Resume Button */}
        <div className="hidden md:block">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium rounded-b-2xl">
          <Link
            href="#about"
            className="block hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
