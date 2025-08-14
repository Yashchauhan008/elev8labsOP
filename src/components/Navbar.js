import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Make sure your logo is here

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Works", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const companyName = "Elev8labs";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar for Desktop */}
      <nav className="fixed top-0 left-0 w-full z-[100000] flex justify-center">
        <div className="container max-w-5xl m-5 px-4 py-3 flex justify-between items-center bg-slate-800/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          {/* Left Side: Logo and Company Name */}
          <a href="#home" className="flex items-center space-x-3 pl-2">
            <img src={logo} className="h-8" alt={`${companyName} Logo`} />
            <span className="self-center translate-y-[6px] text-4xl font-normal font-[tenali] whitespace-nowrap text-white">
              {companyName}
            </span>
          </a>

          {/* Right Side: Desktop Navigation Links with Floating Overlay */}
          <div
            className="hidden md:flex items-center relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-slate-300 transition-colors duration-300"
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                {hoveredLink === link.name && (
                  <motion.div
                    className="absolute inset-0 bg-slate-700/50 rounded-lg z-[10000]"
                    layoutId="hover-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-[10000]">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Background Blur */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] md:hidden">
          {/* Background Blur Layer */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/60 transition-opacity duration-1000"
            onClick={toggleMenu} // closes menu on background click
          />

          {/* Floating Menu */}
          <div className="absolute top-24 left-0 w-full transition-transform duration-1000 ease-in-out">
            <div className="mx-4 flex flex-col gap-3 relative z-[10000]">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full py-4 text-center text-slate-200 hover:text-white hover:bg-white/15 transition-all duration-300"
                  style={{
                    animation: `fadeIn 0.3s ease-out ${i * 0.07}s both`,
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Fade-in animation keyframes */}
          <style jsx>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(-10px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}




// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; 
// import logo from '../assets/logo.png';

// const navLinks = [
//   { name: "About", href: "#about" },
//   { name: "Portfolio", href: "#portfolio" },
//   { name: "Contact", href: "#contact" },
// ];


// export default function Navbar(){
//   <div className='sticky z-50'>
//     hell
//   </div>
// }