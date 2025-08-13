import TestimonialCarousel from "../ui/TestimonialCarousel";
import twave from '../assets/top-wave.svg';
import bwave from '../assets/bottom-wave.svg';
import DotGrid from "../ui/DotGrid";
import Aurora from "../ui/Aurora";


const testimonials = [
    {
        id: 1,
        name: "Sophia Martinez",
        role: "Product Designer",
        company: "Designify",
        content:
            "This platform completely transformed our workflow. The intuitive interface paired with powerful features has increased our team productivity by 40%.",
        avatar: "S",
        color: "from-indigo-500 to-purple-600",
    },
    {
        id: 2,
        name: "Alexander Chen",
        role: "CTO",
        company: "TechNova",
        content:
            "After evaluating numerous solutions, this stands out for its exceptional attention to detail and performance. Reliable and beautifully crafted.",
        avatar: "A",
        color: "from-blue-500 to-teal-400",
    },
    {
        id: 3,
        name: "Olivia Johnson",
        role: "Marketing Director",
        company: "GlobalReach",
        content:
            "The analytics capabilities are unmatched. We've gained insights that have directly impacted our strategy and resulted in significant growth.",
        avatar: "O",
        color: "from-rose-500 to-orange-400",
    },
];

export default function Testimonial() {
    return (
        <section className="relative h-[80vh] w-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center">
            <div style={{ width: '100%', height: '80vh', position: 'absolute' }}>
                <DotGrid
                    dotSize={5}
                    gap={10}
                    baseColor="#7700ff"
                    activeColor="#7700ff"
                    proximity={120}
                    shockRadius={150}
                    shockStrength={20}
                    resistance={300}
                    returnDuration={1.0}
                />
            </div>
            <img src={twave} className="absolute top-0 w-full z-[100]" />
            {/* <div className='w-full h-screen absolute top-0'>
                <Aurora
                    colorStops={["#7700ff", "#7700ff", "#7700ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div> */}
            <div className="absolute z-[100]">
                <TestimonialCarousel testimonials={testimonials} />
            </div>
            {/* <div className='w-full h-screen rotate-180 absolute bottom-0'>
                <Aurora
                    colorStops={["#7700ff", "#7700ff", "#7700ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div> */}
            <img src={twave} className="absolute bottom-0 rotate-180 w-full" />

        </section>
    );
}