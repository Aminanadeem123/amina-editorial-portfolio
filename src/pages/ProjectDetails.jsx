
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./ProjectDetails.css";
import budgetImage from "../assets/projects/budgetbasics.png";
import fureverImage from "../assets/projects/furever.png";
import mindcareImage from "../assets/projects/mindcare.png";
import pcImage from "../assets/projects/pccenter.png";
import petbotImage from "../assets/projects/petbot.png";

const projectDetails = {
  "budgetbasics": {
    title: "BudgetBasics",
    category: "Budget Planning Web Application",
    image: budgetImage,
    overview:
      "A budgeting platform designed to help users organize expenses, savings goals and financial planning.",
    contribution:
      "Worked on the frontend interface and project features as part of a practical development project.",
    features: [
      "Budget planning interface",
      "Savings goals",
      "Expense planner",
      "Interactive charts",
      "AI chatbot interface"
    ],
    technologies: ["React", "JavaScript", "CSS", "Chart.js"],
    demo: "https://thebudgetbasics.netlify.app/",
    github: ""
  },

  "furever-care": {
    title: "FurEVER Care",
    category: "Pet Care Website",
    image: fureverImage,
    overview:
      "A responsive pet care platform designed for pet owners, veterinarians and animal shelters.",
    contribution:
      "Team leader and frontend contributor. Worked with the team on the website structure and user interface.",
    features: [
      "Pet owner section",
      "Veterinarian section",
      "Shelter section",
      "FAQ page",
      "Responsive layout"
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
    demo: "https://aminanadeem123.github.io/FurEVER-Care/",
    github: ""
  },

  "mindcare-hub": {
    title: "MindCare Hub",
    category: "Mental Wellness Website",
    image: mindcareImage,
    overview:
      "A mental wellness website featuring interactive tools and dashboards.",
    contribution:
      "Worked on the frontend interface, interactive features and localStorage-based functionality.",
    features: [
      "Mood tracker",
      "Personal journal",
      "Interactive assessments",
      "Role-based dashboards",
      "LocalStorage records"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://aminanadeem123.github.io/mindcare/",
    github: ""
  },

  "petbot": {
    title: "PetBot",
    category: "Pet Care Website",
    image: petbotImage,
    overview:
      "A pet-related website focused on presenting information through a user-friendly interface.",
    contribution:
      "Developed the website frontend as a practical web development project.",
    features: [
      "Website navigation",
      "Responsive interface",
      "Pet-related content"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://aminanadeem123.github.io/PetBot-Website/",
    github: ""
  },

  "pc-center": {
    title: "PC Center",
    category: "Computer Products Website",
    image: pcImage,
    overview:
      "A computer products website with product categories, product details and a PC builder interface.",
    contribution:
      "Worked on the website pages, product presentation and frontend structure.",
    features: [
      "Product catalogue",
      "Product categories",
      "Product details",
      "PC builder interface",
      "Checkout page"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "",
    github: "https://github.com/Aminanadeem123/PC-Center"
  },

  "vaxcare": {
    title: "VaxCare",
    category: "Vaccination Management System",
    overview:
      "A vaccination management system currently in development.",
    contribution:
      "Working on a PHP and MySQL-based system with separate admin, parent and hospital roles.",
    features: [
      "Admin dashboard",
      "Parent section",
      "Hospital dashboard",
      "Appointment management",
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
      <main className="project-details container">
        <h1>Project not found</h1>
        <Link to="/">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> BACK TO PORTFOLIO
        </Link>

<div className="detail-hero">
  <div className="detail-hero-top">
    <span className="section-label">PROJECT CASE STUDY</span>
    <span className="detail-number">SELECTED WORK / 2026</span>
  </div>

  <div className="detail-intro">
    <div className="detail-title-area">
      <h1>{project.title}</h1>
      <p className="detail-category">{project.category}</p>
    </div>

    <div className="detail-description">
      <span className="section-label">ABOUT THE PROJECT</span>
      <p>{project.overview}</p>
    </div>
  </div>

  {project.image && (
    <div className="detail-image">
      <img src={project.image} alt={project.title} />
    </div>
  )}
</div>

        <section className="detail-block">
  <div className="detail-section-heading">
    <span className="section-label">01 / THE PROJECT</span>
    <h2>Project Overview</h2>
  </div>
  <div className="detail-section-content">
    <p>{project.overview}</p>
  </div>
</section>

<section className="detail-block">
  <div className="detail-section-heading">
    <span className="section-label">02 / MY ROLE</span>
    <h2>My Contribution</h2>
  </div>
  <div className="detail-section-content">
    <p>{project.contribution}</p>
  </div>
</section>

        <section className="detail-block">
  <div className="detail-section-heading">
    <span className="section-label">03 / WHAT IT DOES</span>
    <h2>Key Features</h2>
  </div>

  <div className="detail-section-content">
    <ul className="detail-feature-list">
      {project.features.map((feature, index) => (
        <li key={feature}>
          <span>0{index + 1}</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
</section>

        <section className="detail-block">
  <div className="detail-section-heading">
    <span className="section-label">04 / TECH STACK</span>
    <h2>Technologies Used</h2>
  </div>

  <div className="detail-section-content">
    <div className="detail-tags">
      {project.technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  </div>
</section>

        <div className="detail-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              LIVE DEMO <ArrowUpRight size={16} />
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GITHUB REPOSITORY <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
