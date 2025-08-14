

'use client'; // Required for Framer Motion and other client-side hooks

import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { ReactLenis } from 'lenis/react'; // For smooth scrolling

// --- Your icons and processSteps data (unchanged) ---
const processIcons = {
    listen: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10.2c0-.9.4-1.8 1-2.5.3-.3.5-.6.6-.9.5-1.1 1.6-1.8 2.9-1.8h1.1c1.3 0 2.5.9 2.9 2.1.1.3.3.6.6.8.7.5 1.4.5 2.1 0 .3-.2.5-.5.6-.8 1-2.2 3.8-2.7 5.9-1.2.9.6 1.4 1.5 1.4 2.6 0 1-.4 2-1.1 2.8-.3.3-.5.6-.6.9-.5 1.1-1.6 1.8-2.9 1.8h-1.1c-1.3 0-2.5-.9-2.9-2.1-.1-.3-.3-.6-.6-.8a2 2 0 0 0-2.1 0c-.3.2-.5.5-.6.8-1 2.2-3.8 2.7-5.9 1.2-.9-.6-1.4-1.5-1.4-2.6Z"/><path d="M10.4 12c-.3-1.2-1.4-2-2.7-2H6.6c-1.3 0-2.4.8-2.7 2"/></svg>,
    craft: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10.4 12.6-1.8 1.8"/><path d="m11.8 11.2 1.8 1.8"/><path d="m10.4 15.4 1.8-1.8"/><path d="m11.8 16.8-1.8-1.8"/></svg>,
    launch: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.65-.9.73-2.34.05-3.18-1.26-1.5-5-2-5-2s.5 3.74 2 5c.84.71 2.3.7 3.11.05-.9.65-2.34.73-3.18.05z"/><path d="M12 12 7 7"/></svg>,
    grow: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8a2 2 0 0 1 0 2.8l-6 6-4-4-1.4 1.4"/><path d="M14 8h5v5"/></svg>,
};

// --- MODIFIED: Added a 'color' property for the glow ---
const processSteps = [
    { title: "Listen & Learn", description: "We hear your goals, dreams, and even those “crazy” ideas.", icon: processIcons.listen, color: "bg-purple-900" },
    { title: "Create & Craft", description: "Designs, code, and content come together like a perfect playlist.", icon: processIcons.craft, color: "bg-purple-900" },
    { title: "Launch & Glow", description: "Your brand goes live looking sharp and ready to impress.", icon: processIcons.launch, color: "bg-purple-900" },
    { title: "Grow & Adapt", description: "We track, tweak, and keep you ahead of the curve.", icon: processIcons.grow, color: "bg-purple-900" }
];

// --- The Card Component for the Stacking Effect ---
const StepCard = ({ i, step, progress, range, targetScale } ) => {
    const container = useRef(null);
    // Destructure the new 'color' prop
    const { title, description, icon, color } = step;
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-20">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="relative -top-[12.5%] flex flex-col items-center justify-center h-[500px] w-[800px] max-w-[90vw] origin-top"
            >
                {/* --- MODIFIED: Main card container is now relative for z-indexing --- */}
                <div className="relative w-full h-full p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                    
                    {/* --- ADDED: The Glow Effect --- */}
                    {/* This div is positioned behind the content and provides the colored, blurred glow */}
                    <div className={`absolute inset-0 w-full h-full rounded-full blur-3xl opacity-20 ${color} -z-20`}></div>

                    <div className="relative w-20 h-20 mx-auto mb-8 bg-gray-900 border border-white/10 rounded-2xl flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="text-6xl font-bold font-[tenali] text-white">{title}</h3>
                    <p className="text-lg text-gray-300 mt-4 max-w-md mx-auto">{description}</p>
                    <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 -z-10">
                        0{i + 1}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- The Main OurProcess Component (using your layout changes) ---
const OurProcess = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <ReactLenis root>
            <main ref={container} className="relative bg-black text-white">
                <div className="sticky top-28 h-screen text-center px-6 z-10 pointer-events-none">
                    <h2 className="text-5xl md:text-7xl font-[tenali] translate-y-8 font-extrabold tracking-tight">
                        How the Magic Happens
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Scroll down to see our process in action.
                    </p>
                </div>

                {processSteps.map((step, i) => {
                    const targetScale = 1 - (processSteps.length - i) * 0.05;
                    return (
                        <StepCard
                            key={`p_${i}`}
                            i={i}
                            step={step}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </main>
        </ReactLenis>
    );
};

export default OurProcess;
