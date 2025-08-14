
// const images = [
//     { src: "https://picsum.photos/id/1001/300/300", depthX: 0.4, depthY: -0.35, x: -400, y: -250 },
//     { src: "https://picsum.photos/id/1002/250/350", depthX: -0.45, depthY: 0.35, x: 400, y: -250 },
//     { src: "https://picsum.photos/id/1003/280/280", depthX: 0.55, depthY: 0.25, x: -450, y: 50 },
//     { src: "https://picsum.photos/id/1004/320/260", depthX: -0.6, depthY: -0.35, x: 450, y: 50 },
//     { src: "https://picsum.photos/id/1005/260/320", depthX: 0.45, depthY: 0.55, x: -200, y: 300 },
//     { src: "https://picsum.photos/id/1006/300/240", depthX: -0.55, depthY: -0.6, x: 200, y: 300 },
//   ];
// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';

// const ParallaxHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Scattered parallax image props around the text (reduced to 8 props)
//   const parallaxProps = [
//     { id: 1, type: 'star', x: 15, y: 10, size: 40, speed: 0.3, opacity: 0.8 },
//     { id: 2, type: 'diamond', x: 85, y: 15, size: 36, speed: 0.5, opacity: 0.9 },
//     { id: 3, type: 'lightning', x: 10, y: 45, size: 38, speed: 0.7, opacity: 0.8 },
//     { id: 4, type: 'rocket', x: 90, y: 55, size: 42, speed: 0.4, opacity: 0.7 },
//     { id: 5, type: 'crystal', x: 20, y: 80, size: 44, speed: 0.6, opacity: 0.9 },
//     { id: 6, type: 'hexagon', x: 80, y: 85, size: 40, speed: 0.3, opacity: 0.8 },
//     { id: 7, type: 'atom', x: 25, y: 25, size: 36, speed: 0.8, opacity: 0.8 },
//     { id: 8, type: 'gem', x: 75, y: 25, size: 38, speed: 0.5, opacity: 0.9 },
//   ];

//   useEffect(() => {
//     setIsLoaded(true);

//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const getImageElement = (prop) => {
//     const moveX = mousePosition.x * prop.speed * 30;
//     const moveY = mousePosition.y * prop.speed * 30;

//     const style = {
//       left: `${prop.x}%`,
//       top: `${prop.y}%`,
//       width: `${prop.size}px`,
//       height: `${prop.size}px`,
//       transform: `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`,
//       opacity: prop.opacity,
//       zIndex: 10,
//       filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
//     };

//     const getSvgIcon = (type) => {
//       switch (type) {
//         case 'star':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-400">
//               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//             </svg>
//           );
//         case 'diamond':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-cyan-400">
//               <path d="M6 2L18 2L21 9L12 22L3 9Z" />
//             </svg>
//           );
//         case 'hexagon':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-400">
//               <path d="M17.5 3.5L22 12L17.5 20.5H6.5L2 12L6.5 3.5H17.5Z" />
//             </svg>
//           );
//         case 'lightning':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
//               <path d="M11 2L7 11H13L12 22L16 13H10L11 2Z" />
//             </svg>
//           );
//         case 'rocket':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-pink-400">
//               <path d="M14 6L15.5 4.5Q16.5 3.5 18 3.5T21 4.5Q22 5.5 22 7T21 10L19.5 11.5L16 15L14 13L13 11L14 6M12 8L8 12L2 12L3 14L8 13L10 15L11 21L13 20L13 14L17 10L12 8M5 19L3 21L5 19Z" />
//             </svg>
//           );
//         case 'crystal':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-400">
//               <path d="M12 2L18 8L12 14L6 8L12 2M12 16L18 10L22 14L12 22L2 14L6 10L12 16Z" />
//             </svg>
//           );
//         case 'atom':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-indigo-400">
//               <path d="M12 11C11.45 11 11 11.45 11 12S11.45 13 12 13 13 12.55 13 12 12.55 11 12 11M7.5 8C9.07 10.11 10.47 12 12 12S14.93 10.11 16.5 8C14.93 5.89 13.53 4 12 4S9.07 5.89 7.5 8M16.5 16C14.93 13.89 13.53 12 12 12S9.07 13.89 7.5 16C9.07 18.11 10.47 20 12 20S14.93 18.11 16.5 16Z" />
//             </svg>
//           );
//         case 'gem':
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-rose-400">
//               <path d="M16 2L21 7L12 22L3 7L8 2H16M12 4.5L9 7H15L12 4.5M12 9.5L8.5 7.5L5.5 9L12 19L18.5 9L15.5 7.5L12 9.5Z" />
//             </svg>
//           );
//         default:
//           return (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
//               <circle cx="12" cy="12" r="10" />
//             </svg>
//           );
//       }
//     };

