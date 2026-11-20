
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import "./hero.css";

const projects = [
  { number: "01", name: "BudgetBasics", type: "Finance Web Application" },
  { number: "02", name: "VaxCare", type: "PHP & MySQL Project" },
  { number: "03", name: "MindCare Hub", type: "Mental Wellness Website" },
  { number: "04", name: "FurEVER Care", type: "Pet Care Website" },
];

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">

        <div className="hero-topline">
          <a href="#home" className="hero-logo">AN.</a>
          <span>WEB DEVELOPER / PAKISTAN</span>
          <span>PORTFOLIO 2026</span>
        </div>

        <div className="hero-main">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero-intro">
              INDEPENDENT WEB DEVELOPER
            </p>

            <h1>
              Amina
              <br />
              Nadeem<span>.</span>
            </h1>

            <h2>Web Developer</h2>

            <p className="hero-description">
              I build responsive websites and web applications
              with a focus on functionality, clean interfaces
              and thoughtful details.
            </p>

            <div className="hero-actions">
              <a href="#work" className="hero-primary-link">
                VIEW SELECTED WORK
                <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="hero-secondary-link">
                GET IN TOUCH
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-project-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="project-list-heading">
              <span>SELECTED PROJECTS</span>
              <span>2026</span>
            </div>

            {projects.map((project) => (
              <a
                href="#work"
                className="hero-project-item"
                key={project.number}
              >
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>

                <ArrowUpRight size={19} />
              </a>
            ))}

            <a href="#work" className="all-projects-link">
              VIEW ALL PROJECTS
              <ArrowDownRight size={16} />
            </a>
          </motion.div>

        </div>

        <div className="hero-bottom">
          <span>REACT · JAVASCRIPT · PHP · MYSQL</span>
          <span>BASED IN PAKISTAN</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
