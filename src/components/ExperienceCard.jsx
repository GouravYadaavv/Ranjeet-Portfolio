"use client";

import Image from "next/image";
import React from "react";

const experiences = [
  {
    border: "/Borderexp.png",
    titleImg: "/Logoexp.png",
    date: "Jun 2025 – Jul 2025",
    description:
      "I translated complex ideas into precise AutoCAD drafts, ensuring technical accuracy and design clarity. Alongside this, I crafted impactful visual design solutions that effectively communicated brand stories and aesthetics. I also curated and managed an engaging social media presence, building consistent visual language and audience connection. Additionally, I designed creative merchandising graphics that elevated the overall brand identity and strengthened its market presence.",
  },
  {
    border: "/Borderexp.png",
    titleImg: "/Explogo2.png",
    date: "May 2024-Apr. 2025",
    description:
      "At Sattuz, I designed brand-aligned packaging and visuals that captured the essence of our organic and refreshing identity. I created engaging social media content that highlighted the brand’s story, flavors, and lifestyle appeal. Additionally, I managed strategy and audience engagement, building a strong online presence and fostering genuine connections with our community.",
  },
  {
    border: "/Borderexp.png",
    titleImg: "/Explogo3.png",
    date: "Jan 2024-Apr. 2024",
    description:
      "At Excel Global Sourcing, I created 3D models of furniture, designed the company catalog, and edited promotional videos. I also developed cohesive branding by integrating all visual elements in a structured and consistent manner.",
  },
  {
    border: "/Borderexp.png",
    titleImg: "/Explogo4.png",
    date: "Nov 2024 – Jan 2025",
    description:
      "Worked on designing engaging visual content for digital and print platforms, including social media graphics, promotional materials, and website visuals. Collaborated with the marketing team to create creative campaigns that enhanced brand visibility and customer engagement.",
  },
];

const ExperienceCard = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-6 bg-[#1E1E1E] text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 tracking-wide">
        My Expression
      </h1>

      <div className="flex flex-col items-center gap-12 w-full">
        {experiences.map((exp, index) => {
          // Conditional sizes for 1st, 3rd, 4th
          const isLarge = index === 0 || index === 2 || index === 3;
          const width = isLarge ? 400 : 320;  // increased width
          const height = isLarge ? 80 : 60;   // increased height

          return (
            <div
              key={index}
              className="relative w-full max-w-5xl p-8 md:p-10 rounded-lg"
            >
              <Image
                src={exp.border}
                alt="border"
                fill
                className="object-fill pointer-events-none select-none"
              />

              <div className="relative z-10">
                {/* Title image with conditional size */}
                <Image
                  src={exp.titleImg}
                  alt="Title Logo"
                  width={width}
                  height={height}
                  className="object-contain mb-2"
                />

                {/* Date below title image */}
                <span className="text-sm md:text-base text-gray-300 font-medium">
                  {exp.date}
                </span>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-4">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceCard;
