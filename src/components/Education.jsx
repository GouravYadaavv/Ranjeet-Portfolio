"use client";

import React from "react";

const educationData = [
  {
    degree: "Bachelor of Design (B.Des)",
    institution: "National Institute Of Fashion Technology",
    location: "Patna, Bihar India",
    date: "2022 - 2026",
    logo: "/Edlogo1.png", // Your logo image path
  },
  {
    degree: "Intermediate",
    institution: "Guru Gobind Singh Public School, Chas",
    location: "Bokaro, Jharkhand",
    date: "2019 - 2021",
    logo: "/Edlogo2.png",
  },
  {
    degree: "Secondary",
    institution: "Guru Gobind Singh Public School, Chas",
    location: "Bokaro, Jharkhand",
    date: "2019",
    logo: "/Edlogo2.png",
  },
];

const Education = () => {
  return (
    <section className="w-full flex flex-col items-center bg-[#1E1E1E] text-white py-16 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 tracking-wide text-center">
        My Education
      </h1>

      <div className="w-full max-w-4xl flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="w-full flex flex-col sm:flex-row justify-between sm:items-start gap-4 p-6 sm:p-8 
                       rounded-xl border border-gray-700 bg-[#2a2a2a]
                       transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:border-gray-400 hover:shadow-xl hover:shadow-black/30"
          >
            {/* Left Side: Logo + Details */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Circular Logo */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
  <img
    src={edu.logo}        // your image path
    alt={`${edu.degree} logo`}
    className="w-full h-full object-cover"
  />
</div>


              {/* Details */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white flex flex-wrap items-center">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.location}</p>
              </div>
            </div>

            {/* Right Side: Date */}
            <div className="pt-2 sm:pt-0 sm:text-right w-full sm:w-auto">
              <p className="text-base md:text-lg text-gray-300 font-medium whitespace-nowrap">
                {edu.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
