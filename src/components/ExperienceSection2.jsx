"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Education from "./Education";

const ExperienceSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ✅ Smooth curve for motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // ✨ Animation logic
  const expOpacity = useTransform(smoothProgress, [0, 0.4, 0.55], [1, 1, 0]);
  const expY = useTransform(smoothProgress, [0.4, 0.55], [0, -60]);
  const eduOpacity = useTransform(smoothProgress, [0.5, 0.65, 1], [0, 1, 1]);
  const eduY = useTransform(smoothProgress, [0.5, 0.65], [60, 0]);

  // ✅ On mobile: stacked layout (no scroll animation)
  if (isMobile) {
    return (
      <section className="w-full bg-[#1E1E1E] text-white">
        <div className="w-full py-10 px-4">
          <ExperienceCard />
        </div>
        <div className="w-full py-10 px-4">
          <Education />
        </div>
      </section>
    );
  }

  // ✅ Desktop: scroll-animated layout
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1E1E1E] text-white overflow-hidden"
    >
      {/* Make sure entire Experience content shows */}
      <div className="relative w-full min-h-[250vh]">
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-[#1E1E1E]/90 to-[#101010]" />

        {/* EXPERIENCE SECTION */}
        <motion.div
          style={{ opacity: expOpacity, y: expY }}
          className="sticky top-0 min-h-screen flex items-start justify-center py-10 px-6 overflow-y-auto"
        >
          <div className="max-w-6xl w-full">
            <ExperienceCard />
          </div>
        </motion.div>

        {/* EDUCATION SECTION */}
        <motion.div
          style={{ opacity: eduOpacity, y: eduY }}
          className="sticky top-0 min-h-screen flex items-start justify-center py-10 px-6 overflow-y-auto"
        >
          <div className="max-w-6xl w-full">
            <Education />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
