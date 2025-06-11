import React from 'react';
import './styles/About.css';
function About() {
    return (
        <section id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p className="intro">
                    Hi, I'm Preksha Jain, a 4th-year Information Technology student at A.D. Patel Institute of Technology,
                    passionate about problem-solving, coding, and building impactful web applications.
                </p>
                <p className="details">
                    As an aspiring Full-Stack Developer with expertise in the MERN stack, I love crafting efficient,
                    user-friendly solutions that solve real-world challenges. I thrive on exploring new technologies,
                    competing in hackathons, and constantly improving my technical skills. My journey is driven by curiosity,
                    dedication, and a never-ending desire to grow.
                </p>
                <p className="details">
                    Beyond coding, I enjoy working on innovative projects, refining my DSA skills,
                    and applying my knowledge to practical applications. Whether it's leading a team, tackling a complex algorithm,
                    or optimizing a system, I always aim for excellence.
                </p>
                <p className="quote">
                    <em>“Passion, persistence, and problem-solving define my tech journey.”</em>
                </p>
            </div>
        </section>
    );
}


export default About;