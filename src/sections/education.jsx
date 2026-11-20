
import { motion } from "framer-motion";
import "./education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="education-heading">
          <span className="section-label">02 / EDUCATION</span>
          <h2>Learning is an <em>ongoing process.</em></h2>
        </div>

        <div className="education-list">

          {/* COMPLETED EDUCATION */}

          <motion.div
            className="education-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="education-number">01</span>
            <div>
              <span className="section-label">COMPLETED</span>
              <h3>Matriculation</h3>
              <p>Brilliant Career Grammar School</p>
            </div>
            <span className="education-status">Completed</span>
          </motion.div>

          <div className="education-item">
            <span className="education-number">02</span>
            <div>
              <span className="section-label">COMPLETED</span>
              <h3>Intermediate</h3>
              <p>Pre-Engineering</p>
             
            </div>
            <span className="education-status">Completed</span>
          </div>

          <div className="education-item">
            <span className="education-number">03</span>
            <div>
              <span className="section-label">TECHNICAL LEARNING</span>
              <h3>PHP Development</h3>
              <p>PHP Development learning completed.</p>
            </div>
            <span className="education-status">Completed</span>
          </div>

          {/* CURRENTLY LEARNING */}

          <div className="education-item">
            <span className="education-number">04</span>
            <div>
              <span className="section-label">CURRENTLY PURSUING</span>
              <h3>ACCP AI</h3>
              <p>Aptech Computer Education</p>
              <small>
                Aptech Certified Computer Professional – Artificial Intelligence
              </small>
            </div>
            <span className="education-status">In Progress</span>
          </div>

          <div className="education-item">
            <span className="education-number">05</span>
            <div>
              <span className="section-label">CURRENTLY LEARNING</span>
              <h3>Laravel Development</h3>
              <p>Currently developing backend development skills with Laravel.</p>
            </div>
            <span className="education-status">Learning</span>
          </div>

          {/* FUTURE GOAL */}

          <div className="education-item">
            <span className="education-number">06</span>
            <div>
              <span className="section-label">FUTURE ACADEMIC GOAL</span>
              <h3>Bachelor's Degree</h3>
              <p>Computer Science or a related field.</p>
            </div>
            <span className="education-status">Planned</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
