import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import '../css/aboutme.css'
import { Typography } from "@mui/material";
export default function AboutMe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/aboutme');
    }, []);

    return (
        <div>
            <img className="profileImg" src="/imgs/IMG_6222-min.JPG" alt="Img of me" />
            <div>
                <Typography>About Me</Typography>
                <Typography className="textContent">
                    Hello! I'm Anna Thompson, a passionate <b>Full Stack Developer</b> based in Crystal, MN. With a unique background in special education and psychology, I bring a different perspective to web development. I recently graduated from the <b>University of Minnesota Full Stack Development Bootcamp</b>, where I gained hands-on experience in front-end and back-end development. I also am working towards my <b>BS in Computer science</b> at <b>Southern New Hampshire University</b> and I’m excited to continue learning and growing in this ever-evolving field.
                    <br />
                    I have a strong interest in <b>healthcare, data analytics</b>, and web <b>application development</b>, and I love solving complex problems with innovative solutions. Whether I’m building user-friendly web interfaces or managing databases, I focus on creating seamless, impactful experiences.
                    <br />
                    In addition to my technical expertise, I value <b>creativity, teamwork</b>, and <b>collaboration</b> These skills were honed during my time working in the special education sector, where I learned how to effectively communicate, empathize, and solve problems creatively—skills that I now apply to my development projects
                </Typography>
            </div>
            <div>
                <Typography>My Journey</Typography>
                <Typography>
                    Throughout my career, I've blended my passion for teaching, helping kids, and problem-solving with my love for technology. Growing up, I was always fascinated by how things worked—especially in the world of video games. I spent countless hours exploring the mechanics behind my favorite games, and that curiosity led me to dive into coding. To me, coding felt like the perfect combination of my passions: learning how things work, solving problems, and creating something fun and functional.
                    <br />
                    I have a deep passion for math and science, which I've carried throughout my life. This passion drives me to understand complex concepts and break them down in ways that are engaging and accessible to others. Whether I was tutoring classmates or leading a coding workshop, I found joy in helping others grasp difficult topics and seeing that "aha" moment when things clicked for them. This love for teaching and helping others led me to pursue a role as a Coding Instructor at Coco Coders, where I use my skills to inspire and empower the next generation of developers.
                    <br />
                    My time as a Special Education Paraprofessional further deepened my commitment to making a difference in people's lives. Working with students to create Individualized Education Plans (IEPs) taught me the importance of patience, empathy, and creativity in problem-solving. These are the same qualities I apply to my development projects, where I strive to create user-friendly applications that help people achieve their goals.
                </Typography>
            </div>
            <div>
                <Typography>My Philosophy</Typography>
                <Typography>
                    I believe in the power of teamwork and collaboration. No project is completed alone, and every developer brings a unique perspective to the table. I take pride in being a strong communicator, a creative thinker, and an eager learner, always ready to adapt and improve.
                    <br />
                    I’m passionate about using my technical skills to solve real-world problems and make a positive impact. Whether I’m working on personal projects or collaborating with a team, my goal is to build innovative solutions that help make the world a better place.
                </Typography>
            </div>
            <div>
                <Typography>Let's Connect!</Typography>
                <Typography>
                    I’m always looking for new opportunities to grow and learn. Feel free to reach out to me through the contact form, or connect with me on
                    <a href="https://www.linkedin.com/in/anna-thompson-515184307/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or
                    <a href="https://github.com/annamanrodt" target="_blank" rel="noopener noreferrer"> GitHub</a>. Let’s create something amazing together!
                </Typography>
            </div>
        </div>
    )
}