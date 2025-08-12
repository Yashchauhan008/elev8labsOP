import React from 'react';
// import GradientBackground from '../ui/GradientBackground';
import Silk from '../ui/Silk';
import bwave from '../assets/bottom-wave.svg';
import HeroParallax from './HeroParallax';
// import SplitText from '../ui/SplitText';


export default function Hero() {

  // const [startSecond, setStartSecond] = useState(false);


  return (
    <section id="home" className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* <GradientBackground /> */}
      {/* <ImageTrailComponent items={imageUrls} /> */}
      <div className='absolute top-0 w-full h-full z-0'>

        <Silk
          speed={5}
          scale={1}
          color="#7700FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <HeroParallax/>
      <img src={bwave} alt='elev8logo' className='absolute bottom-0 left-0 right-0 z-20 w-full' />
    </section>
  );
}















// const imageUrls = ["https://picsum.photos/id/287/300/300",
//       "https://picsum.photos/id/1001/300/300",
//       "https://picsum.photos/id/1025/300/300",
//       "https://picsum.photos/id/1026/300/300",
//       "https://picsum.photos/id/1027/300/300",
//       "https://picsum.photos/id/1028/300/300",];
