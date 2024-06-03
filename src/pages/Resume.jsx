import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


export default function Resume() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/resume');
    }, []);

    return (
        <div>

            <a href="/resume.pdf" download className="download">Click Here To Download Resume</a>
            <h3>My Proficiencies</h3>
            <ul className="Proficiencies">
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>PostgresSQl</li>
                <li>GitHub</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Handlebars</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
            </ul>
        </div>
    )

}