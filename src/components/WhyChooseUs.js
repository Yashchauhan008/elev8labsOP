// import React from 'react';
// import { motion } from 'framer-motion';
// const getRandomRotation = () => `rotate-${Math.floor(Math.random() * 11) - 5}`; // Generates a class like rotate-3, rotate--5, etc.

// const icons = {
//     lightbulb: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 16.05A6.49 6.49 0 0 1 9 17.5a6.5 6.5 0 0 1-6.41-7.16 6.5 6.5 0 0 1 6.59-5.34 6.5 6.5 0 0 1 6.32 7.45Z"/><path d="M9 17.5V22"/><path d="M12 13.5a3 3 0 0 0-3-3"/><path d="M12 6.5A3 3 0 0 1 9 9.5"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 22a2.5 2.5 0 0 1-2.5-2.5V17.5h5v2A2.5 2.5 0 0 1 12 22Z"/></svg>,
//     scaling: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m12 12 7 7m0-5v5h-5"/></svg>,
//     language: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h3l-1 4h3"/><path d="M13 5h3l-1 4h3"/><path d="M12 20a10 10 0 1 0-10-10c0 2.2 1.1 4.3 2.9 5.6"/><path d="M15.3 13.3a10 10 0 0 1-1.8 4.2"/><path d="M19.7 17.5a10 10 0 0 0-2.8-4.2"/></svg>,
//     team: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
// };

// // --- Updated Features Data ---
// const features = [
//     {
//         title: "Fresh Ideas",
//         description: "We deliver fresh, innovative ideas, not copy-paste templates.",
//         icon: icons.lightbulb,
//         color: "bg-blue-500",
//         glowColor: "shadow-blue-500/50",
//     },
//     {
//         title: "Tech That Scales",
//         description: "We build with robust technology that grows and scales with your business.",
//         icon: icons.scaling,
//         color: "bg-purple-500",
//         glowColor: "shadow-purple-500/50",
//     },
//     {
//         title: "Designs That Speak",
//         description: "Our designs aren't just pretty; they speak your brand's language fluently.",
//         icon: icons.language,
//         color: "bg-lime-500",
//         glowColor: "shadow-lime-500/50",
//     },
//     {
//         title: "A Team That Listens",
//         description: "We are a young, passionate team that actually listens to your needs.",
//         icon: icons.team,
//         color: "bg-pink-500",
//         glowColor: "shadow-pink-500/50",
//     }
// ];

// // --- Feature Card Component ---
// const FeatureCard = ({ feature, rotationClass }) => {
//     const { title, description, icon, color, glowColor } = feature;

//     return (
//         <motion.div
//             className={`relative p-6 rounded-2xl w-56 h-64 md:w-64 md:h-72 flex flex-col ${rotationClass} backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg`}
//             whileHover={{ y: -10, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300 } }}
//         >
//             {/* Background Glow */}
//             <div className={`absolute -top-4 -left-4 w-20 h-20 ${color} rounded-full blur-3xl opacity-50`}></div>

//             {/* Icon */}
//             <div className={`w-14 h-14 rounded-lg ${color} ${glowColor} flex items-center justify-center shadow-lg mb-4`}>
//                 <div className="text-white w-8 h-8">{icon}</div>
//             </div>

//             {/* Content */}
//             <h3 className="text-3xl translate-y-2 font-bold font-[tenali] text-white mb-2">{title}</h3>
//             <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
//         </motion.div>
//     );
// };

// // --- Main Section Component ---
// const WhyChooseUs = () => {


//     // Generate random rotations once per render
//     const rotations = React.useMemo(() => features.map(() => getRandomRotation()), []);

//     return (
//         <section className="relative h-full bg-black text-white font-sans py-20 md:py-32 overflow-hidden">
//             <div className="container mx-auto px-6 relative z-10">

//                 {/* Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-5xl md:text-7xl font-extrabold font-[tenali] tracking-tight mb-4">
//                         Why Settle for Ordinary?
//                     </h2>
//                     <div className="text-lg text-gray-300 space-y-2">
//                         <p>There are agencies that deliver. There are agencies that surprise.</p>
//                         <p className="font-semibold text-white">We do both — and we do it with coffee-fueled enthusiasm, sharp strategy, and a healthy dose of creativity.</p>
//                     </div>
//                 </div>

//                 {/* Feature Cards */}
//                 <div className="flex flex-wrap justify-center items-center gap-8 md:gap-4 lg:gap-8">
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} feature={feature} rotationClass={rotations[index]} />
//                     ))}
//                 </div>
//             </div>

