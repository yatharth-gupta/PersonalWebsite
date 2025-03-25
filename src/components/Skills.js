import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
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
  // Group skills into rows to ensure consistent heights within each row
  const skillGroups = [
    // Row 1
    [
      {
        name: "Frontend Development",
        icon: <FiCode className="text-accent text-2xl" />,
        description: "Building responsive, interactive user interfaces with modern JavaScript frameworks.",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Astro", "Bulma-css", "MERN Stack"]
      },
      {
        name: "Backend Development",
        icon: <FiServer className="text-accent text-2xl" />,
        description: "Developing robust server-side applications and APIs.",
        skills: ["Node.js", "Express.js", "RESTful APIs", "VBCS", "MongoDB", "SQL"]
      },
      {
        name: "AI & Machine Learning",
        icon: <FiZap className="text-accent text-2xl" />,
        description: "Implementing machine learning models and AI solutions.",
        skills: ["Machine Learning", "PyTorch", "TensorFlow", "Wandb", "OpenAI", "Groq AI", "LangChain", "LlamaIndex", "RAG"]
      }
    ,
      {
        name: "DevOps & Deployment",
        icon: <FiTool className="text-accent text-2xl" />,
        description: "Managing code versioning, deployment, and cloud infrastructure.",
        skills: ["Git", "GitHub", "Docker", "AWS Cloud", "npm"]
      },
      {
        name: "Programming Languages",
        icon: <FiLayers className="text-accent text-2xl" />,
        description: "Proficient in multiple programming languages.",
        skills: ["JavaScript", "Python", "Java", "C", "C++", "SQL"]
      },
      {
        name: "Tools & Methodologies",
        icon: <FiGitBranch className="text-accent text-2xl" />,
        description: "Utilizing various tools and methodologies for efficient development.",
        skills: ["Version Control", "CLI Development", "Database Design", "API Integration", "Low-Code Development"]
      }
    ,
      {
        name: "Soft Skills",
        icon: <FiUsers className="text-accent text-2xl" />,
        description: "Strong interpersonal and communication skills.",
        skills: ["Leadership", "Teamwork", "Creativity", "Public Speaking", "Active Listening"]
      }
    ]
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="cosmic-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <ScrollAnimation type="cosmic">
        <h2 className="section-title">
          <span className="text-accent font-mono mr-2">05.</span> Skills &
          Technologies
        </h2>
      </ScrollAnimation>

      <div className="container">
        <div className="text-center mb-12">
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm constantly learning and expanding my toolkit. Here are some of the technologies and skills I work with.
          </p>
        </div>

        {skillGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="same-height-row mb-10">
            <div className="skills-grid">
              {group.map((skill, index) => (
                <motion.div
                  key={`${groupIndex}-${index}`}
                  className="skill-card p-6 rounded-lg bg-lightGray"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + groupIndex * 0.3,
                    ease: "easeOut" 
                  }}
                >
                  <div className="skill-icon mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                  <p className="text-textSecondary mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((techSkill, i) => (
                      <span
                        key={i}
                        className="text-xs py-1 px-3 bg-primary text-white rounded-full"
                      >
                        {techSkill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
