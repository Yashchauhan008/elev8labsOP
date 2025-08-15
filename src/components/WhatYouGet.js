

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// --- Re-add your asset imports ---
import twave from "../assets/top-wave.svg";
import bwave from "../assets/bottom-wave.svg";

import ui1 from "../assets/webui/ui2.jpeg"
import ui2 from "../assets/webui/ui3.jpeg"
import ui3 from "../assets/webui/ui4.png"
import ui4 from "../assets/webui/ui5.png"
import ui5 from "../assets/webui/ui6.png"
import LightRays from '../ui/LightRays';
import Aurora from '../ui/Aurora';

// --- Data (with 'image' property) ---
const services = [
    {
        title: 'Business Management Software',
        description: 'Because Excel sheets shouldn’t be your business plan.',
        details: 'Custom CRM & dashboards, inventory and sales tracking, and tools that are easy-to-use yet hard-to-break — designed to keep your business running smoothly without the headache.',
        image: ui1,
    },
    {
        title: 'High-End Websites for Startups',
        description: 'First impressions matter — online too.',
        details: 'We craft stunning UI with smooth UX, fully mobile-friendly designs, and conversion-focused builds that make your brand stand out from day one.',
        image: ui2,
    },
    {
        title: 'Social Media Content & Strategy',
        description: 'We post, they like, you grow.',
        details: 'From branded post designs to content calendars and campaign ideas that don’t flop, we make sure your brand stays fresh, relevant, and impossible to ignore.',
        image: ui3,
    },
    {
        title: 'Creative Content & Branding',
        description: 'A brand identity that’s unforgettable.',
        details: 'From logo creation to complete visual storytelling, we shape how your audience sees and remembers you, ensuring your brand speaks with clarity and personality.',
        image: ui4,
    },
];

// --- Custom Hook for Parallax ---
const useParallax = (value) => {
    return useSpring(value, { stiffness: 80, damping: 40, restDelta: 0.001, mass: 0.5 });
};

// --- Accordion Item Component (No changes needed here) ---
const AccordionItem = ({ item, isOpen, onHover, isMobile }) => {
    const { title, description, details, image } = item;
    return (
        <div className="border-b border-gray-200/20 py-5 cursor-pointer" onMouseEnter={onHover}>
            <div className="w-full flex justify-between items-start text-left">
                <div>
                    <h3 className="text-4xl md:text-5xl font-semibold font-[tenali] text-white">{title}</h3>
                    <p className="text-gray-400 -translate-y-2 mt-1">{description}</p>
                </div>
                <motion.span className="mt-2" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </motion.span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: 'spring', duration: 0.6, bounce: 0.3 }} className="overflow-hidden">
                        <div className="mt-4 pr-4 flex flex-col gap-4">
                            <p className="text-gray-300 flex-1">{details}</p>
                            {isMobile && (<img src={image} alt={title} className="rounded-md w-full h-32 object-cover mt-2" />)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Component ---
function WhatYouGet() {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const parallaxX = useParallax(mouseX);
    const parallaxY = useParallax(mouseY);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);
    };
    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id='service' className="relative min-h-screen w-screen bg-black text-white font-sans overflow-hidden">
            {/* Restored SVG Waves */}
            <img src={twave} className='absolute top-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />

            <div className="relative container mx-auto px-6 py-24 md:py-32 flex items-center min-h-screen z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">

                    {/* Left Column (Text + Image) */}
                    <div className="hidden lg:flex flex-col justify-center h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        {/* Restored Text for Desktop */}
                        <div className="mb-8">
                            <h2 className="text-6xl md:text-7xl font-extrabold font-[tenali] tracking-tight">WHAT YOU GET</h2>
                            <p className="mt-4 text-lg -translate-y-5 text-gray-300">All things design, we got you covered.</p>
                        </div>

                        {/* Parallax Image Container */}
                        <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-2xl" style={{ perspective: '1000px' }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={hoveredIndex}
                                    src={services[hoveredIndex].image}
                                    alt={services[hoveredIndex].title}
                                    initial={{ opacity: 0, scale: 1.1, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
                                    exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2, ease: 'easeIn' } }}
                                    style={{ x: parallaxX, y: parallaxY, transformStyle: 'preserve-3d' }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column (Accordion) */}
                    <div className="flex flex-col justify-center">
                        {/* Title for Mobile */}
                        <div className="lg:hidden mb-8">
                            <h2 className="text-6xl text-center font-extrabold font-[tenali] tracking-tight">WHAT YOU GET</h2>
                            <p className="mt-2 text-center text-lg -translate-y-5 text-gray-300">All things design, we got you covered.</p>
                        </div>

                        {services.map((service, index) => (
                            <AccordionItem key={index} item={service} isOpen={hoveredIndex === index} onHover={() => setHoveredIndex(index)} isMobile={isMobile} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full bg-black h-screen absolute top-0'>
                <Aurora
                    colorStops={["#7700ff", "#7700ff", "#7700ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className='w-full h-screen rotate-180 absolute bottom-0'>
                <Aurora
                    colorStops={["#7700ff", "#7700ff", "#7700ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            {/* Restored SVG Waves */}
            <img src={bwave} className='absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />
        </div>
    );
}

export default WhatYouGet;
