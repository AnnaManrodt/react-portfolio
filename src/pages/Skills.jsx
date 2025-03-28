import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import '../css/skills.css'

export default function Resume() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/resume');
    }, []);

    return (
        <div>

            <h3 className="prof-title" >My Proficiencies</h3>
            <ul className="proficiencies">
                <div className="container1">
                    <div className="prof-category">
                        <h4 className="category-title">Languages</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>C#</li>
                        </ul>
                    </div>

                    <div className="prof-category">
                        <h4 className="category-title">Databases</h4>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    <div className="prof-category">
                        <h4 className="category-title">Frameworks & Libraries</h4>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Handlebars</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>React Leaflet</li>
                            <li>React Hook Form</li>
                            <li>Tan Stack React Query</li>
                            <li>Material UI</li>
                        </ul>
                    </div>
                </div>
                <div className="container1">
                    <div className="prof-category">
                        <h4 className="category-title">Tools & Platforms</h4>
                        <ul>
                            <li>GitHub</li>
                            <li>Azure DevOps</li>
                            <li>SSAS</li>
                            <li>Firebase</li>
                            <li>CMS (Umbraco)</li>
                        </ul>
                    </div>

                    <div className="prof-category">
                        <h4 className="category-title">Other Skills</h4>
                        <ul>
                            <li>Elementary level ASL (American Sign Language)</li>
                            <li>CMS (Content Management Systems, Umbraco)</li>
                            <li>Problem-Solving</li>
                            <li>Collaboration & Teamwork</li>
                            <li>Conflict Resolution</li>
                            <li>Creativity</li>
                        </ul>
                    </div>
                </div>
            </ul>
            {/* <a href="/resume.pdf" download className="download">Click Here To Download Resume</a> */}
        </div>
    )

}