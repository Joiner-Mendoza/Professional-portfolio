import "../../estilos/projects.css";

import projects from "../../data/projects.js";

import {ProjectCard} from "../ProjectCard/ProjectCard.jsx";

function Projects() {

    return (

        <section className="projects" id="projects">

            <h2>

                My <span>Projects</span>

            </h2>

            <p className="projects-description">

                Here are some of the projects I've developed using modern web technologies. Each one has helped me strengthen my skills in frontend, backend and full stack development.

            </p>

            <div className="projects-grid">

                {projects.map((project) => (

                    <ProjectCard

                        key={project.id}

                        project={project}

                    />

                ))}

            </div>

        </section>

    );

}

export  {Projects};    