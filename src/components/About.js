import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about py-20">
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-6 text-accent font-bold text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/Profile.jpeg`}
                alt="Yatharth Gupta" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Failed to load profile image');
                  e.target.src = 'https://via.placeholder.com/400x400?text=Yatharth+Gupta';
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>Hello! I'm Yatharth, a software engineer and aspiring entrepreneur currently pursuing my B.Tech in Computer Science at IIIT Hyderabad. I'm passionate about building innovative solutions that solve real-world problems.</p>
            
            <p>My journey in technology has been shaped by diverse experiences, from ranking in the top 0.05% in JEE Mains and top 1.1% in JEE Advanced. I've worked with various technologies including MERN stack, ReactJS, and machine learning, creating projects like AI-powered load balancers and RAG-based architecture assistants.</p>
            
            <p>Inspired by my father's entrepreneurial spirit, I aim to create impact rather than just code. When I'm not programming, you can find me playing basketball and table tennis, creating art, or engaging in deep philosophical debates with friends. I'm also a cricket enthusiast and a RCB fan! 😊</p>
            
            <div className="about-buttons">
              <a href="/yatharth_gupta_resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
