import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../estilos/navbar.css";
import translations from "../../data/translations";

function Navbar({ language }) {

const t = translations[language];
const [openMenu, setOpenMenu] = useState(false);

const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if(section){
        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    }

    setOpenMenu(false);
};

return(
<nav className="Nav_Container">

    <div className="Logo">
        <h1>JMV</h1>
    </div>


    <ul className="Nac_Container-ul">

        {routes.map(route=>(
            <li key={route.to}>
                <NavLink
                to="/"
                onClick={(e)=>{
                    e.preventDefault();

                    const sectionId =
                    route.to === "/"
                    ? "home"
                    : route.to.replace("/","").toLowerCase();

                    scrollToSection(sectionId);
                }}
                >
                    {t.navbar[route.key]}
                </NavLink>
            </li>
        ))}

    </ul>


    <button 
    className="menu-button"
    onClick={()=>setOpenMenu(!openMenu)}
    >
        ☰
    </button>


    <div className={`mobile-menu ${openMenu ? "show" : ""}`}>

        <button 
        className="close-button"
        onClick={()=>setOpenMenu(false)}
        >
            ✕
        </button>


        <ul>

            {routes.map(route=>(
                <li key={route.to}>

                    <NavLink
                    to="/"
                    onClick={(e)=>{
                        e.preventDefault();

                        const sectionId =
                        route.to === "/"
                        ? "home"
                        : route.to.replace("/","").toLowerCase();

                        scrollToSection(sectionId);
                    }}
                    >

                    {t.navbar[route.key]}

                    </NavLink>

                </li>
            ))}

        </ul>

    </div>


</nav>
)

}


const routes = [
{
to:"/",
key:"home"
},
{
to:"/About",
key:"about"
},
{
to:"/Skills",
key:"skills"
},
{
to:"/Projects",
key:"projects"
},
{
to:"/Contact",
key:"contact"
}
];


export { Navbar };