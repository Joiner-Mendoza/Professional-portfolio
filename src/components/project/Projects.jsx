import "../../estilos/projects.css";
import { useState } from "react";
import projects from "../../data/projects.js";

import {ProjectCard} from "../ProjectCard/ProjectCard.jsx";
import translations from "../../data/translations.js";
function Projects({language}) {
    // manejo de estados para la anomacion de las cards
    const [active, setActive] = useState(0);
    const total = projects.length;
    const left = (active - 1 + total) % total; // índice de la card a la izquierda
    const right  = (active + 1 ) % total; // indice de la card a la derecha
    
    const t = translations[language];

    return (

        <section className="projects" id="projects">

            <h2>

                {t.projects.title} <span>Projects</span>

            </h2>

            <p className="projects-description">

                {t.projects.description}

            </p>

            <div className="projects-grid">
                {projects.map((project,index) => {
                    let position = "hidden"; // posición por defecto

                    if (index === active) {
                        position = "center"; // si es la card activa
                    }else if (index === left){
                        position = "left"; // si es la card a la izquierda
                    }else if (index === right){
                        position = "right"; // si es la card a la derecha
                    }
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            position={position}
                            language={language}
                            onClick={() => setActive(index)} // al hacer click, se activa la card correspondiente
                        />
                    );
                })}

            </div>

        </section>

    );

}

export  {Projects};    