//     return (
//       <div
//         key={prop.id}
//         className="absolute transition-all duration-300 ease-out"
//         style={style}
//       >
//         {getSvgIcon(prop.type)}
//       </div>
//     );
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-transparent">
//       {/* Subtle background gradient */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-blue-900/10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isLoaded ? 1 : 0 }}
//         transition={{ duration: 2 }}
//       />

//       {/* Scattered parallax props */}
//       {parallaxProps.map((prop) => (
//         <motion.div
//           key={prop.id}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: isLoaded ? 1 : 0,
//             scale: isLoaded ? 1 : 0
//           }}
//           transition={{
//             delay: prop.id * 0.1,
//             duration: 0.8,
//             type: "spring",
//             stiffness: 100
//           }}
//           whileHover={{
//             scale: 1.3,
//             opacity: 1,
//             transition: { duration: 0.2 }
//           }}
//           style={{ zIndex: 20 }}
//         >
//           {getImageElement(prop)}
//         </motion.div>
//       ))}

//       {/* Floating ambient particles */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={`particle-${i}`}
//           className="absolute w-1 h-1 bg-white/30 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             x: [0, Math.random() * 20 - 10, 0],
//             opacity: [0, 0.6, 0],
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 4 + Math.random() * 3,
//             delay: Math.random() * 3,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Center content */}
//       <div className="absolute inset-0 flex items-center justify-center">
//   <motion.div
//     className="text-center px-4 sm:px-8"
//     initial={{ opacity: 0, y: 50, scale: 0.9 }}
//     animate={{ 
//       opacity: isLoaded ? 1 : 0, 
//       y: isLoaded ? 0 : 50, 
//       scale: isLoaded ? 1 : 0.9 
//     }}
//     transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
//   >
//     {/* Main heading */}
//     <motion.h1
//       className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-[tenali] text-white/90 mb-3 sm:mb-5 tracking-[-0.04em] sm:tracking-[-0.05em] leading-snug sm:leading-tight"
//       animate={{
//         textShadow: [
//           "0 0 20px rgba(255,255,255,0.2)",
//           "0 0 40px rgba(255,255,255,0.4)",
//           "0 0 20px rgba(255,255,255,0.2)",
//         ],
//       }}
//       transition={{
//         repeat: Infinity,
//         duration: 4,
//         ease: "easeInOut",
//       }}
//     >
//       Creative solutions<br /> 
//       for next-level growth.
//     </motion.h1>

//     {/* Subtitle */}
//     <motion.p
//       className="text-sm sm:text-lg md:text-xl lg:text-2xl font-[tenali] text-white/70 tracking-wide mb-5 sm:mb-10 -translate-y-5 sm:-translate-y-5"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isLoaded ? 1 : 0 }}
//       transition={{ delay: 1.2, duration: 1 }}
//     >
//       Elev8 to the Top
//     </motion.p>

//     {/* Call to action */}
//     <motion.button
//       className="px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg border border-white/30 rounded-full text-white/80 font-light tracking-wide hover:from-blue-500/30 hover:to-purple-600/30 hover:border-white/50 transition-all duration-300"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ 
//         opacity: isLoaded ? 1 : 0, 
//         y: isLoaded ? 0 : 20 
//       }}
//       transition={{ delay: 1.8, duration: 0.8 }}
//       whileHover={{ 
//         scale: 1.05,
//         boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
//       }}
//       whileTap={{ scale: 0.98 }}
//     >
//       Explore
//     </motion.button>
//   </motion.div>
// </div>



//       {/* Noise texture overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       />
//     </div>
//   );
// };

// export default ParallaxHero;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Assuming your image imports are correct
// import ui1 from "../assets/webui/ui1.jpg";
// import ui2 from "../assets/webui/ui2.jpeg";
// import ui3 from "../assets/webui/ui3.jpeg";
// import ui4 from "../assets/webui/ui4.png";
// import ui5 from "../assets/webui/ui5.png";
// import ui6 from "../assets/webui/ui6.png";

// const parallaxProps = [
//   // Top-left corner
//   { id: 1, text: 'MOTION', image: ui1, x: 25, y: 25, speed: 1.5 },
  
//   // Top-right corner
//   { id: 2, text: 'DESIGN', image: ui2, x: 70, y: 25, speed: 1.4 },
  
//   // Middle-left edge
//   { id: 3, text: 'FLOW', image: ui3, x: 8, y: 50, speed: 1.6 },
  
//   // Middle-right edge
//   { id: 4, text: 'DYNAMIC', image: ui4, x: 80, y: 50, speed: 1.3 },
  
//   // Bottom-left corner
//   { id: 5, text: 'SMOOTH', image: ui5, x: 25, y: 75, speed: 1.7 },
  
