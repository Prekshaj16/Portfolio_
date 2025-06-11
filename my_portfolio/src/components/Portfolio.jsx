import React from 'react';
import './styles/Portfolio.css';
import { projects } from '../data/projects';

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>My Best Work</h2>
            <div className="projects">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;