import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'; 
import About from './components/About';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
       <About />
    </main>
  );
}

export default App;
