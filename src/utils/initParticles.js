import { tsParticles, loadFull } from "tsparticles";

export async function initParticles() {
  await loadFull(tsParticles);
  tsParticles.load("particles-js", {
    background: {
      color: { value: "#000000" },
    },
    particles: {
      number: { value: 150 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  });
}
