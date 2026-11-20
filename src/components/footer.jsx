
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Amina Nadeem<span>.</span>
            </Link>

            <p>
              Web developer creating thoughtful,
              responsive and useful digital experiences.
            </p>

            <span className="footer-location">
              KARACHI, PAKISTAN
            </span>
          </div>

          <div className="footer-column">
            <span className="footer-heading">NAVIGATION</span>

            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <a href="/#work">Projects</a>
            <a href="/#contact">Contact</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">ELSEWHERE</span>

            <a
              href="https://github.com/Aminanadeem123"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="mailto:aminanadeem712@gmail.com"
            >
              Email <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AMINA NADEEM
          </span>

          <span>DESIGNED & BUILT WITH CARE</span>

          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
