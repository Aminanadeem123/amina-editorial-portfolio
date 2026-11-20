
import { motion } from "framer-motion";
import "./education.css";

const education = [
  {
    number: "01",
    title: "ACCP AI",
    institute: "Aptech Computer Education",
    status: "Ongoing",
  },
  {
    number: "02",
    title: "Intermediate",
    institute: "Pre-Engineering · Result Awaited",
    status: "Result Awaited",
  },
  {
    number: "03",
    title: "Matriculation",
    institute: "Brilliant Career Grammar School",
    status: "Completed",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="education-heading">
          <span className="section-label">02 / EDUCATION</span>
          <h2>Academic <em>background.</em></h2>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <motion.div
              className="education-item"
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="education-number">{item.number}</span>

              <div className="education-info">
                <h3>{item.title}</h3>
                <p>{item.institute}</p>
              </div>

              <span className="education-status">{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
