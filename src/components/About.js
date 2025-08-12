// // src/components/About.js
// import React from 'react';
// import CurvedLoop from '../ui/CurvedLoop';
// import SplitText from '../ui/SplitText'
// import bwave from "../assets/bottom-wave.svg"
// import { FaMugHot, FaHatWizard, FaMagic, FaAtom } from 'react-icons/fa';
// import softwareIcon from '../assets/webui/ui6.png'; // Example path
// import websitesIcon from '../assets/webui/ui4.png'; // Example path
// import contentIcon from '../assets/webui/ui5.png';   // Example path
// import BlurText from '../ui/BlurText';

// const CategoryButton = ({ image, text }) => {
//   return (
//     <button className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-full flex items-center px-4 py-2 mx-2 sm:mx-4 hover:bg-white/20 transition-all duration-300">
//       <img src={image} alt={text} className="w-8 h-8 rounded-full object-cover border-2 border-white/30" />
//       <span className="ml-3 text-white font-medium tracking-wide">{text}</span>
//     </button>
//   );
// };



// export default function About() {
//   return (
//     <section id="about" className="relative bg-black h-[80vh] w-full flex flex-col">
//       {/* <div className="text-center"> */}
//       {/* <h2 className="text-7xl font-bold mb-4 font-[tenali] text-left">Our Story</h2> */}
//       <div className='relative bg-red-500 z-[1000]'>
//         <img src={bwave} className='absolute top-0 w-full rotate-180 translate-y-[80vh]' />
//       </div>
//       <div className='mt-10'></div>
//       <div className='text-center'>
//         <SplitText
//           text="Our Story"
//           className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 font-[tenali] text-left"
//           delay={100}
//           duration={0.6}
//           ease="power3.out"
//           splitType="chars"
//           from={{ opacity: 0, y: 40 }}
//           to={{ opacity: 1, y: 0 }}
//           threshold={0.1}
//           rootMargin="-100px"
//           textAlign="center"
//         />
//       </div>

//       <div className='text-center'>
//       <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
//         <BlurText
//           text="This isn’t your typical “we started in a garage” story."
//           className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"          
//           delay={150}
//           animateBy="words"
//           direction="bottom"
//         /></div>
//       <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
//         <BlurText
//           text="ELEV8LABS WAS BORN IN A UNIVERSITY CANTEEN ☕️ OVER TOO MUCH CHAI AND TOO MANY “WHAT IF” IDEAS."
//           className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"          
//           delay={150}
//           animateBy="words"
//           direction="bottom"
//         /></div>
//       <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
//         <BlurText
//           text="WE’RE A BUNCH OF DESIGN NERDS 😎, CODE WIZARDS 🎩, AND CONTENT MAGICIANS 🪄 WHO DECIDED TO SKIP THE BORING PLACEMENTS AND BUILD SOMETHING BIGGER — SOMETHING THAT HELPS BUSINESSES GROW WITHOUT LOSING THEIR PERSONALITY."
//           delay={150}
//           animateBy="words"
//           direction="bottom"
//           className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"
//         /></div>
//         </div>
//       <div className="flex flex-wrap items-center justify-center mt-16 mb-8">
//         <CategoryButton image={softwareIcon} text="Our Software" />
//         <CategoryButton image={websitesIcon} text="Our Websites" />
//         <CategoryButton image={contentIcon} text="Our Content" />
//       </div>
//     </section>
//   );
// }


// src/components/About.js
import CurvedLoop from '../ui/CurvedLoop';
import SplitText from '../ui/SplitText'
import bwave from "../assets/bottom-wave.svg"
import { FaMugHot, FaHatWizard, FaMagic, FaAtom } from 'react-icons/fa';
import Core from '../assets/core.png'; // Example path
import Creativity from '../assets/creativity.png'; // Example path
import Passion from '../assets/passion.png';   // Example path
import BlurText from '../ui/BlurText';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import useMediaQuery from '../hooks/useMediaQuery';