//   // Bottom-right corner
//   { id: 6, text: 'FLUID', image: ui6, x: 70, y: 75, speed: 1.5 },
// ];

// const FloatingElement = ({ prop, mousePosition }) => {
  
//   const [isHovered, setIsHovered] = useState(false);
//   const moveX = mousePosition.x * prop.speed * 30;
//   const moveY = mousePosition.y * prop.speed * 30;
  
//   return (
//     <motion.div
//     layout
//     style={{
//       position: 'absolute',
//       top: `${prop.y}%`,
//       left: `${prop.x}%`,
//       x: moveX,
//       y: moveY,
//       transformOrigin: "center center",
//     }}
//     onHoverStart={() => setIsHovered(true)}
//     onHoverEnd={() => setIsHovered(false)}
//     className="cursor-pointer"
//     >
//       <motion.div
//         layout
//         initial={{ borderRadius: '20px' }}
//         animate={{
//           width: isHovered ? '300px' : 'auto',
//           height: isHovered ? '200px' : 'auto',
//           borderRadius: '20px',
//         }}
//         transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//         className="relative bg-gradient-to-r from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl hidden sm:block xl:block lg:block md:block "
//         >
//         <AnimatePresence>
//           {isHovered ? (
//             <motion.img
//             key="image"
//             src={prop.image}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="absolute w-full h-full object-cover"
//             />
//           ) : (
//             <motion.div
//             key="text"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="px-4 py-2"
//             >
//               <span className="font-light tracking-widest text-white/90 whitespace-nowrap">
//                 {prop.text}
//               </span>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// };
// const ParallaxHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false); // This state controls the animation

//   useEffect(() => {
//     // --- THIS IS THE FIX ---
//     // We need to set isLoaded to true to trigger the entrance animations.
//     setIsLoaded(true);
//     // ---------------------

//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       setMousePosition({ x, y });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []); // Empty dependency array ensures this runs only once on mount

//   const handleScroll = () => {
//     // Find the element with the id "About"
//     const aboutSection = document.querySelector('#about');
//     if (aboutSection) {
//       // Use the modern scrollIntoView method for a smooth scroll
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // Optional: Log an error if the section isn't found
//       console.warn("The #About section was not found on the page.");
//     }
//   };


