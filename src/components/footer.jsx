
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "45px 8% 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <div>
          <h2>Portfolio.</h2>
          <p style={{ color: "#aaa", lineHeight: "1.8" }}>
            Muhammad Haris | React Developer
            <br />
            Creating modern websites.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>

        <div>
          <h3>Social Links</h3>
          <a href="https://github.com/" style={linkStyle}>GitHub</a>
          <a href="https://linkedin.com/" style={linkStyle}>LinkedIn</a>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #333",
          paddingTop: "20px",
          textAlign: "center",
          color: "#888",
        }}
      >
        © {new Date().getFullYear()} Muhammad Haris. All Rights Reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  display: "block",
  color: "#aaa",
  textDecoration: "none",
  marginBottom: "12px",
};

export default Footer;
