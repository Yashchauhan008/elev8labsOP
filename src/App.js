import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; 
import About from './components/About';
import WhatYouGet from './components/WhatYouGet';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import CallToAction from './components/CallToAction';
import Testimonial from './components/Testimonial';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <main className='bg-gray-300'>
      <Navbar />
      <Hero />
       <About />
       <WhatYouGet/>
       <WhyChooseUs/>
       <PortfolioSection/>
       <Process/>
       <Testimonial/>
       <CallToAction/>
    </main>
  );
}

export default App;
