import React from "react";
import "../../App.css";
import "../../estilos/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import CodeWindow from "../window/CodeWindow.jsx";

function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="Hero-content">
        <h1>Hi, I'm Joiner Mendoza</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern, scalable web applications using React, Django, Java
          and Spring Boot.
        </p>

        <div className="btn-box">
          <button
            onClick={() => scrollToSection("about")}
            className="HireMe"
          >
            Hire Me
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="HireMe"
          >
            Let's Talk
          </button>
        </div>

        <div className="Hero-sci">
          <a
            href="https://www.facebook.com/profile.php?id=61552516455550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="iconHero"
            />
          </a>

          <a
            href="https://www.instagram.com/joinerjoel12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="iconHero"
            />
          </a>

          <a
            href="https://github.com/Joiner-Mendoza/portafolio-hecho-con-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="iconHero"
            />
          </a>
        </div>
      </div>

      <div className="logo">
        <CodeWindow />
      </div>
    </section>
  );
}

export { Hero };