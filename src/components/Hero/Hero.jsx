import React from "react";
import "../../App.css";
import "../../estilos/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import translations from "../../data/translations";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import CodeWindow from "../window/CodeWindow.jsx";

function Hero({language}) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  const t = translations[language];

  return (
    <section id="home" className="hero-wrapper">
      <div className="Hero-content">
        <h1>{t.hero.greeting}</h1>

        <h2>{t.hero.role}</h2>

        <p>
          {t.hero.description}
        </p>

        <div className="btn-box">
          <button
            onClick={() => scrollToSection("about")}
            className="HireMe"
          >
            {t.hero.hire}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="HireMe"
          >
            {t.hero.talk}
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