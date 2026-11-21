
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./projects.css";

import budgetImage from "../assets/projects/budgetbasics.png";
import budgetMobile from "../assets/projects/budgetbasics-mobile.png";

import fureverImage from "../assets/projects/furever.png";
import fureverMobile from "../assets/projects/furever-mobile.png";

import mindcareImage from "../assets/projects/mindcare.png";
import mindcareMobile from "../assets/projects/mindcare-mobile.png";

import pcImage from "../assets/projects/pccenter.png";
import pcMobile from "../assets/projects/pccenter-mobile.png";

import petbotImage from "../assets/projects/petbot.png";
import petbotMobile from "../assets/projects/petbot-mobile.png";

const projects = [
  {
    number: "01",
    slug: "budgetbasics",
    title: "BudgetBasics",
    category: "Finance & Budgeting",
    description: "A budgeting application for expenses, savings goals and financial planning.",
    technologies: ["React", "JavaScript", "Chart.js"],
    image: budgetImage,
    mobileImage: budgetMobile,
    link: "https://thebudgetbasics.netlify.app/",
    status: "LIVE",
    linkLabel: "LIVE WEBSITE",
  },
  {
    number: "02",
    slug: "mindcare-hub",
    title: "MindCare Hub",
    category: "Mental Wellness",
    description: "A wellness website with mood tracking, journaling and interactive dashboards.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: mindcareImage,
    mobileImage: mindcareMobile,
    link: "https://aminanadeem123.github.io/mindcare/",
    status: "LIVE",
    linkLabel: "LIVE WEBSITE",
  },
  {
    number: "03",
    slug: "furever-care",
    title: "FurEVER Care",
    category: "Pet Care Platform",
    description: "A responsive platform designed for pet owners, vets and shelters.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: fureverImage,
    mobileImage: fureverMobile,
    link: "https://aminanadeem123.github.io/FurEVER-Care/",
    status: "LIVE",
    linkLabel: "LIVE WEBSITE",
  },
  {
    number: "04",
    slug: "pc-center",
    title: "PC Center",
    category: "E-commerce Interface",
    description: "A computer products website with categories, product details and a PC builder.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: pcImage,
    mobileImage: pcMobile,
    link: "https://github.com/Aminanadeem123/PC-Center",
    status: "GITHUB",
    linkLabel: "VIEW GITHUB",
  },
  {
    number: "05",
    slug: "petbot",
    title: "PetBot",
    category: "Pet Care Website",
    description: "A pet-focused website with a simple and accessible browsing experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: petbotImage,
    mobileImage: petbotMobile,
    link: "https://aminanadeem123.github.io/PetBot-Website/",
    status: "LIVE",
    linkLabel: "LIVE WEBSITE",
  },
  {
    number: "06",
    slug: "vaxcare",
    title: "VaxCare",
    category: "Management System",
    description: "A vaccination management system built with PHP and MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    image: null,
    mobileImage: null,
    link: "",
    status: "IN DEVELOPMENT",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-heading-top">
            <span>02 / SELECTED WORK</span>
            <span>PORTFOLIO — 2026</span>
          </div>

          <h2>
            Things I've <em>built.</em>
          </h2>

          <p>
            A selection of web projects developed through
            practice, experimentation and learning.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <div className="project-card-top">
                <span>PROJECT / {project.number}</span>
                <span>{project.status}</span>
              </div>

              <Link
                to={`/projects/${project.slug}`}
                className="project-image-link"
                aria-label={`View ${project.title} case study`}
              >
                <div className={`project-image ${!project.image ? "project-image-placeholder" : ""}`}>
                  {project.image ? (
                    <div className="project-preview-layout">
                      <img
                        src={project.image}
                        alt={`${project.title} desktop preview`}
                        className="project-desktop-preview"
                      />

                      {project.mobileImage && (
                        <div className="project-mobile-frame">
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile preview`}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="project-placeholder-content">
                      <span>PHP / MYSQL</span>
                      <h3>VaxCare</h3>
                      <p>Vaccination Management System</p>
                    </div>
                  )}

                  <span className="image-open-icon">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </Link>

              <div className="project-card-content">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card-links">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-link"
                  >
                    CASE STUDY <ArrowUpRight size={15} />
                  </Link>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link"
                    >
                      {project.linkLabel} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
