import { useEffect, useState } from "react";
import "../../estilos/codewindow.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

    this.available = true;

  }

}
`;

function CodeWindow() {

    const [text, setText] = useState("");
    useEffect(() => {
        let index = 0;
        let deleting = false;
        const interval = setInterval(() => {
            if (!deleting) {
                setText(code.slice(0, index));
                index++;
                if (index > code.length) {
                    deleting = true;

                    setTimeout(() => {},2000);
                }
            }
            else{
                index--;
                setText(code.slice(0,index));
                if(index===0){
                    deleting=false;
                }
            }
        },25);
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

                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    showLineNumbers={true}
                    wrapLongLines={true}
                    customStyle={{
                        margin: 0,
                        padding: "20px",
                        background: "#1e1e1e",
                        minHeight: "500px",
                        fontSize: "15px"
                    }}
                >
                    {text}
                </SyntaxHighlighter>

                <span className="cursor">▌</span>

            </div>

        </div>
    )
}

export default CodeWindow;