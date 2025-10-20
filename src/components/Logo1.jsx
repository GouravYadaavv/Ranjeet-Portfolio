"use client";

import Image from "next/image";
import React from "react";

const LogoGrid = () => {
  // --- Define 10 items with custom logo & text sizes ---
  const items = [
    { logo: "/figma1.png", text: "/Figma1.1.png", border: "/Border1.png", alt: "Figma 1", logoW: 56, logoH: 56, textW: 56, textH: 24 },
    { logo: "/figma2.png", text: "/Figma2.2.png", border: "/Border2.png", alt: "Figma 2", logoW: 63, logoH: 63, textW: 63, textH: 24 },
    { logo: "/figma3.png", text: "/Figma3.3.png", border: "/Border3.png", alt: "Figma 3", logoW: 56, logoH: 56, textW: 145, textH: 24 },
    { logo: "/figma4.png", text: "/Figma4.4.png", border: "/Border4.png", alt: "Figma 4", logoW: 56, logoH: 56, textW: 136, textH: 24 },
    { logo: "/figma5.png", text: "/Figma5.5.png", border: "/Border5.png", alt: "Figma 5", logoW: 62, logoH: 49, textW: 136, textH: 24 },
    { logo: "/figma6.png", text: "/Figma6.6.png", border: "/Border6.png", alt: "Figma 6", logoW: 56, logoH: 56, textW: 136, textH: 24 },
    { logo: "/figma7.png", text: "/Figma7.7.png", border: "/Border7.png", alt: "Figma 7", logoW: 62, logoH: 49, textW: 70, textH: 24 },
    { logo: "/figma8.png", text: "/Figma8.8.png", border: "/Border8.png", alt: "Figma 8", logoW: 56, logoH: 56, textW: 56, textH: 24 },
    { logo: "/figma9.png", text: "/Figma9.9.png", border: "/Border9.png", alt: "Figma 9", logoW: 56, logoH: 56, textW: 82, textH: 24 },
    { logo: "/figma10.png", text: "/Figma10.0.png", border: "/Border10.png", alt: "Figma 10", logoW: 56, logoH: 56, textW: 96, textH: 24 },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center py-12 px-4 space-y-10">
      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">My Skills</h2>

      {/* --- Top Row: 5 items --- */}
      <div className="flex justify-center flex-wrap gap-10">
        {items.slice(0, 5).map((item, index) => (
          <LogoCard key={index} item={item} />
        ))}
      </div>

      {/* --- Bottom Row: 5 items --- */}
      <div className="flex justify-center flex-wrap gap-10">
        {items.slice(5, 10).map((item, index) => (
          <LogoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

// --- Individual Logo Card ---
const LogoCard = ({ item }) => {
  return (
    <div
      className="
        relative w-[180px] h-[180px] md:w-[160px] md:h-[160px] sm:w-[140px] sm:h-[140px]
        flex flex-col items-center justify-center
        cursor-pointer overflow-hidden
        bg-white
        transition-all duration-500 ease-out
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        group
      "
    >
      {/* Border */}
      <Image
        src={item.border}
        alt={`${item.alt} border`}
        width={180}
        height={180}
        className="absolute inset-0 z-0"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-[4px] bg-gray-800/0 group-hover:bg-gray-800/80 transition-colors duration-500 rounded-md"></div>

      {/* Logo + Text with custom sizes */}
      <div className="relative z-10 flex flex-col items-center space-y-2">
        <Image
          src={item.logo}
          alt={`${item.alt} logo`}
          width={item.logoW}
          height={item.logoH}
          className="transition-all duration-500 group-hover:invert"
        />
        <Image
          src={item.text}
          alt={`${item.alt} text`}
          width={item.textW}
          height={item.textH}
          className="transition-all duration-500 group-hover:invert"
        />
      </div>
    </div>
  );
};

export default LogoGrid;
