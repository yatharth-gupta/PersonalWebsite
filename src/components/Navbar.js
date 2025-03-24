import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Find the active section
      const sections = navLinks.map(link => link.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ?
         darkMode 
            ? "top-3 left-0 right-0 mx-auto w-[95%] max-w-6xl rounded-2xl bg-background/90 backdrop-blur-lg shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)]" 
            : "top-3 left-0 right-0 mx-auto w-[95%] max-w-6xl rounded-2xl bg-white/90 backdrop-blur-lg shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)]"
          : `${darkMode ? "bg-background/90" : "bg-white/90"}
              top-3 left-0 right-0 mx-auto w-[95%] max-w-6xl rounded-2xl shadow-[0_10px_20px_5px_rgba(109,138,255,0.3)]`
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-center items-center py-4 relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2 max-w-4xl mx-auto pr-12 md:pr-16">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className={`nav-link relative px-3 py-2 text-md font-medium transition-all duration-300 rounded-md hover:bg-primary/10 cursor-pointer ${
                  activeLink === link.to 
                    ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full" 
                    : "hover:text-primary"
                }`}
                onSetActive={() => setActiveLink(link.to)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle - Desktop (positioned absolute) */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:flex p-2 rounded-full hover:bg-primary/10 transition-all duration-300 absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="text-primary group-hover:rotate-45 transition-transform duration-300" size={20} />
            ) : (
              <FiMoon className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex w-full justify-end items-center gap-4 z-50">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-primary group-hover:rotate-45 transition-transform duration-300" size={20} />
              ) : (
                <FiMoon className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
              )}
            </button>

            <button
              className="text-textPrimary p-2 rounded-full hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} className="text-primary" /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg transition-all duration-500 flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 z-40" : "opacity-0 -z-10 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col space-y-4 text-center w-4/5 max-w-sm">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                activeLink === link.to 
                  ? "bg-primary/15 text-primary" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={toggleMenu}
              onSetActive={() => setActiveLink(link.to)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
