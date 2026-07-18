// Imágenes de los proyectos
import Gestionmateriales from "../assets/projects/Gestionmateriales.png";
import Batata from "../assets/projects/Batata.png";
import Systematurnos from "../assets/projects/SistemaTurnos.png";
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
  FaDatabase,
  
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
  SiHibernate,
  SiGradle,
  SiJsonwebtokens,
  SiSpringsecurity


} from "react-icons/si";
const projects = [
{
    id: 1,
    title: {
        en: "ESFIM Platform",
        es: "Plataforma ESFIM"
    },

    description: {
        en: "Platform for managing educational materials, featuring authentication, user roles, and file management.",
        es: "Plataforma para gestionar materiales educativos, con autenticación, roles de usuario y administración de archivos."
    },

    image: Gestionmateriales,

    technologies: [
        {name : "React", icon: FaReact, color: "#61DAFB"},
        {name : "Vite", icon: SiVite, color: "#646CFF"},
        {name : "Django", icon: SiDjango, color: "#092E20"},
        {name : "Tailwind", icon: SiTailwindcss, color: "#06B6D4"},
        {name : "JWT", icon: SiJsonwebtokens, color: "#ED8B00"}
    ],

    github: "https://github.com/Joiner-Mendoza/plataforma-educativa",
    demo: "https://plataforma-educativa-umber.vercel.app/#/dashboard"
},

{
    id: 2,
    title: {
        en: "Batata Bit",
        es: "Batata Bit"
    },

    description: {
        en: "My first real web project: a comprehensive dashboard designed with a responsive approach, ensuring the entire interface adapts fluidly and cleanly to both desktop screens and mobile devices.",
        es: "Mi primer proyecto web real: un dashboard completo diseñado con un enfoque responsive, logrando que la interfaz se adapte correctamente tanto a computadores como a dispositivos móviles."
    },

    image: Batata,

    technologies: [
        {name : "HTML5", icon: FaHtml5, color:"#E34C26"},
        {name : "CSS3", icon: FaCss3Alt, color:"#264DE4"},
        {name : "JavaScript", icon: FaJs, color:"#F7DF1E"},
    ],

    github: "https://github.com/Joiner-Mendoza/Frontend-Developer.git",
    demo: "https://frontend-developer-nine.vercel.app/responsive.html"
},

{
    id:3,
    title:{
        en: "Shift Management System",
        es: "Sistema de Gestión de Turnos"
    },

    description:{
        en:"The developed application is designed for a Starbucks store where employees struggle to organize their shifts because information is communicated through informal channels, leading to confusion and scheduling delays.",
        
        es:"La aplicación desarrollada está diseñada para una tienda Starbucks donde los empleados tienen dificultades para organizar sus turnos porque la información se comunica mediante canales informales, generando confusión y retrasos en la programación."
    },

    image:Systematurnos,

    technologies:[
        {name:"React", icon:FaReact, color:"#61DAFB"},
        {name:"Vite", icon:SiVite, color:"#646CFF"},
        {name:"Java", icon:FaJava, color:"#ED8B00"},
        {name:"Spring Boot", icon:SiSpringboot, color:"#6DB33F"},
        {name:"Hibernate", icon:SiHibernate, color:"#59666C"},
        {name:"Gradle", icon:SiGradle, color:"#02303A"}
    ],

    github:"https://github.com/Joiner-Mendoza/Sistema-de-gestion-de-turnos",
    demo:"https://sistema-de-gestion-de-turnos.vercel.app"
}

];

export default projects;
