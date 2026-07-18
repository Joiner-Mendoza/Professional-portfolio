import "./App.css";
import { useState } from "react";

import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/project/Projects";

function App() {

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );


    const changeLanguage = () => {

        const newLanguage = language === "en" ? "es" : "en";

        setLanguage(newLanguage);

        localStorage.setItem(
            "language",
            newLanguage
        );

    };


    return (
        <>

            <button
                className="language-btn"
                onClick={changeLanguage}
            >
                🌐 {language === "en" ? "ES" : "EN"}
            </button>


            <HashRouter>

                <Navbar language={language}/>

                <Hero language={language}/>


                <section id="about">
                    <About language={language}/>
                </section>


                <section id="skills">
                    <Skills language={language}/>
                </section>


                <section id="projects">
                    <Projects language={language}/>
                </section>


                <section id="contact">
                    <Contact language={language}/>
                </section>


            </HashRouter>

        </>
    );
}


export default App;