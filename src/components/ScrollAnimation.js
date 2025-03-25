import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({
  children,
  className = "",
  type = "fadeUp",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}) => {
  // Predefined animation variants
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.1 },
      visible: { opacity: 1, scale: 1 },
    },
    stagger: {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration,
        },
      }),
    },
    cosmic: {
      hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(8px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
    },
    pulse: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          yoyo: Infinity,
          ease: "easeInOut",
        },
      },
    },
    glitch: {
      hidden: {
        opacity: 0,
        x: 0,
        filter: "brightness(1)",
      },
      visible: {
        opacity: 1,
        x: [0, -5, 5, -5, 5, 0],
        filter: [
          "brightness(1)",
          "brightness(1.2)",
          "brightness(0.9)",
          "brightness(1.1)",
          "brightness(1)",
        ],
        transition: {
          x: {
            duration: 0.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          },
          filter: {
            duration: 0.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          },
        },
      },
    },
  };

  const selectedAnimation = animations[type] || animations.fadeUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold }}
      variants={selectedAnimation}
      custom={delay}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        // Apply a spring effect for more dynamic motion
        ...(type === "cosmic" && {
          type: "spring",
          stiffness: 50,
          damping: 10,
        }),
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
