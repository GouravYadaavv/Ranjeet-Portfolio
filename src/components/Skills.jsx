'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiAutocad, SiAutodeskmaya, SiFigma, SiFramer, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobeindesign, SiBlender } from 'react-icons/si';

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
      staggerChildren: 0.4, // 0.4s between each card
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

// --- Single Skill Card ---
const SkillCard = ({ name, IconComponent }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group relative flex flex-col items-center justify-center
        p-6 text-center border border-black rounded-3xl
        aspect-square cursor-pointer
        shadow-sm hover:shadow-2xl hover:-translate-y-2
        hover:bg-neutral-800 hover:text-white
        transition-all duration-300
      "
    >
      <div className="w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
        <IconComponent size="100%" className="text-neutral-700 group-hover:text-white" />
      </div>
      <span className="font-extrabold text-sm md:text-base text-neutral-800 group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  return (
    <section className="w-full bg-white font-sans py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-neutral-900 mb-12 tracking-tight"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid with staggered animation */}
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

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SkillsSection />
    </div>
  );
}
