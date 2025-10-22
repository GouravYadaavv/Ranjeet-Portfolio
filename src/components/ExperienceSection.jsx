"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Education from "./Education";

const ExperienceSection = () => {
  const [activeSection, setActiveSection] = useState("experience"); 
  const [isMobile, setIsMobile] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Section switch function (used only on desktop)
  const switchTo = (target) => {
    setScrollLock(true);
    setActiveSection(target);
    setTimeout(() => setScrollLock(false), 1200);
  };

  // Framer Motion variants
  const variants = {
    enterRight: { x: "100%", opacity: 0 },
    enterLeft: { x: "-100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitLeft: { x: "-100%", opacity: 0 },
    exitRight: { x: "100%", opacity: 0 },
  };

  return (
    <section className="relative w-full h-screen bg-[#1E1E1E] text-white overflow-hidden">
      {isMobile ? (
        // 📱 Mobile: simple stacked layout
        <div className="flex flex-col w-full">
          <div className="w-full">
            <ExperienceCard />
          </div>
          <div className="w-full mt-8">
            <Education />
          </div>
        </div>
      ) : (
        // 💻 Desktop: animated loop
        <div className="relative w-full h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            {activeSection === "experience" ? (
              <motion.div
                key="experience"
                variants={variants}
                initial="enterLeft"
                animate="center"
                exit="exitLeft"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <div
                  ref={experienceRef}
                  onScroll={(e) => {
                    const el = e.target;
                    const bottomReached = el.scrollHeight - el.scrollTop <= el.clientHeight + 5;
                    if (bottomReached && !scrollLock) switchTo("education");
                  }}
                  className="h-full overflow-y-auto scroll-smooth"
                >
                  <ExperienceCard />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="education"
                variants={variants}
                initial="enterRight"
                animate="center"
                exit="exitRight"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
                onMouseMove={(e) => {
                  if (scrollLock) return;
                  const section = e.currentTarget;
                  const rect = section.getBoundingClientRect();
                  const mouseY = e.clientY - rect.top;
                  const centerStart = rect.height * 0.4;
                  const centerEnd = rect.height * 0.6;
                  if (mouseY >= centerStart && mouseY <= centerEnd) switchTo("experience");
                }}
              >
                <div
                  ref={educationRef}
                  onScroll={(e) => {
                    const el = e.target;
                    const topReached = el.scrollTop <= 0;
                    if (topReached && !scrollLock) switchTo("experience");
                  }}
                  className="h-full overflow-y-auto scroll-smooth"
                >
                  <Education />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
