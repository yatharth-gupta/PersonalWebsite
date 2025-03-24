import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

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
      
      {/* Gradient orbs */}
      <div className="gradient-orbs">
        <div className="orb orb-primary"></div>
        <div className="orb orb-secondary"></div>
        <div className="orb orb-accent"></div>
      </div>
      
      {/* Floating shapes */}
      <div className="floating-shapes">
        {[...Array(5)].map((_, index) => {
          const shapes = ['circle', 'triangle', 'square', 'pentagon', 'hexagon'];
          const shape = shapes[index % shapes.length];
          return (
            <div 
              key={`shape-${index}`} 
              className={`floating-shape ${shape}`}
              style={{
                left: `${(index * 20) + Math.random() * 10}%`,
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
              top: `${(index+1) * 20}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
        {[...Array(5)].map((_, index) => (
          <div 
            key={`v-line-${index}`} 
            className="v-line"
            style={{
              left: `${(index+1) * 20}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Debounce the mouse move handler to reduce fluttering
  const handleMouseMove = useCallback((e) => {
    // Significantly reduced movement sensitivity
    setMousePosition(prevPos => {
      return {
        x: prevPos.x + (e.clientX - prevPos.x) * 0.05,
        y: prevPos.y + (e.clientY - prevPos.y) * 0.05
      };
    });
  }, []);
  
  useEffect(() => {
    // Throttle the mouse move event to reduce updates
    let timeoutId = null;
    
    const throttledMouseMove = (e) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleMouseMove(e);
          timeoutId = null;
        }, 50); // Only update every 50ms
      }
    };
    
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.4, // Slowed down staggering
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 10 }, // Reduced distance
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7 // Slowed down for smoother animation
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <EnhancedBackground />
      
      {/* Reduced movement sensitivity significantly */}
      <div className="hero-background" 
        style={{ 
          transform: `translate(${mousePosition.x / 500}px, ${mousePosition.y / 500}px)` 
        }}>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="avatar-container" variants={itemVariants}>
            <div className="avatar-placeholder"></div>
          </motion.div>
          
          <motion.h1 variants={itemVariants}>
            Hi, I'm <span className="highlight">Yatharth Gupta</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="typewriter">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Frontend Developer', 2000,
                'Problem Solver', 2000,
                'Software Engineer & Developer', 3000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              speed={40} // Slightly slower typing
            />
          </motion.div>
          
          <motion.p variants={itemVariants}>
            I build things for the web and solve complex problems with code
          </motion.p>
          
          <motion.div className="hero-btns" variants={itemVariants}>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="btn btn-primary">
                <span>Get In Touch</span>
                <span className="btn-icon">→</span>
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn btn-outline">
                <span>View My Work</span>
                <span className="btn-icon">↓</span>
              </button>
            </Link>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
            <a
              href="https://github.com/yatharth-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yatharth-gupta1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:guptayatharth1@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll down button */}
      {/* <motion.div 
        className="scroll-down-enhanced"
        initial={{ opacity: 0, y: -5 }} // Reduced initial movement
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2,
          duration: 1, // Slower animation
          repeat: Infinity,
          // repeatType: "reverse",
          repeatDelay: 0.5 // Added delay between repeats
        }}
      >
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <div className="scroll-circle">
            <FaChevronDown className="scroll-arrow" />
          </div>
          <span className="scroll-text">Scroll Down</span>
        </Link>
      </motion.div> */}
    </section>
  );
};

export default Hero;