//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-transparent z-[1000]">
//       {parallaxProps.map((prop) => (
//         <FloatingElement key={prop.id} prop={prop} mousePosition={mousePosition} />
//       ))}
//         {/* Center content */}
//        <div  className="absolute inset-0 flex items-center justify-center pointer-events-none">
//          <motion.div
//           className="text-center px-4 sm:px-8"
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           animate={{
//             opacity: isLoaded ? 1 : 0,
//             y: isLoaded ? 0 : 50,
//             scale: isLoaded ? 1 : 0.9
//           }}
//           transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
//         >
//           {/* Main heading */}
//           <motion.h1
//             className="text-5xl lg:translate-y-28 sm:translate-y-20 translate-y-20  sm:text-7xl md:text-8xl lg:text-9xl font-[tenali] text-white/90 mb-3 sm:mb-5 tracking-[-0.04em] sm:tracking-[-0.05em] leading-snug sm:leading-tight"
//             animate={{
//               textShadow: [
//                 "0 0 20px rgba(255,255,255,0.2)",
//                 "0 0 40px rgba(255,255,255,0.4)",
//                 "0 0 20px rgba(255,255,255,0.2)",
//               ],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//               ease: "easeInOut",
//             }}
//           >
//             Creative solutions  

//           </motion.h1>
//           <motion.h1
//             className="text-5xl sm:text-7xl md:text-8xl translate-y-10 lg:text-9xl font-[tenali] text-white/90 mb-3 sm:mb-5 tracking-[-0.04em] sm:tracking-[-0.05em] leading-snug sm:leading-tight"
//             animate={{
//               textShadow: [
//                 "0 0 20px rgba(255,255,255,0.2)",
//                 "0 0 40px rgba(255,255,255,0.4)",
//                 "0 0 20px rgba(255,255,255,0.2)",
//               ],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//               ease: "easeInOut",
//             }}
//           >
//             for next-level growth.
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             className="text-xl sm:text-lg md:text-xl lg:text-2xl font-[tenali] text-white/70 tracking-wide mb-5 sm:mb-10 translate-y-3 sm:translate-y-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isLoaded ? 1 : 0 }}
//             transition={{ delay: 1.2, duration: 1 }}
//           >
//             Elev8 to the Top
//           </motion.p>

//           {/* Call to action */}
//           <motion.button
//             className="px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg border border-white/30 rounded-full text-white/80 font-light tracking-wide hover:from-blue-500/30 hover:to-purple-600/30 hover:border-white/50 transition-all duration-300 pointer-events-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{
//               opacity: isLoaded ? 1 : 0,
//               y: isLoaded ? 0 : 20
//             }}
//             transition={{ delay: 1.8, duration: 0.8 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
//             }}
//             whileTap={{ scale: 0.98 }}
//             // --- ATTACH THE FUNCTION HERE ---
//             onTap={handleScroll}
//           >
//             Explore
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxHero



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assuming your image imports are correct
import ui1 from "../assets/webui/ui1.jpg";
import ui2 from "../assets/webui/ui2.jpeg";
import ui3 from "../assets/webui/ui3.jpeg";
import ui4 from "../assets/webui/ui4.png";
import ui5 from "../assets/webui/ui5.png";
import ui6 from "../assets/webui/ui6.png";

const parallaxProps = [
  // Top-left corner
  { id: 1, text: 'CREATIVE', image: ui1, x: 25, y: 25, speed: 1.5 },
  
  // Top-right corner
  { id: 2, text: 'DESIGN', image: ui2, x: 70, y: 25, speed: 1.4 },
  
  // Middle-left edge
  { id: 3, text: 'FLOW', image: ui3, x: 8, y: 50, speed: 1.6 },
  
  // Middle-right edge
  { id: 4, text: 'GROWTH', image: ui4, x: 80, y: 50, speed: 1.3 },
  
  // Bottom-left corner
  { id: 5, text: 'SMOOTH', image: ui5, x: 25, y: 75, speed: 1.7 },
  
  // Bottom-right corner
  { id: 6, text: 'DYNAMIC', image: ui6, x: 70, y: 75, speed: 1.5 },
];

const FloatingElement = ({ prop, mousePosition, activeId }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const moveX = mousePosition.x * prop.speed * 30;
  const moveY = mousePosition.y * prop.speed * 30;

  // An element is considered "open" if it's being hovered over OR if it's the active one in the sequence.
  const isOpen = isHovered || activeId === prop.id;
  
  return (
    <motion.div
      layout
      style={{
        position: 'absolute',
        top: `${prop.y}%`,
        left: `${prop.x}%`,
        x: moveX,
        y: moveY,
        transformOrigin: "center center",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <motion.div
        layout
        initial={{ borderRadius: '20px' }}
        animate={{
          width: isOpen ? '300px' : 'auto',
          height: isOpen ? '200px' : 'auto',
          borderRadius: '20px',
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="relative bg-gradient-to-r from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl hidden sm:block xl:block lg:block md:block "
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.img
              key="image"
              src={prop.image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute w-full h-full object-cover"
            />
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 py-2"
            >
              <span className="font-light tracking-widest text-white/90 whitespace-nowrap">
                {prop.text}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ParallaxHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  // --- NEW ---
  // State to track the currently active element in the automatic sequence.
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- NEW ---
    // Set up an interval to cycle through the active elements.
    const interval = setInterval(() => {
      setActiveId(prevId => (prevId % parallaxProps.length) + 1);
    }, 2000); // Change active element every 2 seconds (2000ms)

    // Cleanup function to remove listeners and intervals when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("The #About section was not found on the page.");
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-transparent z-[1000]">
      {parallaxProps.map((prop) => (
        // --- MODIFIED --- Pass the activeId to each FloatingElement
        <FloatingElement key={prop.id} prop={prop} mousePosition={mousePosition} activeId={activeId} />
      ))}
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center px-4 sm:px-8"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : 50,
            scale: isLoaded ? 1 : 0.9
          }}
          transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
        >
          {/* Main heading */}
          <motion.h1
            className="text-5xl lg:translate-y-28 sm:translate-y-20 translate-y-20  sm:text-7xl md:text-8xl lg:text-9xl font-[tenali] text-white/90 mb-3 sm:mb-5 tracking-[-0.04em] sm:tracking-[-0.05em] leading-snug sm:leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 40px rgba(255,255,255,0.4)",
                "0 0 20px rgba(255,255,255,0.2)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            Creative solutions
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl translate-y-10 lg:text-9xl font-[tenali] text-white/90 mb-3 sm:mb-5 tracking-[-0.04em] sm:tracking-[-0.05em] leading-snug sm:leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 40px rgba(255,255,255,0.4)",
                "0 0 20px rgba(255,255,255,0.2)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            for next-level growth.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-lg md:text-xl lg:text-2xl font-[tenali] text-white/70 tracking-wide mb-5 sm:mb-10 translate-y-3 sm:translate-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Elev8 to the Top
          </motion.p>

          {/* Call to action */}
          <motion.button
            className="px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg border border-white/30 rounded-full text-white/80 font-light tracking-wide hover:from-blue-500/30 hover:to-purple-600/30 hover:border-white/50 transition-all duration-300 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 20
            }}
            transition={{ delay: 1.8, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            onTap={handleScroll}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxHero;
