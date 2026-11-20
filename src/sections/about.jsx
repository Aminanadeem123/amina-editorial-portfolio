
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
          <span className="section-label">01 / ABOUT ME</span>
          <h2>A little about <em>myself.</em></h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm Amina Nadeem, an aspiring web developer
              interested in building useful, thoughtful
              and user-friendly digital experiences.
            </p>
            <p>
              I've completed learning PHP development
              and I'm currently learning Laravel.
              I enjoy exploring new technologies and
              improving my skills through practical projects.
            </p>
            <a href="#work" className="about-link">
              EXPLORE MY PROJECTS <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="about-details">
            <div>
              <span className="section-label">CURRENT FOCUS</span>
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React, PHP and Laravel.</p>
            </div>
            <div>
              <span className="section-label">BASED IN</span>
              <h3>Karachi, Pakistan</h3>
              <p>Open to learning and collaborating on projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
