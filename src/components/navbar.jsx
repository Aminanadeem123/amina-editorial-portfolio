
import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">

        <a href="#home" className="nav-logo">
          AN<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected Work</a>
          <a href="#education">Education</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={15} />
        </a>

      </div>
    </header>
  );
}

export default Navbar;
