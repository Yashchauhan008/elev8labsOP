import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import twave from "../assets/top-wave.svg"
import Aurora from '../ui/Aurora';
// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// import CardSwap, { Card } from "../ui/CardSwap";

// --- Your icons and processSteps data (unchanged) ---
const processIcons = {
    listen: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10.2c0-.9.4-1.8 1-2.5.3-.3.5-.6.6-.9.5-1.1 1.6-1.8 2.9-1.8h1.1c1.3 0 2.5.9 2.9 2.1.1.3.3.6.6.8.7.5 1.4.5 2.1 0 .3-.2.5-.5.6-.8 1-2.2 3.8-2.7 5.9-1.2.9.6 1.4 1.5 1.4 2.6 0 1-.4 2-1.1 2.8-.3.3-.5.6-.6.9-.5 1.1-1.6 1.8-2.9 1.8h-1.1c-1.3 0-2.5-.9-2.9-2.1-.1-.3-.3-.6-.6-.8a2 2 0 0 0-2.1 0c-.3.2-.5.5-.6.8-1 2.2-3.8 2.7-5.9 1.2-.9-.6-1.4-1.5-1.4-2.6Z"/><path d="M10.4 12c-.3-1.2-1.4-2-2.7-2H6.6c-1.3 0-2.4.8-2.7 2"/></svg>,
    craft: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10.4 12.6-1.8 1.8"/><path d="m11.8 11.2 1.8 1.8"/><path d="m10.4 15.4 1.8-1.8"/><path d="m11.8 16.8-1.8-1.8"/></svg>,
    launch: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.65-.9.73-2.34.05-3.18-1.26-1.5-5-2-5-2s.5 3.74 2 5c.84.71 2.3.7 3.11.05-.9.65-2.34.73-3.18.05z"/><path d="M12 12 7 7"/></svg>,
    grow: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8a2 2 0 0 1 0 2.8l-6 6-4-4-1.4 1.4"/><path d="M14 8h5v5"/></svg>,
};
const processSteps = [
    { title: "Listen & Learn", description: "We hear your goals, dreams, and even those “crazy” ideas.", icon: processIcons.listen, color: "from-blue-500" },
    { title: "Create & Craft", description: "Designs, code, and content come together like a perfect playlist.", icon: processIcons.craft, color: "from-purple-500" },
    { title: "Launch & Glow", description: "Your brand goes live looking sharp and ready to impress.", icon: processIcons.launch, color: "from-pink-500" },
    { title: "Grow & Adapt", description: "We track, tweak, and keep you ahead of the curve.", icon: processIcons.grow, color: "from-lime-500" }
];

const StepCard = ({ step, index } ) => {
    const { title, description, icon, color } = step;
    return (
        // Added a class for easier selection
        <div className={`process-card absolute inset-0 h-full w-full flex items-start justify-center`}>
            <div className="relative w-full max-w-2xl h-[450px] p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                {/* The blur effect was causing performance issues and was removed for this example, but can be re-added */}
                {/* <div className={`absolute -inset-24 w-[calc(100%+12rem)] h-[calc(100%+12rem)] rounded-full blur-3xl opacity-10 ${color.replace('from-', 'bg-')}`}></div> */}
                <div className="relative w-20 h-20 mx-auto mb-8 bg-gray-900 border border-white/10 rounded-2xl flex items-center justify-center">
                    {icon}
                </div>
                <h3 className="text-4xl font-bold text-white">{title}</h3>
                <p className="text-lg text-gray-300 mt-4 max-w-md mx-auto">{description}</p>
                <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 -z-10">
                    0{index + 1}
                </div>
            </div>
        </div>
    );
};

const OurProcess = () => {
    const component = useRef(null);
    const cardsContainer = useRef(null); // Ref for the container of the cards

    useEffect(() => {
        // A good practice is to use a context for GSAP animations to ensure proper cleanup
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".process-card", cardsContainer.current);

            // Set initial properties for all cards except the first one
            gsap.set(cards.slice(1), { yPercent: 105 });

            // Calculate the total scroll distance needed
            const totalScroll = (cards.length - 1) * window.innerHeight;

            // Create the main timeline
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: `+=${totalScroll}`, // End after the calculated scroll distance
                }
            });

            // Animate each card to stack on top of the previous one
            cards.slice(1).forEach((card, index) => {
                timeline.to(card, {
                    yPercent: 0, // Animate to its final position
                    ease: "none",
                }, `+=${index * 0.25}`); // Stagger the start of each animation
            });

        }, component); // Scope the context to the main component ref

        // Cleanup function to kill animations and ScrollTriggers on component unmount
        return () => ctx.revert();
    }, []);

    return (
        <section ref={component} className="relative bg-black text-white font-sans">
            {/* <img src={twave} className='absolute top-0 w-full z-[100]'/> */}
            <div className="container mx-auto px-6 text-center py-20 md:py-32">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    How the Magic Happens
                </h2>
                <p className="mt-4 text-lg text-gray-400">Scroll down to see our process in action.</p>
            </div>

            {/* The container for the cards now has a ref */}
            <div ref={cardsContainer} className="relative h-screen w-full">
                {processSteps.map((step, index) => (
                    <StepCard key={index} step={step} index={index} />
                ))}
            </div>
            {/* This empty div is no longer needed as ScrollTrigger's `pin` and `end` handle the scroll duration */}
        </section>
    );
};

export default OurProcess;




