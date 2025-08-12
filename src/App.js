import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; 
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
       <About />
       <WhatWeDo/>
    </main>
  );
}

export default App;
