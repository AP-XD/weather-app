import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 500,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          line_linked: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            speed: 0.5,
          },
          size: {
            value: 1.8,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
