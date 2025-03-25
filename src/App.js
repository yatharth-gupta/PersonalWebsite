import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";
import "./styles/spaceTheme.css"; // Import our new space theme CSS

// Lazy load larger components
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Achievements = lazy(() => import("./components/Achievements"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Force dark mode for starry theme
  useEffect(() => {
    if (!darkMode) {
      setDarkMode(true);
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App bg-space-dark min-h-screen">
        {/* Add the StarryBackground with higher density for more stars */}
        <StarryBackground density={200} speed={0.03} depth={5} />
        <div className="space-nebula"></div>

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-16 relative z-10">
          <Hero />
          <Suspense
            fallback={
              <div className="py-20 text-center">
                <div className="loader space-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <button
          className="back-to-top show cosmic-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="19" x2="12" y2="5" />
            <line x1="5" y1="12" x2="12" y2="5" />
            <line x1="19" y1="12" x2="12" y2="5" />
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
