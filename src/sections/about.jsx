
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
  <span className="section-label">01 / ABOUT</span>
  <h2>
    A bit about <em>me.</em>
  </h2>
</div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-intro">
              I'm Amina Nadeem, a web developer focused on
              creating useful, responsive and user-friendly
              websites.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, React and PHP.
              I'm currently learning Laravel and improving
              my skills through practical projects.
            </p>

            <a href="#work" className="about-link">
              EXPLORE MY WORK <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-detail">
              <span className="section-label">01 — FOCUS</span>
              <h3>Web Development</h3>
              <p>Frontend development, PHP and modern web technologies.</p>
            </div>

            <div className="about-detail">
              <span className="section-label">02 — LEARNING</span>
              <h3>Laravel</h3>
              <p>Currently expanding my backend development skills.</p>
            </div>

            <div className="about-detail">
              <span className="section-label">03 — EDUCATION</span>
              <h3>Aptech · ACCP AI</h3>
              <p>Currently pursuing my diploma.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
