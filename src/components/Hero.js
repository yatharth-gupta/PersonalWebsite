import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// Enhanced background component with geometric shapes
const EnhancedBackground = () => {
  return (
    <>
      {/* Particle effect */}
      <div className="particles-container">
        {[...Array(10)].map((_, index) => (
          <div
            key={`particle-${index}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Space objects - planets and comets */}
      <div className="space-objects">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="comet comet-1"></div>
        <div className="comet comet-2"></div>
      </div>

      {/* Nebula effect */}
      <div className="nebula-effect"></div>

      {/* Floating shapes */}
      <div className="floating-shapes">
        {[...Array(5)].map((_, index) => {
          const shapes = [
            "circle",
            "triangle",
            "square",
            "pentagon",
            "hexagon",
          ];
          const shape = shapes[index % shapes.length];
          return (
            <div
              key={`shape-${index}`}
              className={`floating-shape ${shape}`}
              style={{
                left: `${index * 20 + Math.random() * 10}%`,
                top: `${Math.random() * 80}%`,
                animationDuration: `${30 + index * 10}s`,
                animationDelay: `${index * 2}s`,
                opacity: 0.15,
              }}
            ></div>
          );
        })}
      </div>

      {/* Grid lines */}
      <div className="grid-lines">
        {[...Array(5)].map((_, index) => (
          <div
            key={`h-line-${index}`}
            className="h-line"
            style={{
              top: `${(index + 1) * 20}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
        {[...Array(5)].map((_, index) => (
          <div
            key={`v-line-${index}`}
            className="v-line"
            style={{
              left: `${(index + 1) * 20}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

const Hero = () => {
  // Add state to track scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled beyond a threshold (100px)
      const scrolled = window.scrollY > 100;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Slowed down staggering
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 }, // Reduced distance
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Slowed down for smoother animation
      },
    },
  };

  // Create variants for scroll arrow animation
  const scrollArrowVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="hero" className="hero relative overflow-hidden">
      <EnhancedBackground />

      {/* Space glow effect */}
      <div className="space-glow"></div>

      {/* Removed mousePosition-based transform styles */}
      <div className="hero-background"></div>

      <div className="container relative z-10">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="avatar-container"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(109, 138, 255, 0.6)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="cosmic-avatar-border"></div>
            <div className="avatar-placeholder"></div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-glow">
            Hi, I'm{" "}
            <span className="highlight cosmic-text">Yatharth Gupta</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="typewriter cosmic-typewriter"
          >
            <TypeAnimation
              sequence={[
                "Software Engineer & Developer",
                2000,
                "Problem Solver",
                2000,
                "AI Enthusiast",
                2000,
                "Aspiring Entrepreneur",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              speed={40} // Slightly slower typing
            />
          </motion.div>

          <motion.p variants={itemVariants} className="cosmic-text-secondary">
            I build things for the web and solve complex problems with code.
          </motion.p>

          <motion.div className="hero-btns" variants={itemVariants}>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button
                className="btn cosmic-btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(109, 138, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <motion.span
                  className="btn-icon"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                className="btn cosmic-btn-outline"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.span
                  className="btn-icon"
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  ↓
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <motion.a
              href="https://github.com/yatharth-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{
                scale: 1.2,
                // color: "#6d8aff",
                boxShadow: "0 0 12px rgba(109, 138, 255, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yatharth-gupta1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{
                scale: 1.2,
                // color: "#6d8aff",
                boxShadow: "0 0 12px rgba(109, 138, 255, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:guptayatharth1@gmail.com"
              className="social-icon"
              whileHover={{
                scale: 1.2,
                // color: "#6d8aff",
                boxShadow: "0 0 12px rgba(109, 138, 255, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modified scroll down button with conditional visibility */}
      <motion.div
        className="scroll-down-enhanced items-center justify-center"
        initial={{ opacity: 0, y: -5 }}
        animate={isScrolled ? "hidden" : "visible"}
        variants={scrollArrowVariants}
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="scroll-circle cosmic-scroll">
            <FaChevronDown className="scroll-arrow" />
          </div>
          {/* <span className="scroll-text">Explore My Universe</span> */}
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
