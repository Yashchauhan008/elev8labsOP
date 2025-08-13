import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; 
import About from './components/About';
import WhatYouGet from './components/WhatYouGet';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';

function App() {
  return (
    <main className='bg-gray-300'>
      <Navbar />
      <Hero />
       <About />
       <WhatYouGet/>
       <WhyChooseUs/>
       <Process/>
    </main>
  );
}

export default App;
