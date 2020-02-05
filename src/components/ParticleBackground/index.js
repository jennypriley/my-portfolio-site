import React from "react"
import Particles from "react-particles-js"

const ParticleBackground = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 2000,
              },
            },

            color: {
              value: ["#C55ADA", "#E89C0F", "#5ADA6A"],
            },

            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "",
              },

              polygon: {
                enable: true,
                nb_sides: 3,
              },
            },

            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.05,
                opacity_min: 1,
                sync: true,
              },
            },

            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                size_min: 0.5,
                sync: false,
              },
            },

            line_linked: {
              enable: false,
            },

            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "in",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 1200,
                rotateY: 1200,
              },
            },
          },

          modes: {
            grab: {
              distance: 300,
            },

            bubble: {
              distance: 100,
              size: 10,
              duration: 2,
              opacity: 1,
              speed: 1,
            },

            repulse: {
              distance: 100,
              duration: 0.4,
            },

            push: {
              particles_nb: 5,
            },

            remove: {
              particles_nb: 2,
            },
          },
          interactivity: {
            retina_detect: true,
          },
        }}
      />
    </>
  )
}

export default ParticleBackground
