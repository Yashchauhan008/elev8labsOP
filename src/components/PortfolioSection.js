// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Aurora from '../ui/Aurora'; // Make sure this path is correct
// import twave from "../assets/top-wave.svg"; // Make sure this path is correct
// import bwave from "../assets/bottom-wave.svg"; // Make sure this path is correct

// // --- Full Data for Projects ---
// const projects = [
//     {
//         id: 1,
//         title: "Project Alpha",
//         category: "Web Design & Development",
//         description: "A complete overhaul of a leading e-commerce platform, focusing on a seamless user experience and a 40% increase in conversion rates. We handled everything from UX research to the final deployment on a scalable cloud infrastructure.",
//         images: [
//             "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//             "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//             "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         ],
//         glowColor: "shadow-blue-500/50",
//         speed: 0.02
//     },
//     {
//         id: 2,
//         title: "Brand Beta",
//         category: "Branding & Identity",
//         description: "We crafted a new brand identity from the ground up for a disruptive tech startup. This included logo design, a comprehensive brand guide, and marketing collateral that helped them secure their first round of funding.",
//         images: [
//             "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//             "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         ],
//         glowColor: "shadow-purple-500/50",
//         speed: 0.04
//     },
//     {
//         id: 3,
//         title: "App Gamma",
//         category: "Mobile App Development",
//         description: "An intuitive mobile application for iOS and Android that helps users track their fitness goals. The app features real-time data synchronization, social sharing, and a clean, motivating user interface.",
//         images: [
//             "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//             "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//             "https://images.unsplash.com/photo-1525923838299-23124b655649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//         ],
//         glowColor: "shadow-pink-500/50",
//         speed: 0.03
//     },
// ];

// // --- Modal Component with Spring Animation ---
// const ProjectModal = ({ project, onClose } ) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const handleNext = () => setCurrentImageIndex((p) => (p + 1) % project.images.length);
//     const handlePrev = () => setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);

//     // Spring transition for the modal
//     const spring = { type: "spring", stiffness: 200, damping: 25 };

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }} // Backdrop fade
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             onClick={onClose} // Close when clicking the backdrop
//         >
//             <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={spring} // Apply spring animation here
//                 className="relative w-full max-w-4xl bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden"
//                 onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//             >
//                 {/* Image Carousel */}
//                 <div className="relative h-96">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={currentImageIndex}
//                             src={project.images[currentImageIndex]}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -50 }}
//                             transition={{ duration: 0.3, ease: 'easeInOut' }}
//                             className="absolute inset-0 w-full h-full object-cover"
//                         />
//                     </AnimatePresence>
//                     {project.images.length > 1 && (
//                         <>
//                             <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors">
//                                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//                             </button>
//                             <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors">
//                                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//                             </button>
//                         </>
//                     )}
//                 </div>
//                 {/* Content */}
//                 <div className="p-8">
//                     <h3 className="text-3xl font-bold text-white">{project.title}</h3>
//                     <p className="text-lg text-gray-300 mt-4">{project.description}</p>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// // --- Main Portfolio Section Component ---
// const PortfolioSection = () => {
//     const [selectedProject, setSelectedProject] = useState(null);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);

//     // Effect for tracking mouse position
//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             if (containerRef.current) {
//                 const rect = containerRef.current.getBoundingClientRect();
//                 const x = event.clientX - (rect.left + rect.width / 2);
//                 const y = event.clientY - (rect.top + rect.height / 2);
//                 setMousePosition({ x, y });
//             }
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     return (
//         <section ref={containerRef} className="relative h-[100vh] bg-black text-white font-sans py-24 md:py-32 overflow-hidden">
//             <img src={twave} className='absolute top-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />
//             <div className='w-full h-screen absolute top-0 z-0'>
//                 <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.0} speed={0.5} />
//             </div>
//             <div className='w-full h-screen rotate-180 absolute bottom-0'>
//                 <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.0} speed={0.5} />
//             </div>
//             <div className="container mx-auto px-6 translate-y-16">
//                 <div className="relative text-center max-w-3xl mx-auto mb-16 z-[100]">
//                     <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Featured Work</h2>
//                     <p className="mt-4 text-lg text-gray-400">We combine strategy, design, and technology to create digital experiences that people love.</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project) => {
//                         const moveX = mousePosition.x * project.speed;
//                         const moveY = mousePosition.y * project.speed;

//                         return (
//                             <motion.div
//                                 key={project.id}
//                                 className="relative rounded-2xl overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10"
//                                 onClick={() => setSelectedProject(project)} // Reverted to onClick
//                                 layoutId={`card-${project.id}`}
//                                 whileHover={{ y: -8 }}
//                                 style={{ x: moveX, y: moveY }}
//                                 transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring for parallax and hover
//                             >
//                                 <div className="p-2">
//                                     <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
//                                 </div>
//                                 <div className="p-6 pt-2">
//                                     <p className="text-sm text-purple-400 font-semibold">{project.category}</p>
//                                     <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
//                                 </div>
//                                 <div className={`absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl transition-all duration-300 ${project.glowColor} group-hover:shadow-2xl`}></div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>

//             <AnimatePresence>
//                 {selectedProject && (
//                     <ProjectModal
//                         project={selectedProject}
//                         onClose={() => setSelectedProject(null)}
//                     />
//                 )}
//             </AnimatePresence>

//             <img src={bwave} className='absolute bottom-0 left-0 w-full object-cover z-10 pointer-events-none' alt="" />
//         </section>
//     );
// };

// export default PortfolioSection;


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../ui/Aurora'; // Make sure this path is correct
import twave from "../assets/top-wave.svg"; // Make sure this path is correct
import bwave from "../assets/bottom-wave.svg"; // Make sure this path is correct

// --- Full Data for Projects (No Changes) ---
const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Web Design & Development",
        description: "A complete overhaul of a leading e-commerce platform, focusing on a seamless user experience and a 40% increase in conversion rates. We handled everything from UX research to the final deployment on a scalable cloud infrastructure.",
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        ],
        glowColor: "shadow-blue-500/50",
        speed: 0.02
    },
    {
        id: 2,
        title: "Brand Beta",
        category: "Branding & Identity",
        description: "We crafted a new brand identity from the ground up for a disruptive tech startup. This included logo design, a comprehensive brand guide, and marketing collateral that helped them secure their first round of funding.",
        images: [
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        ],
        glowColor: "shadow-purple-500/50",
        speed: 0.04
    },
    {
        id: 3,
        title: "App Gamma",
        category: "Mobile App Development",
        description: "An intuitive mobile application for iOS and Android that helps users track their fitness goals. The app features real-time data synchronization, social sharing, and a clean, motivating user interface.",
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            "https://images.unsplash.com/photo-1525923838299-23124b655649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
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
            <div className='w-full h-screen absolute top-0 z-0'>
                <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.0} speed={0.5} />
            </div>
            <div className='w-full h-screen rotate-180 absolute bottom-0'>
                <Aurora colorStops={["#7700ff", "#7700ff", "#7700ff"]} blend={0.5} amplitude={1.0} speed={0.5} />
            </div>
            <div className="container mx-auto px-6 pb-32 translate-y-16">
                <div className="relative text-center max-w-3xl mx-auto mb-16 z-[100]">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Featured Work</h2>
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
                                    <p className="text-sm text-purple-400 font-semibold">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
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
