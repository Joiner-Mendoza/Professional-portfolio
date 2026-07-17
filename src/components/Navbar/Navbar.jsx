// import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../estilos/navbar.css';
// import iconMenu from './assets/icon-menu.svg'
// import closeIconMenu from './assets/icon-close.svg'

function Navbar() {

    const menuHamburguesa = document.querySelector('.Icon-menu ');
    const closeIconMenuAndroip = document.querySelector('.Icon-Close');
    const menuAndroip = document.querySelector('.Nav_Container_Menu-Androip');

    document.addEventListener('DOMContentLoaded', () => {

        menuHamburguesa.addEventListener('click', (event) => {
            event.preventDefault();
            menuAndroip.classList.add('active')
        });

        closeIconMenuAndroip.addEventListener('clik', (event) => {
            event.preventDefault();
            menuAndroip.classList.toggle('inactive');
        });

    });

    // Scroll suave
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="Nav_Container">
            <ul className="Logo">
                <h1>JMV</h1>
            </ul>

            <ul className="Nac_Container-ul">

                {routes.map(route => (
                    <li className="Nav_Container-ul-li" key={route.to}>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "#00abf0" : "#ffffff"
                            })}
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();

                                const sectionId =
                                    route.to === "/"
                                        ? "home"
                                        : route.to.replace("/", "").toLowerCase();

                                scrollToSection(sectionId);
                            }}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}

            </ul>

            {/* esto que esta comentado era el menu en androip pero me salia un eror al momento de darle al boton de menu */}

            <img
                src={menuHamburguesa}
                alt="icon Menu"
                className="Icon-menu inactive"
                onClick={menuHamburguesa}
            />

            <div className="Nav_Container_Menu-Androip inactive">

                <div className="Menu-Androip">

                    <img
                        src={closeIconMenuAndroip}
                        alt="Icon-Close"
                        className="Icon-Close inactive"
                        onClick={closeIconMenuAndroip}
                    />

                    <ul className="Nav_Container_Menu-Androip-ul">

                        {routes.map(route => (
                            <li
                                className="Nav_Container-Androip-ul-li"
                                key={route.to}
                            >

                                <NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#00abf0" : "#ffffff",
                                        padding: isActive ? "0" : "",
                                    })}
                                    to="/"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        const sectionId =
                                            route.to === "/"
                                                ? "home"
                                                : route.to.replace("/", "").toLowerCase();

                                        scrollToSection(sectionId);
                                    }}
                                >
                                    {route.text}
                                </NavLink>

                            </li>
                        ))}

                    </ul>

                </div>

            </div>

        </nav>
    );
}

const routes = [];

routes.push({
    to: '/',
    text: 'Hero',
});

routes.push({
    to: '/About',
    text: 'About'
});

routes.push({
    to: '/Skills',
    text: 'Skills'
});

routes.push({
    to: '/Projects',
    text: 'Projects'
});

routes.push({
    to: '/Contact',
    text: 'Contact'
});

export { Navbar };