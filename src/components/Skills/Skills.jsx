import React from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "Langages",
    badges: [
      { name: "Java", color: "#f89820" },
      { name: "Python", color: "#3572A5" },
      { name: "PHP", color: "#8892BF" },
      { name: "JavaScript", color: "#F0DB4F" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "C++", color: "#00599C" },
    ],
  },
  {
    title: "Frontend",
    badges: [
      { name: "React", color: "#61DBFB" },
      { name: "HTML", color: "#E34C26" },
      { name: "CSS", color: "#264de4" },
      { name: "Tailwind", color: "#38BDF8" },
      { name: "Bootstrap", color: "#563d7c" },
    ],
  },
  {
    title: "Backend",
    badges: [
      { name: "Node.js", color: "#3C873A" },
      { name: "Express", color: "#000000" },
      { name: "Spring Boot", color: "#6DB33F" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Base de données",
    badges: [
      { name: "MongoDB", color: "#47A248" },
      { name: "MySQL", color: "#00758F" },
      { name: "Oracle", color: "#F80000" },
    ],
  },
  {
    title: "DevOps",
    badges: [
      { name: "Git", color: "#F1502F" },
      { name: "GitHub", color: "#181717" },
      { name: "GitLab", color: "#FC6D26" },
      { name: "Docker", color: "#2496ED" },
    ],
  },
  {
    title: "Cloud",
    badges: [
      { name: "AWS", color: "#FF9900" },
      { name: "Google Cloud", color: "#4285F4" },
    ],
  },
  {
    title: "Méthodologies",
    badges: [
      { name: "Scrum", color: "#6DB33F" },
      { name: "Agile", color: "#F5A623" },
    ],
  },
  {
    title: "Outils",
    badges: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Swagger", color: "#85EA2D" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Compétences</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <div className="badge-container">
              {skill.badges.map((badge, i) => (
                <span
                  key={i}
                  className="badge"
                  style={{ backgroundColor: badge.color }}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
