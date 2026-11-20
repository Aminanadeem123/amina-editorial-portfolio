
import { motion } from "framer-motion";
import "./skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"]
  },
  {
    number: "02",
    title: "Backend Development",
    skills: ["PHP", "MySQL", "Laravel (Learning)", "JSON"]
  },
  {
    number: "03",
    title: "Tools & Applications",
    skills: ["Git", "GitHub", "VS Code", "Microsoft Office"]
  },
  {
    number: "04",
    title: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Time Management",
      "Adaptability",
      "Problem Solving",
      "Quick Learning"
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <span className="section-label">03 / EXPERTISE</span>
          <h2>Skills & <em>capabilities.</em></h2>
          <p>
            Technologies and skills I use while learning,
            building projects and improving my development process.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <motion.div
              className="skill-group"
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="skill-number">{group.number}</span>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
