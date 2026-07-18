import React from "react";
import "../../estilos/about.css";
import translations from "../../data/translations";
import {
  FaUserTie,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

import { MdOutlineWork } from "react-icons/md";

const profileInfo = [
  {
    icon: <FaMapMarkerAlt className="info-icon" />,
    text: "Colombia",
  },
  {
    icon: <FaLaptopCode className="info-icon" />,
    text: "Full Stack Developer",
  },
  {
    icon: <FaGraduationCap className="info-icon" />,
    text: "Software Development",
  },
  {
    icon: <FaRocket className="info-icon" />,
    text: "15+ Personal Projects",
  },
  {
    icon: <FaUserTie className="info-icon" />,
    text: "React • Django • Java",
  },
  {
    icon: <MdOutlineWork className="info-icon" />,
    text: "Always Learning",
  },
];



function About({ language }) {
  const t = translations[language];// estado para el 
  return (
    <section className="about">
      <div className="about-me">
        <h2>
          {t.about.title} <span>{t.about.me}</span>
        </h2>
        <div className="aboutContent">

          <h3>{t.about.subtitle}</h3>
          <p>
              {t.about.description}
          </p>
        <a
          href="/cv/HV-jOINER.pdf"
          download="Joiner_Mendoza_CV.pdf"
          className="ReadMore"
        >
          Download CV
        </a>
        </div>
      </div>

      <div className="description">
        <div className="profile-card">
          <h3>Joiner Mendoza</h3>

          <div className="profile-info">
            {profileInfo.map((item, index) => (
              <div className="info-card" key={index}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };