import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiLayers,
  FiGitBranch,
  FiCpu,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className="text-accent text-2xl" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Astro",
        "Bulma-css",
        "MERN Stack",
      ],
    },
    {
      title: "Backend Development",
      icon: <FiServer className="text-accent text-2xl" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "VBCS",
        "MongoDB",
        "SQL",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FiZap className="text-accent text-2xl" />,
      skills: [
        "Machine Learning",
        "PyTorch",
        "TensorFlow",
        "Wandb",
        "OpenAI",
        "Groq AI",
        "LangChain",
        "LlamaIndex",
        "RAG",
      ],
    },
    {
      title: "DevOps & Deployment",
      icon: <FiTool className="text-accent text-2xl" />,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS Cloud",
        "npm",
      ],
    },
    {
      title: "Programming Languages",
      icon: <FiLayers className="text-accent text-2xl" />,
      skills: [
        "JavaScript", 
        "Python", 
        "Java", 
        "C", 
        "C++",
        "SQL",
      ],
    },
    {
      title: "Tools & Methodologies",
      icon: <FiGitBranch className="text-accent text-2xl" />,
      skills: [
        "Version Control",
        "CLI Development",
        "Database Design",
        "API Integration",
        "Low-Code Development",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FiUsers className="text-accent text-2xl" />,
      skills: [
        "Leadership",
        "Teamwork",
        "Creativity",
        "Public Speaking",
        "Active Listening",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent font-mono mr-2">05.</span> Skills &
        Technologies
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-bold ml-3">{category.title}</h3>
            </div>

            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="text-accent mr-2">▹</span>
                  <span className="text-textSecondary">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
