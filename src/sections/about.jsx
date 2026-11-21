
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
          <span className="section-label">03 / ABOUT</span>
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
              I'm Amina Nadeem, an aspiring web developer
              interested in building thoughtful, responsive
              and practical web experiences.
            </p>

            <p>
              I enjoy turning ideas into working websites
              through HTML, CSS, JavaScript and React. I've
              also completed my PHP learning and am now
              exploring Laravel to expand my backend skills.
            </p>

            <p>
              Most of my experience comes from hands-on
              projects, where I focus on improving my
              problem-solving skills, learning new
              technologies and paying attention to details.
            </p>

            <a href="#work" className="about-link">
              EXPLORE MY WORK
              <ArrowUpRight size={17} />
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
              <span className="section-label">01 — INTEREST</span>
              <h3>Web Development</h3>
              <p>
                Responsive websites, user interfaces
                and practical web applications.
              </p>
            </div>

            <div className="about-detail">
              <span className="section-label">02 — EXPERIENCE</span>
              <h3>Learning by Building</h3>
              <p>
                Developing personal and academic projects
                to apply concepts and strengthen my skills.
              </p>
            </div>

            <div className="about-detail">
              <span className="section-label">03 — CURRENT STUDIES</span>
              <h3>Aptech · ACCP AI</h3>
              <p>
                Currently pursuing the Aptech Certified
                Computer Professional – Artificial Intelligence
                diploma.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
