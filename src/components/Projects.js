import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { use } from "react";

const Projects = () => {
  const allProjects = [
    {
      title: "AI Voice Assistant",
      description: "Created a super fast voice-activated personal assistant by utilizing a Groq AI API. This assistant is capable of receiving voice messages and providing vocal responses with a avg latency of 1.2sec.",
      technologies: ["Groq", "Python", "OpenAI TTS"],
      github: "https://github.com/yatharth-gupta/AI_Voice_Assistant",
      demo: "#",
      category: "AI/ML",
      image: "/Ai-Voice-Assistant.jpeg",
    },
    {
      title: "Arch-copilot @SERC-LAB, IIIT-HYD",
      description: "Developed a Copilot tool for software architects using RAG to deliver accurate architectural advice, leveraging a manually verified database of 5000+ ADRs.",
      technologies: ["LangChain", "MongoDB", "OpenAI", "RAG"],
      github: "#",
      demo: "#",
      category: "AI/ML",
      image: "/Arch-copilot.jpeg",
    },
    {
      title: "Greddit: A MERN stack based website",
      description: "Designed and implemented a Dockerized Reddit-style social networking site, including user authentication, authorization, registration, chat box, followers, moderators, pages, create, save, and report posts, and many other features completed with testing.",
      technologies: ["MERN", "Docker", "Web Dev"],
      github: "https://github.com/yatharth-gupta/Greddiit",
      demo: "https://gredit.netlify.app/",
      category: "Web Development",
      image: "/Greddit.jpeg",
    },
    {
      title: "ML Models From Scratch",
      description: "Developed 10+ machine learning models from scratch, including KNN, decision trees, PCA, CNN, Ensemble Learning, and HMM, optimizing performance with hyperparameter tuning via Wandb.",
      technologies: ["PyTorch", "TensorFlow", "Wandb"],
      github: "https://github.com/yatharth-gupta/ML-Models-From-Scratch",
      demo: "#",
      category: "AI/ML",
      image: "/ML-models.png",
    },
    {
      title: "User defined Interactive Shell for Linux",
      description: "A Linux-like shell from scratch using modular C code with a 3000+ line codebase, supporting: I/O redirection, piping, background/foreground processes, signals, and a custom discover feature.",
      technologies: ["C", "Operating System", "Linux"],
      github: "https://github.com/yatharth-gupta/C-shell",
      demo: "#",
      category: "Systems",
      image: "/C-shell.jpeg",
    },
    {
      title: "AI-powered Load Balancer",
      description: "Using AI to dynamically control the number of instances (servers) of a project on AWS cloud to balance the incoming load by recognizing hand gestures using pre-trained models.",
      technologies: ["Python", "AWS-cloud", "Computer Vision"],
      github: "https://github.com/yatharth-gupta/AI_aws_cloud",
      demo: "#",
      category: "AI/ML",
      image: "/Load-balancer.png",
    },
    {
      title: "Mini-World: A Database CLI",
      description: "Developed a CLI using pymysql library to connect Python with MySQL database on localhost, providing a user-friendly and abstracted interface for executing queries over fictitious University data.",
      technologies: ["SQL", "Python", "CLI"],
      github: "https://github.com/yatharth-gupta/Mini-World",
      demo: "#",
      category: "Databases",
      image: "/Mini-world.jpeg",
    },
    {
      title: "Water Flow Monitoring System",
      description: "Collaborated to develop an embedded system project that tracks data on volume, usage, and waste while monitoring water flow in pipes. Had a web interface that used graphics to present the data.",
      technologies: ["ESP32", "IoT", "Embedded Systems"],
      github: "https://github.com/VanshMarda/Water-flow-managment",
      demo: "#",
      category: "IoT",
      image: "/Water-Flow-Monitoring.jpg",
    },
    {
      title: "Smart Room based on IoT",
      description: "Collaborated to develop a prototype of a room equipped with a smart fan, smart light, and motion detection controlled by sensors for optimal energy use.",
      technologies: ["ESP32", "IoT", "Sensors"],
      github: "#",
      demo: "#",
      category: "IoT",
      image: "/Smart-Room.jpeg",
    },
  ];

  // Get unique categories from projects
  const categories = ["All", ...new Set(allProjects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // Add this line

  // initial render
  useEffect(() => {
    setFilteredProjects(allProjects);
    setCurrentProjects(allProjects.slice(0, projectsPerPage));
    setTotalPages(Math.ceil(allProjects.length / projectsPerPage));
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeCategory));
    }
    setCurrentPage(1);
  }, [activeCategory]);

  // Update current projects when CurrentPage changes
  useEffect(() => {
    console.log(currentPage);
    console.log(filteredProjects);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    setCurrentProjects(filteredProjects.slice(indexOfFirstProject, indexOfLastProject));
    setTotalPages(Math.ceil(filteredProjects.length / projectsPerPage));
  }, [currentPage, filteredProjects]);

  useEffect(() => {
    console.log("curr: ", currentProjects);
  }, [currentProjects]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects py-20 relative">
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-6 text-accent font-bold text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Creative Builds
          <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
        </motion.h2>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-black' 
                  : 'bg-light-gray hover:bg-secondary/50 text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div 
          className="projects-grid"
          variants={container}
          // initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card relative overflow-hidden"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-secondary-color line-clamp-3">
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  )}
                </div>
              </div>
              
              {/* Hover overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-black/90 p-6 flex flex-col justify-center text-white rounded-custom transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="project-tags mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-primary/80 text-white">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-5 mt-2">
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary-light"
                      >
                        <FiGithub size={20} /> <span>Source</span>
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary-light"
                      >
                        <FiExternalLink size={20} /> <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentPage === i + 1
                    ? 'bg-primary text-white'
                    : 'bg-light-gray hover:bg-secondary-color/50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};  

export default Projects;
