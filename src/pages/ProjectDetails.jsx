
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./ProjectDetails.css";

import budgetImage from "../assets/projects/budgetbasics.png";
import fureverImage from "../assets/projects/furever.png";
import mindcareImage from "../assets/projects/mindcare.png";
import pcImage from "../assets/projects/pccenter.png";
import petbotImage from "../assets/projects/petbot.png";

const projectDetails = {
  budgetbasics: {
    number: "01",
    title: "BudgetBasics",
    category: "Budget Planning Web Application",
    type: "Frontend Development",
    image: budgetImage,
    overview:
      "BudgetBasics is a budgeting platform designed to help users organize expenses, plan savings goals and understand their finances through a clear interface.",
    contribution:
      "Worked on the frontend interface and application features as part of a practical development project.",
    features: [
      "Budget planning interface",
      "Savings goals",
      "Expense planner",
      "Interactive charts",
      "AI chatbot interface",
      "Expense filtering"
    ],
    technologies: ["React", "JavaScript", "CSS", "Chart.js"],
    demo: "https://thebudgetbasics.netlify.app/",
    github: ""
  },

  "furever-care": {
    number: "02",
    title: "FurEVER Care",
    category: "Pet Care Website",
    type: "Team Project",
    image: fureverImage,
    overview:
      "FurEVER Care is a responsive pet care platform created to connect pet owners, veterinarians and animal shelters through dedicated website sections.",
    contribution:
      "Worked as the team leader and frontend contributor, helping organize the website structure and user interface.",
    features: [
      "Pet owner section",
      "Veterinarian section",
      "Animal shelter section",
      "FAQ page",
      "Responsive layout",
      "Interactive navigation"
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
    demo: "https://aminanadeem123.github.io/FurEVER-Care/",
    github: ""
  },

  "mindcare-hub": {
    number: "03",
    title: "MindCare Hub",
    category: "Mental Wellness Website",
    type: "Frontend Development",
    image: mindcareImage,
    overview:
      "MindCare Hub is a mental wellness website featuring interactive tools, mood tracking, journaling and different user dashboards.",
    contribution:
      "Developed frontend interfaces and interactive features, including localStorage-based functionality. This project does not use a backend database.",
    features: [
      "Mood tracker",
      "Personal journal",
      "Interactive assessments",
      "Role-based dashboards",
      "LocalStorage records",
      "Responsive interface"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://aminanadeem123.github.io/mindcare/",
    github: ""
  },

  petbot: {
    number: "04",
    title: "PetBot",
    category: "Pet Care Website",
    type: "Web Development Project",
    image: petbotImage,
    overview:
      "PetBot is a pet-related website designed to present useful information through a simple and user-friendly interface.",
    contribution:
      "Worked on the website frontend, page structure and interactive elements.",
    features: [
      "Website navigation",
      "Responsive interface",
      "Pet-related content",
      "Interactive elements"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://aminanadeem123.github.io/PetBot-Website/",
    github: ""
  },

  "pc-center": {
    number: "05",
    title: "PC Center",
    category: "Computer Products Website",
    type: "Frontend Development",
    image: pcImage,
    overview:
      "PC Center is a computer products website featuring product categories, product details and a PC builder interface.",
    contribution:
      "Worked on the website pages, product presentation and frontend structure.",
    features: [
      "Product catalogue",
      "Product categories",
      "Product details",
      "PC builder interface",
      "Checkout page",
      "Contact page"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "",
    github: "https://github.com/Aminanadeem123/PC-Center"
  },

  vaxcare: {
    number: "06",
    title: "VaxCare",
    category: "Vaccination Management System",
    type: "PHP & MySQL Project",
    image: null,
    overview:
      "VaxCare is a vaccination management system currently in development, designed to organize vaccination-related activities for parents, hospitals and administrators.",
    contribution:
      "Working on the system using PHP and MySQL, with separate admin, parent and hospital roles.",
    features: [
      "Admin dashboard",
      "Parent section",
      "Hospital dashboard",
      "Appointment management",
      "Vaccination status",
      "Vaccination stock management"
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    demo: "",
    github: ""
  }
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>
        <Link to="/">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <div className="container">

        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          BACK TO PORTFOLIO
        </Link>

        <motion.section
          className="detail-hero"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="detail-hero-top">
            <span>PROJECT CASE STUDY</span>
            <span>SELECTED WORK / {project.number}</span>
          </div>

          <div className="detail-intro">
            <div className="detail-title-area">
              <p className="detail-eyebrow">{project.type}</p>
              <h1>{project.title}<span>.</span></h1>
              <p className="detail-category">{project.category}</p>
            </div>

            <div className="detail-description">
              <span className="section-label">ABOUT THE PROJECT</span>
              <p>{project.overview}</p>
            </div>
          </div>

          <div className="detail-image">
            {project.image ? (
              <img src={project.image} alt={`${project.title} project preview`} />
            ) : (
              <div className="detail-placeholder">
                <span>PROJECT / {project.number}</span>
                <h2>{project.title}</h2>
                <p>Currently in development</p>
              </div>
            )}
          </div>
        </motion.section>

        <section className="detail-block">
          <div className="detail-section-heading">
            <span className="section-label">01 / OVERVIEW</span>
            <h2>About the project</h2>
          </div>
          <div className="detail-section-content">
            <p>{project.overview}</p>
          </div>
        </section>

        <section className="detail-block">
          <div className="detail-section-heading">
            <span className="section-label">02 / CONTRIBUTION</span>
            <h2>My role</h2>
          </div>
          <div className="detail-section-content">
            <p>{project.contribution}</p>
          </div>
        </section>

        <section className="detail-block">
          <div className="detail-section-heading">
            <span className="section-label">03 / FEATURES</span>
            <h2>What it includes</h2>
          </div>

          <div className="detail-section-content">
            <ul className="detail-feature-list">
              {project.features.map((feature, index) => (
                <li key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-block">
          <div className="detail-section-heading">
            <span className="section-label">04 / TECHNOLOGIES</span>
            <h2>Built with</h2>
          </div>

          <div className="detail-section-content">
            <div className="detail-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-links">
          <div>
            <span className="section-label">HAVE A LOOK</span>
            <h2>Explore the project.</h2>
          </div>

          <div className="detail-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-primary-action"
              >
                LIVE WEBSITE
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-secondary-action"
              >
                GITHUB REPOSITORY
                <ExternalLink size={16} />
              </a>
            )}

            {!project.demo && !project.github && (
              <span className="development-status">
                CURRENTLY IN DEVELOPMENT
              </span>
            )}
          </div>
        </section>

        <div className="detail-footer">
          <Link to="/" className="next-project-link">
            <ArrowLeft size={16} />
            BACK TO ALL PROJECTS
          </Link>
          <span>AMINA NADEEM / PORTFOLIO 2026</span>
        </div>

      </div>
    </main>
  );
}

export default ProjectDetails;
