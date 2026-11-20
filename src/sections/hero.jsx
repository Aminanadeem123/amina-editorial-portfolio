
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">

        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>KARACHI, PAKISTAN</span>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="hero-intro">
            HELLO, I'M AMINA NADEEM
          </p>

          <h1>
            I BUILD
            <br />
            DIGITAL
            <br />
            <span className="hero-italic">EXPERIENCES.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Frontend Developer focused on creating
              thoughtful, responsive and engaging
              digital experiences through code and design.
            </p>

            <a href="#work" className="hero-work-link">
              EXPLORE MY WORK
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="hero-footer">
          <span>FRONTEND DEVELOPMENT</span>
          <a href="#about">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
          <span>DESIGN × DEVELOPMENT</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
