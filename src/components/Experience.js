import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  // Check if scrolling indicators should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowLeftScroll(scrollLeft > 0);
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    if (tabsRef.current) {
      tabsRef.current.addEventListener('scroll', checkScroll);
    }

    return () => {
      window.removeEventListener('resize', checkScroll);
      if (tabsRef.current) {
        tabsRef.current.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 150;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Ensure the active tab is visible when changed
  useEffect(() => {
    if (tabsRef.current) {
      const tabElements = tabsRef.current.children;
      if (tabElements[activeTab]) {
        const tabElement = tabElements[activeTab];
        const { offsetLeft, offsetWidth } = tabElement;
        const { scrollLeft, clientWidth } = tabsRef.current;
        
        // If tab is not visible or partially visible
        if (offsetLeft < scrollLeft || offsetLeft + offsetWidth > scrollLeft + clientWidth) {
          tabsRef.current.scrollTo({
            left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [activeTab]);

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowUp' && index > 0) {
      setActiveTab(index - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowDown' && index < experiences.length - 1) {
      setActiveTab(index + 1);
      e.preventDefault();
    } else if (e.key === 'Home') {
      setActiveTab(0);
      e.preventDefault();
    } else if (e.key === 'End') {
      setActiveTab(experiences.length - 1);
      e.preventDefault();
    }
  };

  const experiences = [
    {
      company: "ORACLE",
      position: "Application Developer",
      duration: "May 2024 - July 2024",
      sidebarTitle: "ORACLE",
      responsibilities: [
        "Created a comprehensive employee directory and profile system in a low code env called Visual Builder Cloud Service (VBCS), enabling seamless search, profile editing, and updates by employees",
        "Led a team of 4 interns to help teammates solve bugs and understand Oracle's internal tools",
        "Identified a fault in an internal feature, proposed improvements to senior developers which were implemented in the next version",
      ],
    },
    {
      company: "VLEAD",
      position: "Software Development Intern",
      duration: "May 2023 - July 2023",
      sidebarTitle: "VLEAD (SDE Intern)",
      responsibilities: [
        "Built 2 ReactJS components, published to npm, and adopted by 20+ developers in the Virtual Labs team to reduce redundancy",
        "Collaborated on integrating 4 features to enhance the Virtual Labs website",
        "Implemented Google Sheets as a BaaS system with relational DB features, storing 100+ employee records, enabling seamless API integration, and efficient data handling for small datasets",
      ],
    },
    {
      company: "VLEAD",
      position: "Website Developer",
      duration: "Jan 2023 - May 2023",
      sidebarTitle: "VLEAD (Web Dev)",
      responsibilities: [
        "Developed a creative, user-friendly, and interactive website with SRS, documentation, and responsive pages",
        "Integrated Google Sheets as backend using API and implemented data visualization as graphs and diagrams",
        "Created system for fetching content from GitHub and analytics data from Google Sheets, dynamically displaying on the website",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <motion.h2
        className="section-title text-center mb-6 text-accent font-bold text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional Journey
        <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 mb-4 md:mb-0 relative">
          {/* Mobile scroll indicators */}
          <div className="md:hidden flex items-center mb-2">
            <button 
              onClick={() => scrollTabs('left')}
              className={`p-1 rounded-full ${showLeftScroll ? 'text-accent' : 'text-textSecondary/30'}`}
              disabled={!showLeftScroll}
              aria-label="Scroll tabs left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-textSecondary text-xs mx-auto">Scroll for more</span>
            <button 
              onClick={() => scrollTabs('right')}
              className={`p-1 rounded-full ${showRightScroll ? 'text-accent' : 'text-textSecondary/30'}`}
              disabled={!showRightScroll}
              aria-label="Scroll tabs right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div 
            ref={tabsRef}
            className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-textSecondary/30 scrollbar-hide"
            role="tablist"
            aria-orientation="vertical"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`
                  py-3 px-4 text-left text-sm whitespace-nowrap md:whitespace-normal font-mono 
                  transition-all duration-300 relative
                  md:py-4 md:pl-6 md:pr-4 md:my-1
                  ${activeTab === index
                    ? "text-accent font-semibold md:bg-buttonHover md:rounded-r-md"
                    : "text-textSecondary hover:text-accent hover:bg-buttonHover md:hover:rounded-r-md"
                  }
                  md:hover:translate-x-1 md:focus:translate-x-1 md:focus:outline-none md:focus:ring-1 md:focus:ring-accent
                `}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
              >
                <div className="md:flex md:items-center">
                  <span className="md:mr-3 hidden md:inline-block text-accent opacity-75">
                    {activeTab === index ? '▶' : '•'}
                  </span>
                  <span>{exp.sidebarTitle}</span>
                </div>
                
                {activeTab === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 md:bottom-auto md:left-0 h-0.5 md:h-full md:w-0.5 bg-accent"
                    layoutId="activeIndicator"
                    initial={false}
                    style={{ 
                      width: "100%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      ["@media (min-width: 768px)"]: {
                        width: "2px",
                        height: "100%",
                        bottom: "auto",
                        left: 0
                      }
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Desktop instructions helper */}
          {/* <div className="hidden md:block text-xs text-textSecondary/75 mt-2 ml-4">
            <p>Use ↑↓ keys to navigate</p>
          </div> */}
        </div>

        <motion.div
          className="md:w-3/4 md:p-4"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <h3 className="text-xl font-bold text-textPrimary mb-1">
            {experiences[activeTab].position}{" "}
            <span className="text-accent">
              @ {experiences[activeTab].company}
            </span>
          </h3>

          <p className="text-textSecondary font-mono text-sm mb-4">
            {experiences[activeTab].duration}
          </p>

          <ul className="space-y-2">
            {experiences[activeTab].responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span className="text-textSecondary">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
