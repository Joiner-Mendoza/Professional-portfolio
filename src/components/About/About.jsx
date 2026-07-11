import React from "react";
import "../../estilos/about.css";

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



function About() {
  return (
    <section className="about">
      <div className="about-me">
        <h2>
          About <span>Me</span>
        </h2>

        <div className="aboutContent">
          <h3>Full Stack Developer</h3>

          <p>
          I'm a Full Stack Developer passionate about building modern and scalable web applications. I have experience developing responsive interfaces with React and Vue.js, building RESTful APIs with Django REST Framework and Spring Boot, and working with MySQL and SQLite. I enjoy creating clean, maintainable solutions while continuously learning and improving my skills.
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