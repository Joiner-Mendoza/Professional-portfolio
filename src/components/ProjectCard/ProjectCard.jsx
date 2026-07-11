import "../../estilos/projectcard.css";

function ProjectCard({ project }) {

    return (

        <div className="project-card">

            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                    {project.technologies.map((tech) => (

                        <span key={tech}>
                            {tech}
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