import "../../estilos/skills.css";
import translations from "../../data/translations";

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


function Skills({ language }) {
  const t = translations[language];
  const stack = [
    {
      title: t.skills.frontend,
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
      title: t.skills.backend,
      items: [
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Django REST", icon: SiDjango, color: "#092E20" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" }
      ]
    },

    {
      title: t.skills.database,
      items: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" }
      ]
    },

    {
      title: t.skills.tools,
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
        {t.skills.title} <span>{t.skills.skill}</span>
      </h2>
    <p>{t.skills.description}</p>
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