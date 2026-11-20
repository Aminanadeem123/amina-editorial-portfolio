
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./projects.css";
import budgetImage from "../assets/projects/budgetbasics.png";
import fureverImage from "../assets/projects/furever.png";
import mindcareImage from "../assets/projects/mindcare.png";
import pcImage from "../assets/projects/pccenter.png";
import petbotImage from "../assets/projects/petbot.png";

const projects = [
  {
    number: "01",
    slug:"budgetbasics",
    title: "BudgetBasics",
    image: budgetImage,
    category: "Budget Planning Web Application",
    description:
      "A budgeting platform designed to help users organize expenses, savings goals and financial planning.",
    technologies: ["React", "JavaScript", "CSS", "Chart.js"],
    link: "https://thebudgetbasics.netlify.app/",
    type: "Live Project",
  },
  {
    number: "02",
    slug:"furever-care",
    title: "FurEVER Care",
    image: fureverImage,
    category: "Pet Care Website",
    description:
      "A responsive pet care platform designed for pet owners, veterinarians and animal shelters.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://aminanadeem123.github.io/FurEVER-Care/",
    type: "Live Project",
  },
  {
    number: "03",
    slug:"mindcare-hub",
    title: "MindCare Hub",
    image: mindcareImage,
    category: "Mental Wellness Website",
    description:
      "A mental wellness interface featuring mood tracking, journaling and interactive dashboards.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://aminanadeem123.github.io/mindcare/",
    type: "Live Project",
  },
  {
    number: "04",
    slug:"petbot",
    title: "PetBot",
    image: petbotImage,
    category: "Pet Care Website",
    description:
      "A pet-related web project focused on an engaging and user-friendly experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://aminanadeem123.github.io/PetBot-Website/",
    type: "Live Project",
  },
  {
    number: "05",
    slug:"pc-center",
    title: "PC Center",
    image: pcImage,
    category: "E-commerce Website",
    description:
      "A computer products website with product categories, product details and a PC builder interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Aminanadeem123/PC-Center",
    type: "GitHub Project",
  },
  
{
  number: "06",
    slug:"vaxcare",
  title: "VaxCare",
  category: "Vaccination Management System",
  description:
    "Currently in development — a PHP and MySQL based vaccination management system with admin, parent and hospital dashboards.",
  technologies: ["PHP", "MySQL", "HTML", "CSS"],
  link: "",
  type: "Currently in Development",
},

];

function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="container">

        <div className="projects-heading">
          <span className="section-label">04 / SELECTED WORK</span>
          <h2>Things I've <em>worked on.</em></h2>
          <p>
            A selection of projects built through practice,
            experimentation and continuous learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-card-top">
                <span>{project.number} / 06</span>
                <span>{project.type}</span>
              </div>

              <div className="project-card-content">
                  {project.image && (
                   <div className="project-image">
                     <img src={project.image} alt={project.title} />
                   </div>
                 )}
                <span className="section-label">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <Link to={`/projects/${project.slug}`} className="project-link">
                   VIEW CASE STUDY <ArrowUpRight size={17} />
                 </Link>

                 {project.link && (
                   <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                     VIEW LIVE PROJECT <ArrowUpRight size={17} />
                   </a>
                 )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
