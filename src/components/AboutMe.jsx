// components/AboutMe.jsx

"use client"; // Typing animation ke liye yeh zaroori hai

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  // Image se text yahan copy karein
  const aboutText = `I'm not here just to design — I'm here to translate ideas into experiences.
  
  I'm Ranjeet Verma, a designer who moves between craft and code, culture and minimalism, logic and emotion.
  
  My work lives at the intersection of stories and systems — where a product can carry heritage, and an interface can feel like a conversation.
  
  From giving an organic voice to Sattuz and GutNut, to shaping interior identities with Denotation Design, and bringing history alive through Heritage for Children, every project I touch is an experiment in meaning.
  
  I don't design to impress — I design to connect.
  To make someone pause, feel, or remember.`;

  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side: Image Box */}
           <div className="p-3 shadow-lg overflow-hidden relative max-w-[632px] aspect-[632/646] w-full">
            <Image
                src="/facepng.png"
                alt="Ranjeet Verma Sketch"
                width={500}
                height={500}
                className="object-cover w-full h-full top-[-10%] left-[-6%] scale-220 " // <-- Scales image up
                priority
              />
          <div className="w-full mx-auto md:max-w-none aspect-[559/501] max-w-[559px]">
             <img src="/vector.png" alt=""   className="absolute right-0 w-[50%] h-auto top-1" />
          <img src="/Vector (1).png" alt=""  className="absolute w-[31%] h-auto top-1"  />
          <img src="/vector (2).png" alt=""  className="absolute h-[100%] w-auto left-1 top-0"  />
          <img src="/vector (3).png" alt=""  className="absolute  right-2 h-[100%] w-auto top-0 "  />
          <img src="/vector (4).png" alt=""  className="absolute bottom-1 right-0 w-[56%] h-auto "  />
          <img src="/vector (5).png" alt=""  className="absolute bottom-1 w-[5%] h-auto "   />
            
            {/* Square bordered box */}
           
              
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="font-extrabold">Me</span>
            </h2>

            {/* Typing Animation Component */}
            <TypeAnimation
              sequence={[
                // Pehle 1 second wait karega
                1000,
                // Phir poora text type karega
                aboutText,
              ]}
              wrapper="p" // Text ko <p> tag mein wrap karega
              speed={70} // Typing speed (higher is slower)
              style={{
                whiteSpace: "pre-line", // New lines (\n) ko respect karega
                fontSize: "1.125rem", // text-lg
                lineHeight: "1.75", // leading-relaxed
                color: "#374151", // text-gray-700
              }}
              repeat={0} // Animation repeat nahi hoga
              cursor={true} // Typing cursor dikhayega
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
