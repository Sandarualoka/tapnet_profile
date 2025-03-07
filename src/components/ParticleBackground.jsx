import { useEffect } from "react";

const ParticleBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 100, density: { enable: true, area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: { onhover: { enable: true, mode: "repulse" } },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
                detectRetina: true,
            });
            console.log("✅ Particles.js loaded via CDN!");
        } else {
            console.error("❌ Particles.js failed to load.");
        }
    }, []);

    return <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ParticleBackground;
