import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';

export default function Nav() {
    const [setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const id = section.id;
                const offset = section.getBoundingClientRect().top;
                if (offset < window.innerHeight / 2) {
                    setCurrentSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/aboutme">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};