// --- NEW Framer Motion CategoryButton ---
// This component is based on the example you provided.
const CategoryButton = ({ prop, mousePosition }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate parallax movement based on mouse position and speed
  const moveX = mousePosition.x * prop.speed;
  const moveY = mousePosition.y * prop.speed;

  return (
    <motion.div
      // This outer div handles the parallax movement
      style={{
        x: moveX,
        y: moveY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer"
    >
      {/* This inner div handles the morphing animation */}
      <motion.div
        layout // The magic prop for seamless size/shape animation
        initial={{ borderRadius: '9999px' }} // Start as a circle
        animate={{
          width: isHovered ? '250px' : 'auto',
          height: isHovered ? '160px' : '48px',
          borderRadius: '20px',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative bg-white/10 border border-white/20 backdrop-blur-lg shadow-2xl overflow-hidden flex items-center justify-center"
      >
        <AnimatePresence>
          {isHovered ? (
            // If hovered, show the image
            <motion.img
              key="image"
              src={prop.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.3 } }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute w-full h-full object-cover"
            />
          ) : (
            // If not hovered, show the text and icon
            <motion.div
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center px-4 py-2"
            >
              <img src={prop.image} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white/30" />
              <span className="ml-3 text-white font-medium tracking-wide whitespace-nowrap">
                {prop.text}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};


// --- MOBILE: Marquee Component ---
const Marquee = ({ categories }) => {
  const marqueeContent = [...categories, ...categories]; // Duplicate for seamless loop

  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeContent.map((cat, index) => (
          <div key={`marquee-${index}`} className="flex-shrink-0 mx-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full flex items-center px-4 py-2">
            <img src={cat.image} alt={cat.text} className="w-8 h-8 rounded-full object-cover border-2 border-white/30" />
            <span className="ml-3 text-white font-medium tracking-wide">{cat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default function About() {
  // --- Parallax Logic (remains the same) ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isMobileOrTablet = useMediaQuery('(max-width: 1023px)');

  // Data for our buttons
  const categories = [
    { id: 1, text: 'Creativity', image: Creativity, speed: 0.03 },
    { id: 2, text: 'Core', image: Core, speed: 0.05 },
    { id: 3, text: 'Passion', image: Passion, speed: 0.02 },
  ];

  return (
    <section id="about" className="relative bg-black min-h-[80vh] w-full flex flex-col">
      {/* ... other JSX elements like bwave, SplitText, BlurText remain the same ... */}
      <div className='relative bg-red-500 z-[1000]'>
        <img src={bwave} className='absolute top-0 w-full rotate-180 translate-y-[80vh]' />
      </div>
      <div className='mt-10'></div>
      <div className='text-center'>
        <SplitText
          text="Our Story"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 font-[tenali] text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className='text-center'>
        <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
          <BlurText
            text="This isn’t your typical “we started in a garage” story."
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"
            delay={150}
            animateBy="words"
            direction="bottom"
          /></div>
        <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
          <BlurText
            text="ELEV8LABS WAS BORN IN A UNIVERSITY CANTEEN ☕️ OVER TOO MUCH CHAI AND TOO MANY “WHAT IF” IDEAS."
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"
            delay={150}
            animateBy="words"
            direction="bottom"
          /></div>
        <div className='text-center px-[20px] sm:px-[100px] lg:px[200px] md:px-[100px]'>
          <BlurText
            text="WE’RE A BUNCH OF DESIGN NERDS 😎, CODE WIZARDS 🎩, AND CONTENT MAGICIANS 🪄 WHO DECIDED TO SKIP THE BORING PLACEMENTS AND BUILD SOMETHING BIGGER — SOMETHING THAT HELPS BUSINESSES GROW WITHOUT LOSING THEIR PERSONALITY."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-4 font-[tenali] flex items-center justify-center"
          /></div>
      </div>
      {/* --- Button Container --- */}
      <div ref={containerRef} className="flex-grow flex items-center justify-center w-full">
        {isMobileOrTablet ? (
          <Marquee categories={categories} />
        ) : (
          <div className="flex items-center justify-center gap-8 sm:gap-16">
            {categories.map((cat) => (
              <CategoryButton key={cat.id} prop={cat} mousePosition={mousePosition} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
