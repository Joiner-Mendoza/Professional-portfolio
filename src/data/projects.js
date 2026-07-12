// Imágenes de los proyectos
import Gestionmateriales from "../assets/projects/Gestionmateriales.png";
import Batata from "../assets/projects/Batata.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaDatabase
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiSpringboot,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiVite,
  SiNpm,


} from "react-icons/si";
const projects = [
  {
    id: 1,
    title: "ESFIM Platform",

    description:
      "Platform for managing educational materials, featuring authentication, user roles, and file management.",

    image: Gestionmateriales,

    technologies: [
      {name : "React", icon: FaReact, color: "#61DAFB"},
      {name : "Django", icon: SiDjango, color: "#092E20"},
      {name : "Django REST", icon: SiDjango, color: "#092E20"},
      {name : "Tailwind", icon: SiTailwindcss, color: "#06B6D4"},
      {name : "JWT", icon: FaJava, color: "#ED8B00"}
    ],
    github: "https://github.com/Joiner-Mendoza/plataforma-educativa",
    demo: "https://plataforma-educativa-umber.vercel.app/#/dashboard"
  },
  {
      id: 2,
    title: "Batata Bit",

    description:
      "My first real web project: a comprehensive dashboard designed with a responsive approach, ensuring the entire interface adapts fluidly and cleanly to both desktop screens and mobile devices..",

    image: Batata,

    technologies: [
      {name : "HTML5", icon: FaHtml5, color: "#E34C26"},
      {name : "CSS3", icon: FaCss3Alt, color: "#264DE4"},
      {name : "JavaScript", icon: FaJs, color: "#646CFF"},
    ],


    github: "https://github.com/Joiner-Mendoza/Frontend-Developer.git",
    demo: "https://frontend-developer-nine.vercel.app/responsive.html"
  },
  {    id: 1,
    title: "ESFIM Platform",

    description:
      "Platform for managing educational materials, featuring authentication, user roles, and file management.",

    image: Gestionmateriales,

    technologies: [
      "React",
      "Django",
      "Django REST",
      "Tailwind",
      "JWT"
    ],
    github: "https://github.com/Joiner-Mendoza/plataforma-educativa",
    demo: "https://plataforma-educativa-umber.vercel.app/#/dashboard"
  },
  

];

export default projects;