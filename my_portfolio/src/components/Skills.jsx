import React from 'react';
import './styles/Skills.css';

function Skills() {
    const skills = [
        { name: 'HTML', logo: 'images/html-logo.png' },
        { name: 'CSS', logo: 'images/css-logo.jpeg' },
        { name: 'JavaScript', logo: 'images/javascript-logo.png' },
        { name: 'React', logo: 'images/reactJs-logo.png' },
        { name: 'Node.js', logo: 'images/nodeJs-logo.png' },
        { name: 'MongoDB', logo: 'images/mongoDb-logo.png' },
        { name: 'SQL', logo: 'images/SQL-logo.png' }
    ];

    return (
        <section id="skills">
            <div class="skills-content">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill => (
                        <li key={skill.name}>
                            <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;

