import Aurora from "../ui/Aurora";
import LightRays from "../ui/LightRays";

function WhatWeDo() {

    return (
        <div className="relative h-screen w-full bg-black">
            <div style={{ width: '100%', height: '100vh', position: 'absolute' }} className="top-0">
                {/* <LightRays
                    raysOrigin="top-center"
                    raysColor="#7700FF"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                /> */}
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
        </div>
    );
}

export default WhatWeDo