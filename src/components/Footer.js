import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yatharth-gupta", aria: "GitHub Profile" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yatharth-gupta1", aria: "LinkedIn Profile" },
    { icon: <FiInstagram />, url: "https://instagram.com/guptayatharth1", aria: "Instagram Profile" }
  ];

  return (
    <footer className="bg-lightGray py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
                className="text-textSecondary hover:text-primary transition-colors duration-300 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="font-mono text-textSecondary text-sm text-center">
            <p>Designed & Built by Yatharth Gupta</p>
            <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div className="footer-links mt-6">
            <Link to="hero" smooth={true} duration={500} offset={-70}>Home</Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
            <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
