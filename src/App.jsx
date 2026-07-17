import "./App.css";
import { HashRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/project/Projects";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </HashRouter>
  );
}

export default App;