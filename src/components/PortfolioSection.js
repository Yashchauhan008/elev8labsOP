import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../ui/Aurora'; // Make sure this path is correct
import twave from "../assets/top-wave.svg"; // Make sure this path is correct
import bwave from "../assets/bottom-wave.svg"; // Make sure this path is correct

import vapor1 from '../assets/projects/vapor1.png'
import vapor2 from '../assets/projects/vapor2.png'
import vapor3 from '../assets/projects/vapor3.png'

import shanvi1 from '../assets/projects/proj2.webp'

import resto1 from '../assets/projects/proj3.webp'

// --- Full Data for Projects (No Changes) ---
const projects = [
    {
        id: 1,
        title: "Shanvi Enterprise",
        category: "Business Management Software",
        description: "Developed a highly efficient inventory management solution for one of India’s leading pallet exporters. The system streamlines stock tracking, order management, and reporting, ensuring faster operations and better decision-making.",
        images: [
            shanvi1
        ],
        glowColor: "shadow-blue-500/50",
        speed: 0.02
    },
    {
        id: 2,
        title: "Vapor UI",
        category: "UI Component Library",
        description: "A custom-built UI library developed with Framer Motion and GSAP, delivering high-performance, animation-rich components for modern web applications. Designed for developers seeking visually engaging and fluid user experiences.",
        images: [
            vapor1,
            vapor2,
            vapor3,
        ],
        glowColor: "shadow-purple-500/50",
        speed: 0.04
    },
    {
        id: 3,
        title: "Imperial Restaurants",
        category: "Restaurant Management Platform",
        description: "Currently developing a table booking platform tailored for Imperial Restaurants. The solution will offer real-time reservation management, an intuitive booking interface, and integrated customer engagement tools.",
        images: [
            resto1
        ],
        glowColor: "shadow-pink-500/50",
        speed: 0.03
    },
];


// --- MODIFIED Modal Component ---
const ProjectModal = ({ project, onClose } ) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => setCurrentImageIndex((p) => (p + 1) % project.images.length);
    const handlePrev = () => setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);
    const handleDotClick = (index) => setCurrentImageIndex(index);

    const spring = { type: "spring", stiffness: 200, damping: 25 };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={spring}
                // --- Glassmorphic Styling Applied ---
                className="relative w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image Carousel */}
                <div className="relative h-96 w-full overflow-hidden rounded-t-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            initial={{ opacity: 0.5, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0.5, x: -50 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* --- Improved Navigation Buttons --- */}
                    {project.images.length > 1 && (
                        <>
                            <motion.button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4 )' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </motion.button>
                        </>
                     )}
                </div>

                {/* --- Carousel Dots --- */}
                {project.images.length > 1 && (
                    <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentImageIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
                            />
                        ))}
                    </div>
                )}

                {/* Content Area */}
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <p className="text-lg text-gray-300 mt-2">{project.description}</p>
                </div>

                {/* Explicit Close Button */}
                <motion.button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90, backgroundColor: 'rgba(0,0,0,0.4)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </motion.button>
            </motion.div>
        </motion.div>
     );
};

// --- Main Portfolio Section Component (No Changes) ---
const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
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
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id='work' ref={containerRef} className="relative h-full bg-black text-white font-sans py-24 md:py-32 overflow-hidden">
            <img src={twave} className='absolute top-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />
            <div className='w-full h-screen bg-black absolute top-0 z-0'>
                <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.5} speed={0.5} />
            </div>
            <div className='w-full h-screen rotate-180 absolute bottom-0'>
                <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.5} speed={0.5} />
            </div>
            <div className="container mx-auto px-6 pb-32 translate-y-16">
                <div className="relative text-center max-w-3xl mx-auto mb-16 z-[100]">
                    <h2 className="text-5xl md:text-7xl translate-y-6 font-extrabold font-[tenali] tracking-tight">Our Featured Work</h2>
                    <p className="mt-4 text-lg text-gray-400">We combine strategy, design, and technology to create digital experiences that people love.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const moveX = mousePosition.x * project.speed;
                        const moveY = mousePosition.y * project.speed;

                        return (
                            <motion.div
                                key={project.id}
                                className="relative rounded-[50px] overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10"
                                onClick={() => setSelectedProject(project)}
                                layoutId={`card-${project.id}`}
                                whileHover={{ y: -8 }}
                                style={{ x: moveX, y: moveY }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="p-2">
                                    <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover rounded-[40px]" />
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-sm text-purple-400 font-semibold ont-[tenali] translate-y-1">{project.category}</p>
                                    <h3 className="text-3xl font-bold text-white mt-1 font-[tenali]">{project.title}</h3>
                                </div>
                                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-[50px] transition-all duration-300 ${project.glowColor} group-hover:shadow-2xl`}></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <img src={bwave} className='absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />
        </section>
    );
};

export default PortfolioSection;
