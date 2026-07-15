import "../../estilos/skills.css";

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


} from "react-icons/si";

function Skills() {
  const stack = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Vue.js", icon: FaVuejs, color: "#42B883" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

      ]
    },

    {
      title: "Backend",
      items: [
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Django REST", icon: SiDjango, color: "#092E20" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" }
      ]
    },

    {
      title: "Base de Datos",
      items: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" }
      ]
    },

    {
      title: "Herramientas",
      items: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "npm", icon: SiNpm, color: "#CB3837" },
        { name: "MySQL Workbench", icon: SiMysql, color: "#4479A1" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="title-skills">
        My <span>Skills</span>
      </h2>
    <p>Here are the technologies, frameworks, and development tools I use to create responsive user interfaces, robust backend services, and complete full-stack web applications.</p>
      <div className="stack-visual">
        {/** primer map  */}
        {stack.map((section) => (
          <div className="stack-layer" key={section.title}>
            <div className="stack-title">
              {section.title}
            </div>

            <div className="stack-items">
            {/** segundo map  */}
              {section.items.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div className="stack-item" key={tech.name}>
                    <Icon
                      size={28}
                      color={tech.color}
                      style={{ marginRight: "10px" }}
                    />

                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Skills };