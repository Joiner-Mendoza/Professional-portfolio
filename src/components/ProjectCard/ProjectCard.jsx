import "../../estilos/projectcard.css";

function ProjectCard({ project,position,onClick,language }) {

    return (

        <div
            className={`project-card ${position}`}
            onClick={onClick}
        >
            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />
            <div className="project-content">
                <h3>{project.title[language]}</h3>
                <p>{project.description[language]}</p>
                <div className="project-tech">

                    {project.technologies.map((tech, index) => (

                        <span key={index} className="tech-badge" title={tech.name}>
                            {/* Si el proyecto incluye un icono, lo renderizamos aquí */}
                            {tech.icon && <tech.icon className="tech-icon" style={{ marginRight: '5px', verticalAlign: 'middle' }} />}
                            {tech.name}
                        </span>

                    ))}

                </div>

                <div className="project-buttons">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

}

export  { ProjectCard };