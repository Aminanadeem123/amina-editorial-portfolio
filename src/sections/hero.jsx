
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import "./hero.css";

import budgetImage from "../assets/projects/budgetbasics.png";
import budgetMobile from "../assets/projects/budgetbasics-mobile.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">

        <div className="hero-topline">
          <span>WEB DEVELOPER / PAKISTAN</span>
          <span>PORTFOLIO — 2026</span>
        </div>

        <div className="hero-main">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero-intro">
              HELLO, I'M AMINA NADEEM
            </p>

            <h1>
              Building useful
              <br />
              digital <span>experiences.</span>
            </h1>

            <h2>Web Developer</h2>

            <p className="hero-description">
              I create responsive websites and web applications
              using modern web technologies, with attention to
              functionality, usability and thoughtful design.
            </p>

            <div className="hero-actions">
              <a href="#work" className="hero-primary-link">
                EXPLORE MY WORK
                <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="hero-secondary-link">
                LET'S TALK
              </a>
            </div>

            <div className="hero-tech">
              <span>WORKING WITH</span>
              <p>REACT · JAVASCRIPT · PHP · MYSQL</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-visual-heading">
              <span>FEATURED PROJECT</span>
              <span>01 / 06</span>
            </div>

            <a
              href="#work"
              className="hero-featured-project"
              aria-label="Explore BudgetBasics project"
            >
              <img
                src={budgetImage}
                alt="BudgetBasics desktop website preview"
                className="hero-desktop-image"
              />

              <div className="hero-mobile-preview">
                <img
                  src={budgetMobile}
                  alt="BudgetBasics mobile website preview"
                />
              </div>

              <span className="hero-image-arrow">
                <ArrowUpRight size={20} />
              </span>
            </a>

            <div className="hero-visual-caption">
              <div>
                <h3>BudgetBasics</h3>
                <p>Finance & Budgeting Application</p>
              </div>

              <span>REACT / JAVASCRIPT</span>
            </div>
          </motion.div>

        </div>

        <a href="#work" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>

      </div>
    </section>
  );
}

export default Hero;
