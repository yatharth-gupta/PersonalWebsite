import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiStar, FiBriefcase, FiUsers } from "react-icons/fi";

const Achievements = () => {
  const achievements = [
    {
      title: "Pre-Nationals in Shooting",
      description:
        "Qualified for and participated in 10 meters Shooting Pre-Nationals competition.",
      year: "2017",
      icon: <FiStar className="text-accent text-xl" />,
    },
    {
      title: "JEE-2021 Excellence",
      description:
        "Ranked 612 out of 939,000 (Top 0.05%) in JEE Mains and 1,659 out of 141,000 (Top 1.1%) in JEE Advanced, one of the world's most competitive engineering entrance exams.",
      year: "2021",
      icon: <FiAward className="text-accent text-xl" />,
    },
    {
      title: "BITSAT'2021 High Scorer",
      description:
        "Scored 401/450, among only 229 students who scored above 400 out of 279,000 participants.",
      year: "2021",
      icon: <FiAward className="text-accent text-xl" />,
    },
    {
      title: "Dean's List Scholar",
      description:
        "Ranked in top 10% of batch for the academic year 2023-24 at IIIT Hyderabad.",
      year: "2023-24",
      icon: <FiAward className="text-accent text-xl" />,
    },
    {
      title: "Logistics Head, ART Society",
      description:
        "Leading logistics for the ART society at IIIT-Hyderabad, organizing events with 150+ participants.",
      year: "2024",
      icon: <FiBriefcase className="text-accent text-xl" />,
    },
    {
      title: "Placement Coordinator",
      description:
        "Managed 5+ companies during placement season, helping place 30+ students in Placements '24-'25.",
      year: "2024-25",
      icon: <FiBriefcase className="text-accent text-xl" />,
    },
    {
      title: "Teaching Assistant",
      description:
        "Mentoring 30+ students in the Statistical Methods in AI course in spring '25.",
      year: "2025",
      icon: <FiUsers className="text-accent text-xl" />,
    }
  ];

  // reverse the order of achievements
  achievements.reverse();

  return (
    <section id="achievements" className="py-20">
      <motion.h2
        className="section-title text-center mb-6 text-accent font-bold text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Milestones & Responsibilities
        <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              {/* add a small  */}
              <div className="flex">
                {achievement.icon}
                <h3 className="text-xl font-bold ml-4 mb-5">{achievement.title}</h3>
              </div>
              <span className="text-accent font-mono text-sm">
                {achievement.year}
              </span>
            </div>

            <p className="text-textSecondary">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