//             {/* Decorative Background Shapes */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
//                 <div className="w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Your existing icons and features data ---
const icons = {
    lightbulb: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 16.05A6.49 6.49 0 0 1 9 17.5a6.5 6.5 0 0 1-6.41-7.16 6.5 6.5 0 0 1 6.59-5.34 6.5 6.5 0 0 1 6.32 7.45Z" /><path d="M9 17.5V22" /><path d="M12 13.5a3 3 0 0 0-3-3" /><path d="M12 6.5A3 3 0 0 1 9 9.5" /><path d="M12 2v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="M2 12h2" /><path d="m19.07 4.93-1.41 1.41" /><path d="M12 22a2.5 2.5 0 0 1-2.5-2.5V17.5h5v2A2.5 2.5 0 0 1 12 22Z" /></svg>,
    scaling: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="m12 12 7 7m0-5v5h-5" /></svg>,
    language: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h3l-1 4h3" /><path d="M13 5h3l-1 4h3" /><path d="M12 20a10 10 0 1 0-10-10c0 2.2 1.1 4.3 2.9 5.6" /><path d="M15.3 13.3a10 10 0 0 1-1.8 4.2" /><path d="M19.7 17.5a10 10 0 0 0-2.8-4.2" /></svg>,
    team: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    // app: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
};
const features = [
    { title: "Fresh Ideas", description: "We deliver fresh, innovative ideas, not copy-paste templates.", icon: icons.lightbulb, color: "bg-blue-500", glowColor: "shadow-blue-500/50" },
    { title: "Tech That Scales", description: "We build with robust technology that grows and scales with your business.", icon: icons.scaling, color: "bg-purple-500", glowColor: "shadow-purple-500/50" },
    { title: "Designs That Speak", description: "Our designs aren't just pretty; they speak your brand's language fluently.", icon: icons.language, color: "bg-lime-500", glowColor: "shadow-lime-500/50" },
    { title: "A Team That Listens", description: "We are a young, passionate team that actually listens to your needs.", icon: icons.team, color: "bg-pink-500", glowColor: "shadow-pink-500/50" },
    // { title: "App Development", description: "From concept to launch, we build intuitive and powerful mobile apps for iOS and Android.", icon: icons.app, color: "bg-green-500", glowColor: "shadow-green-500/50" }
];

const getRandomRotation = ( ) => `rotate-${Math.floor(Math.random() * 7) - 3}`;

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const FeatureCard = ({ feature, rotationClass }) => {
    const { title, description, icon, color, glowColor } = feature;
    return (
        <motion.div
            className={`relative p-6 rounded-2xl w-64 h-72 flex-shrink-0 ${rotationClass} backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg`}
            whileHover={{ y: -10, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300 } }}
        >
            <div className={`absolute -top-4 -left-4 w-20 h-20 ${color} rounded-full blur-3xl opacity-50`}></div>
            <div className={`w-14 h-14 rounded-lg ${color} ${glowColor} flex items-center justify-center shadow-lg mb-4`}>
                <div className="text-white w-8 h-8">{icon}</div>
            </div>
            <h3 className="text-3xl translate-y-2 font-bold font-[tenali] text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    const isMobile = useResponsive();
    const [currentIndex, setCurrentIndex] = useState(0);
    const rotations = useMemo(() => [...features, ...features].map(() => getRandomRotation()), []);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isMobile) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % features.length);
            }, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isMobile]);

    const resetTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 5000);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
        resetTimer();
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
        resetTimer();
    };

    return (
        <section className="relative bg-black text-white font-sans py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[tenali] tracking-tight mb-4">
                        Why Settle for Ordinary?
                    </h2>
                    <div className="text-lg text-gray-300 space-y-2">
                        <p>There are agencies that deliver. There are agencies that surprise.</p>
                        <p className="font-semibold text-white">We do both — and we do it with coffee-fueled enthusiasm, sharp strategy, and a healthy dose of creativity.</p>
                    </div>
                </div>

                {isMobile ? (
                    <div className="relative h-80 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, scale: 0.9, rotate: 10 }}
                                animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, x: -50, scale: 0.9, rotate: -10 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="absolute"
                            >
                                <FeatureCard feature={features[currentIndex]} rotationClass="rotate-0" />
                            </motion.div>
                        </AnimatePresence>
                        <div className="absolute w-full flex justify-between px-4">
                            <button onClick={handlePrev} className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button onClick={handleNext} className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                 ) : (
                    // --- Desktop Marquee Animation ---
                    <div className="relative w-full py-12 overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: ['0%', '-100%'] }}
                            transition={{
                                ease: 'linear',
                                duration: 25, // Adjust duration to control speed
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            whileHover={{ paused: true }}
                        >
                            {/* Render the list of cards twice for a seamless loop */}
                            {[...features, ...features].map((feature, index) => (
                                <FeatureCard key={index} feature={feature} rotationClass={rotations[index]} />
                            ))}
                        </motion.div>
                        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                    </div>
                )}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
