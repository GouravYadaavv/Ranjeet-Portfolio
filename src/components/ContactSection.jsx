"use client";

import { FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const ContactSection = () => {
  return (
    <section className="w-full bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Form & Socials */}
        <div className="max-w-lg w-full">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="How can I help?*"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>

            {/* Submit Button & Social Icons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white font-bold py-4 px-10 text-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Get In Touch
              </button>

              {/* Social Icons */}
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="text-[18px] sm:text-[20px] md:text-[22px]" />
                </a>
                <a
                  href="#"
                  aria-label="Behance"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaBehance className="text-[18px] sm:text-[20px] md:text-[22px]" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn className="text-[18px] sm:text-[20px] md:text-[22px]" />
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Text Content */}
        <div className="md:sticky md:top-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Let's{" "}
            <span className="font-black text-white [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black] tracking-tight leading-none relative z-10 inline-block">
              talk
            </span>{" "}
            for
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-1 md:mt-2">
            Something special
          </h1>

          {/* 🔥 Typing Animation Section */}
          <div className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed h-[90px]">
            <TypeAnimation
              sequence={[
                "I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="mt-10 space-y-3 sm:space-y-4">
            <a
              href="mailto:ranjeetkumarverma@gmail.com"
              className="text-xl sm:text-2xl font-bold block hover:text-gray-700 transition-colors"
            >
              ranjeetkumarverma@gmail.com
            </a>
            <a
              href="tel:+916205508988"
              className="text-xl sm:text-2xl font-bold block hover:text-gray-700 transition-colors"
            >
              +91 6205508988
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
