import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "International Institute of Information Technology (IIIT) Hyderabad",
      duration: "2021 - 2025 (Expected)",
      description: "Maintaining a strong GPA of 8.57/10. Courses include Statistical Methods in AI, Database Management Systems, Operating Systems, and more.",
      achievements: "Dean's List 2023-24: Ranked in top 10% of batch. Teaching Assistant for Statistical Methods in AI course, mentoring 30+ students."
    },
    {
      degree: "Higher Secondary Education (Class 11th-12th)",
      institution: "Tagore Public School, Jaipur, Rajasthan",
      duration: "2019 - 2021",
      description: "CBSE Board with 94% marks. Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      achievements: "JEE-2021: Ranked 612/939,000 (Top 0.05%) in Mains and 1,659/141,000 (Top 1.1%) in Advanced. BITSAT'2021: Scored 401/450, among only 229 students who scored above 400 out of 279,000 participants."
    },
    {
      degree: "Secondary Education (Class 7th-10th)",
      institution: "The Scindia School, Gwalior, Madhya Pradesh",
      duration: "2015 - 2019",
      description: "Attended one of India's premier boys boarding schools, gaining exposure to diverse perspectives and building a strong foundation of discipline.",
      achievements: "Participated in various sports and academic events conducted in an interhouse manner, developing teamwork and leadership skills. Participated in a range of outdoor sports including hockey, basketball, and football."
    }
  ];

  return (
    <section id="education" className="py-20">
      <motion.h2 
        className="section-title text-center mb-6 text-accent font-bold text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Academic Pursuits
        <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
      </motion.h2>
      
      <div className="space-y-10">
        {education.map((item, index) => (
          <motion.div 
            key={index} 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-textPrimary">{item.degree}</h3>
              <span className="text-accent font-mono">{item.duration}</span>
            </div>
            
            <p className="text-lg mb-2">{item.institution}</p>
            
            <p className="text-textSecondary mb-3">{item.description}</p>
            
            <p className="text-accent">{item.achievements}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
