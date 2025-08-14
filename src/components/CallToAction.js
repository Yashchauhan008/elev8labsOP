import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORTANT: Replace this with the actual path to your logo ---
import companyLogo from '../assets/logo.png'; // Example path
import Ribbons from '../ui/Ribbons';

// This is the reusable component for the "elev8labs" reveal animation.
// I've kept your logic exactly as you provided it.
const RevealBrandPart = ({ children, delay = 0, duration = 0.8 }) => {
  const wrapperVariants = {
    hidden: { y: 0 },
    visible: { y: 0 },
  };
  const childVariants = {
    hidden: { y: '110%' },
    visible: {
      y: '30%',
      transition: { type: 'spring', stiffness: 80, damping: 20, duration: duration, delay: delay },
    },
  };
  return (
    <motion.div style={{ overflow: 'hidden' }} variants={wrapperVariants}>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.div>
  );
};

// A simpler reveal animation for the header text and buttons.
const RevealSimple = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay }
    }
  };
  return <motion.div variants={variants}>{children}</motion.div>;
}


const CallToAction = () => {
  return (
    <section id="contact" className="relative w-full h-[45vh] sm:h-[45vh] bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className='absolute h-full w-full z-[1000]'>
        <Ribbons
          baseThickness={50}
          colors={['#7700ff']}
          speedMultiplier={0.35}
          maxAge={400}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>
      {/* This parent container triggers the animation for all children when it enters the view */}
      <motion.div
        className="relative w-full h-full flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        transition={{ staggerChildren: 0.15 }} // Stagger all animations inside
      >

        {/* --- Top Content --- */}
        <div className="text-center text-gray-400 px-4 z-1">
          <RevealSimple>
            <h2 className="relative text-5xl sm:text-6xl md:text-7xl sm:-translate-y-5 md:-translate-y-[70px] z-[100] font-extrabold font-[tenali] leading-tight">
              Are you ready🎬 to
            </h2>
          </RevealSimple>
          <RevealSimple delay={0.1}>
            <h2 className="relative text-5xl sm:text-6xl md:text-7xl -translate-y-3 sm:-translate-y-8 md:-translate-y-[80px] z-[100] font-extrabold font-[tenali] leading-tight">
              get crazy creative✨?
            </h2>
          </RevealSimple>
        </div>

        {/* --- Glassmorphic CTA Buttons --- */}
        <RevealSimple delay={0.3}>
          <div className=" relative mt-10 sm:mt-12 flex flex-col sm:flex-row -translate-y-8 sm:-translate-y-14 md:-translate-y-28 items-center gap-4 z-[1000]">

            {/* Call Button */}
            <motion.a
              href="tel:+919974588518"
              className="px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-full text-white/90 font-medium tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us
            </motion.a>
            {/* Mail Button */}
            <motion.a
              href="mailto:contact@elev8labs.com"
              className="px-9 py-3 bg-white/5 backdrop-blur-lg sm:px-6 border border-white/20 rounded-full text-white/90 font-medium tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mail Us
            </motion.a>
          </div>
        </RevealSimple>

        {/* --- Main Animated Brand Name --- */}
        {/* This is positioned absolutely to sit behind the content */}
        <div className="absolute -bottom-6 sm:-bottom-9 md:-bottom-12 flex items-center justify-center">
          <RevealBrandPart>
            <span className="text-[100px] sm:text-[180px] md:text-[250px] font-bold font-[tenali] text-white">
              elev
            </span>
          </RevealBrandPart>
          <div className="mx-1 sm:mx-2">
            <RevealBrandPart delay={0.1}>
              <img
                src={companyLogo}
                alt="elev8labs logo"
                className="w-[80px] h-[100px] sm:w-[120px] sm:h-[190px] translate-y-0 sm:translate-y-5 md:translate-y-6 md:w-[190px] md:h-[290px]"
              />
            </RevealBrandPart>
          </div>
          <RevealBrandPart delay={0.2}>
            <span className="text-[100px] sm:text-[180px] md:text-[250px] font-bold font-[tenali] text-white">
              labs
            </span>
          </RevealBrandPart>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
