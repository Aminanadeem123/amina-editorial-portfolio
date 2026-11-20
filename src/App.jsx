
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Education from "./sections/education";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./sections/contact";
import Footer from "./components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/:slug"
        element={
          <>
            <Navbar />
            <ProjectDetails />
            <Footer />
          </>
        }
      />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
