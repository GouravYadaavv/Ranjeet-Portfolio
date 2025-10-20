'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  PiMicrosoftPowerpointLogo
} from "react-icons/pi";
import {
  SiAutocad, SiAutodeskmaya, SiFigma, SiFramer,
  SiAdobeillustrator, SiAdobephotoshop,
  SiAdobepremierepro, SiAdobeindesign, SiBlender
} from 'react-icons/si';

// --- Skills Data ---
const skillsData = [
  { name: 'Figma', IconComponent: SiFigma },
  { name: 'Framer', IconComponent: SiFramer },
  { name: 'Adobe Illustrator', IconComponent: SiAdobeillustrator },
  { name: 'Adobe Photoshop', IconComponent: SiAdobephotoshop },
  { name: 'Adobe Premiere Pro', IconComponent: SiAdobepremierepro },
  { name: 'Adobe InDesign', IconComponent: SiAdobeindesign },
  { name: 'Blender', IconComponent: SiBlender },
  { name: 'Maya', IconComponent: SiAutodeskmaya },
  { name: 'AutoCAD', IconComponent: SiAutocad },
  { name: 'PowerPoint', IconComponent: PiMicrosoftPowerpointLogo },
];

// --- Motion Variants ---
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Skill Card ---
const SkillCard = ({ name, IconComponent }) => {
  return (
    <motion.div
  variants={cardVariants}
  className="
    group relative flex flex-col items-center justify-center
    p-6 text-center aspect-square cursor-pointer
    bg-white rounded-xl
    shadow-[0_2px_6px_rgba(0,0,0,0.08)]
    hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
    hover:scale-[1.04]
    transition-all duration-500 ease-out
  "
>
      {/* Pencil Sketch Border */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Slightly imperfect triple lines for hand-drawn feel */}
          <path
            d="M3 3 L97 5 L97 97 L5 95 Z"
            fill="none"
            stroke="black"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <path
            d="M4 6 L96 4 L95 96 L6 94 Z"
            fill="none"
            stroke="black"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <path
            d="M5 2 L98 6 L94 98 L3 92 Z"
            fill="none"
            stroke="black"
            strokeWidth="0.6"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Inner Hover Glow (inside border only) */}
      <div className="
        absolute inset-[4px] rounded-none 
        bg-gradient-to-br from-transparent via-transparent to-transparent
        group-hover:from-neutral-800/90 group-hover:via-neutral-700/80 group-hover:to-neutral-800/90
        transition-all duration-500 ease-out
        z-0
      "></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
          <IconComponent
            size="100%"
            className="text-neutral-700 group-hover:text-white transition-colors duration-300"
          />
        </div>
        <span className="font-extrabold text-sm md:text-base text-neutral-800 group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  return (
    <section className="w-full bg-white font-sans py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-neutral-900 mb-12 tracking-tight"
        >
          My Skills
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              IconComponent={skill.IconComponent}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Main Component ---
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SkillsSection />
    </div>
  );
}
