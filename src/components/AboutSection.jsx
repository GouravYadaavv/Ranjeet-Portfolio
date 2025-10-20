"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Chhote paragraphs ka full text
const paragraphs = [
  "I'm not here just to design — I'm here to translate ideas into experiences.",
  "I'm Ranjeet Verma, a designer who moves between craft and code, culture and minimalism, logic and emotion.",
  "My work lives at the intersection of stories and systems — where a product can carry heritage, and an interface can feel like a conversation.",
  "From giving an organic voice to Sattuz and GutNut, to shaping interior identities with Denotation Design, and bringing history alive through Heritage for Children, every project I touch is an experiment in meaning.",
  "I don't design to impress — I design to connect. To make someone pause, feel, or remember."
];

// Blinking cursor component
const Cursor = () => <span className="inline-block w-0.5 h-6 bg-gray-600 ml-1 animate-blink"></span>;

const AboutSection = () => {
  // Har paragraph ke liye alag state
  const [typedParagraphs, setTypedParagraphs] = useState(Array(paragraphs.length).fill(''));
  // Kaunsa paragraph type ho raha hai
  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    // Agar sab paragraphs type ho gaye hain, toh ruk jaaye
    if (currentParagraph >= paragraphs.length) return;

    // Current paragraph ka full text
    const fullText = paragraphs[currentParagraph];
    let index = 0;

    // Har 40ms par ek character type kare
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setTypedParagraphs(prev => {
          const newTyped = [...prev];
          newTyped[currentParagraph] = fullText.substring(0, index + 1);
          return newTyped;
        });
        index++;
      } else {
        // Paragraph khatam, agla paragraph shuru kare
        clearInterval(intervalId);
        setCurrentParagraph(prev => prev + 1);
      }
    }, 40); // Typing speed

    return () => clearInterval(intervalId);
  }, [currentParagraph]); // Yeh effect tab chalta hai jab 'currentParagraph' badalta hai

  return (
    <section className="w-full bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <div className="w-full p-4">
          <Image 
            src="/me.png" // Image path from 'public' folder
            alt="Sketch illustration of Ranjeet Verma"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full">
          <h2 className="text-5xl font-bold mb-10">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            {/* Pehla paragraph */}
            <p>
              {typedParagraphs[0]}
              {currentParagraph === 0 && <Cursor />}
            </p>
            
            {/* Doosra paragraph (tabhi dikhega jab pehla shuru ho) */}
            {currentParagraph >= 1 && (
              <p>
                {typedParagraphs[1]}
                {currentParagraph === 1 && <Cursor />}
              </p>
            )}

            {/* Teesra paragraph */}
            {currentParagraph >= 2 && (
              <p>
                {typedParagraphs[2]}
                {currentParagraph === 2 && <Cursor />}
              </p>
            )}

            {/* Chautha paragraph */}
            {currentParagraph >= 3 && (
              <p>
                {typedParagraphs[3]}
                {currentParagraph === 3 && <Cursor />}
              </p>
            )}

            {/* Paanchva paragraph */}
            {currentParagraph >= 4 && (
              <p>
                {typedParagraphs[4]}
                {currentParagraph === 4 && <Cursor />}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;