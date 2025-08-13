import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORTANT: Replace this with the actual path to your logo ---
import companyLogo from '../assets/logo.png'; // Example path

// This is a reusable component for the reveal animation
const RevealFromBottom = ({ children, delay = 0, duration = 0.8 }) => {
  const wrapperVariants = {
    hidden: { y: 0 }, // The mask itself doesn't move
    visible: { y: 0 },
  };

  const childVariants = {
    hidden: { y: '110%' }, // The content starts fully below the mask
    visible: {
      y: '30%', // The content moves up to its final position
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: duration,
        delay: delay,
      },
    },
  };

  return (
    // The container acts as a "mask" with overflow hidden
    <motion.div
      style={{ overflow: 'hidden' }}
      variants={wrapperVariants}
    >
      {/* The child is the element that actually moves */}
      <motion.div variants={childVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

const CallToAction = () => {
  return (
    <section className="relative w-full h-[50vh] bg-black flex flex-col items-center justify-end overflow-hidden pb-10 sm:pb-20">
      {/* --- Top Content (optional, based on the example image) --- */}
      {/* <div className="text-center text-white mb-20 px-4">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          Interested in working together, trying   

          our platform or simply learning more?
        </h2>
        <div className="mt-12 text-lg text-gray-400">
          <p>Contact us at:</p>
          <a href="mailto:contact@elev8labs.com" className="text-white font-medium hover:text-purple-400 transition-colors">
            contact@elev8labs.com
          </a>
        </div>
      </div> */}

      {/* --- Main Animated Brand Name --- */}
      {/* This parent container triggers the animation for all children when it enters the view */}
      <motion.div
        className="absolute -bottom-6 sm:-bottom-9 md:-bottom-12 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }} // Animate when 50% is in view, only once
        transition={{ staggerChildren: 0.1 }} // Stagger the animation of children
      >
        {/* Part 1: "elev" */}
        <RevealFromBottom>
          <span className="text-[100px] sm:text-[180px] md:text-[250px] z-[1000] font-bold font-[tenali] text-white">
            elev
          </span>
        </RevealFromBottom>

        {/* Part 2: The Logo */}
        <div className="mx-1 sm:mx-2">
          <RevealFromBottom delay={0.1}>
            <img
              src={companyLogo}
              alt="elev8labs logo"
              className="w-[80px] h-[100px] sm:w-[120px] sm:h-[190px] translate-y-0 sm:translate-y-5 md:translate-y-6 md:w-[190px] md:h-[290px]" // Responsive logo size
            />
          </RevealFromBottom>
        </div>

        {/* Part 3: "labs" */}
        <RevealFromBottom delay={0.2}>
          <span className="text-[100px] sm:text-[180px] md:text-[250px] z-[1000] font-bold font-[tenali] text-white">
            labs
          </span>
        </RevealFromBottom>
      </motion.div>
    </section>
  );
};

export default CallToAction;
