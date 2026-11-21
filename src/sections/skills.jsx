
import { motion } from "framer-motion";
import "./skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "React (Basic)",
    ],
  },
  {
    number: "02",
    title: "Backend & Database",
    skills: [
      "PHP",
      "MySQL",
      "Laravel (Learning)",
      "Node.js",
    ],
  },
  {
    number: "03",
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "JSON",
      "XML",
    ],
  },
  {
    number: "04",
    title: "Productivity",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <span className="section-label">04 / TOOLKIT</span>

          <h2>
            Tools of my <em>trade.</em>
          </h2>

          <p>
            Technologies and tools I use while building
            projects, exploring new ideas and developing
            my web development skills.
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
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <span className="skill-number">
                {group.number}
              </span>

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
          <span className="section-label">
            CURRENTLY LEARNING
          </span>

          <p>
            Exploring Laravel and expanding my understanding
            of backend development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
