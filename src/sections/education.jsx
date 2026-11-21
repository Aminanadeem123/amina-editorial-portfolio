
import { motion } from "framer-motion";
import "./education.css";

const education = [
  {
    number: "01",
    title: "ACCP AI",
    subtitle:
      "Aptech Certified Computer Professional – Artificial Intelligence",
    institute: "Aptech Computer Education",
    status: "Ongoing",
  },
  {
    number: "02",
    title: "Intermediate",
    subtitle: "Pre-Engineering",
    institute: "Intermediate Education",
    status: "Completed",
  },
  {
    number: "03",
    title: "PHP Development",
    subtitle: "PHP Fundamentals and Development",
    institute: "Learning Completed",
    status: "Completed",
  },
  {
    number: "04",
    title: "Laravel",
    subtitle: "Laravel Framework",
    institute: "Currently Learning",
    status: "Learning",
  },
  {
    number: "05",
    title: "Matriculation",
    subtitle: "Secondary School Education",
    institute: "Brilliant Career Grammar School",
    status: "Completed",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="education-heading">
          <span className="section-label">05 / EDUCATION</span>
          <h2>Education & <em>learning.</em></h2>
          <p>
            My academic background and the technical skills I continue
            developing through practical learning.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <motion.div
              className="education-item"
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="education-number">{item.number}</span>

              <div className="education-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="education-institute">
                  {item.institute}
                </span>
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
