import { useEffect, useState } from "react";
import "../../estilos/codewindow.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import cssFondo from "../../assets/Fondo.png";
// codigo que se va a mostrar en la ventana de código
const code = `class JoinerMendoza {

  constructor() {

    this.role = "Full Stack Developer";

    this.frontend = [
      "React",
      "Vue.js",
      "JavaScript",
      "Tailwind CSS"
    ];

    this.backend = [
      "Django REST",
      "Spring Boot",
      "Java"
    ];

    this.database = [   
      "MySQL",
      "SQLite"
    ];

    this.projects = [
      "ESFIM Platform",
      "System Turns Gestions",
      "System Appoiments",
      "Coffee Shop",
      "Battata Bit",
      "REST API For Countries",
      "Inventory Management",
    ];

    this.available = true;

  }

}
`;

function CodeWindow() {

    const [text, setText] = useState(""); 
    useEffect(() => {
        let index = 0; // el índice actual del carácter que se va a mostrar
        let deleting = false;
        const interval = setInterval(() => { // ejecuta la función cada 25 milisegundos
            if (!deleting) {
                setText(code.slice(0, index));
                index++;
                if (index > code.length) {
                    deleting = true;
                    // espera 2 segundos antes de empezar a borrar
                    setTimeout(() => {},2000);
                }
            }
            else{
                index--; // decrementa el índice para borrar el texto
                setText(code.slice(0,index)); // actualiza el estado con el texto recortado
                if(index===0){ // si el índice llega a 0, deja de borrar y vuelve a escribir
                    deleting=false; 
                }
            }
        },40);
        return ()=>clearInterval(interval);
    },[]);
    return(
        <div className="editor">
            <div className="editor-header">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
                <p>developer.js</p>
            </div>
           <div className="editor-content">
            <div className="editor-image">
                <img src={cssFondo} alt="Joiner Mendoza" />
            </div>
            <div className="editor-code">
                
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    showLineNumbers={true}
                    wrapLongLines={true}
                    customStyle={{
                        margin: 0,
                        padding: "20px",
                        background: "transparent",
                        minHeight: "500px",
                        fontSize: "15px"
                    }}
                >
                    
                    {text}
                </SyntaxHighlighter>

                <span className="cursor">▌</span>

            </div>



        </div>

        </div>
    )
}

export default CodeWindow;