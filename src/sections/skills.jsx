
import { motion } from "framer-motion";
import "./skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
  },
  {
    number: "02",
    title: "Backend",
    skills: ["PHP", "MySQL", "Laravel — Learning"],
  },
  {
    number: "03",
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "JSON", "Microsoft Office"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <span className="section-label">03 / TOOLKIT</span>
          <h2>Tools of my <em>trade.</em></h2>
          <p>
            Technologies I use to build, experiment and
            develop practical web projects.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <div className="skills-note">
          <span className="section-label">ALWAYS LEARNING</span>
          <p>
            Currently expanding my knowledge of Laravel
            and backend development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
