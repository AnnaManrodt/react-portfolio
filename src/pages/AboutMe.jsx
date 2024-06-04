import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function AboutMe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/aboutme');
    }, []);

    return (
        <div>
            <img className="profileImg" src="/imgs/IMG_6222-min.JPG" alt="Img of me" />
            <p className="textContent">
            Highly skilled junior developer with experience in special education and
psychology to provide a unique perspective on web development. Earned a
certificate in Full Stack Web Development from the University of
Minnesota Coding Boot Camp. Innovative problem solver with a passion
for healthcare and data analytics focusing on web application and
database management. Strengths in creativity, teamwork, and building
projects from ideation to execution.

            </p>
        </div>
    )
}