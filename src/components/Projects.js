import React, { useState } from 'react';
import { GitHub, Launch, FolderOpen as FolderIcon } from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import '../styles/Projects.css';

const Projects = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Featured projects for carousel
    const spotlightProjects = [
        {
            title: 'tall tales',
            description: 'A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.',
            techStack: 'NODE.JS (SOCKET.IO) · REACT.JS · MONGODB',
            image: '/images/projects/project1.png',
            github: 'https://github.com',
            live: 'https://example.com',
        },
        {
            title: 'e-commerce platform',
            description: 'A full-featured e-commerce platform with product management, cart functionality, secure payment integration, and user authentication. Built with scalability and performance in mind.',
            techStack: 'NEXT.JS · POSTGRESQL · STRIPE · DOCKER',
            image: '/images/projects/project2.png',
            github: 'https://github.com',
            live: 'https://example.com',
        },
    ];

    // Other projects
    const projects = {
        "TDSB Homework Management Interface": {
            description: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
            techStack: 'Python (Flask) · Vue.js · Bootstrap · SQL',
            github: 'https://github.com',
            live: 'https://example.com',
        },
        "Adam A.I.": {
            description: 'A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.',
            techStack: 'Javascript · HTML / CSS',
            github: 'https://github.com',
            live: 'https://example.com',
        },
        "Distributed Logging and Monitoring System": {
            description: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
            techStack: 'Node.js (Express.js) · React.js · PostgreSQL',
            github: 'https://github.com',
        },
        "Odin Bot": {
            description: 'A Telegram bot that helps you excel on your daily tasks through Node NLP.',
            techStack: 'Javascript · Node.js · Natural NLP · Telegram API',
            github: 'https://github.com',
        },
        "Game Centre": {
            description: 'An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.',
            techStack: 'Java · Android Studio',
            github: 'https://github.com',
            live: 'https://example.com',
        },
        "Minimax Stonehenge": {
            description: 'Two-player, zero-sum game with a strategic Minimax artificial intelligence.',
            techStack: 'Python',
            github: 'https://github.com',
        },
    };

    const handleCarouselChange = (index) => {
        setActiveStep(index);
    };

    return (
        <section id="projects">
            <div className="section-header">
                <span className="section-title">/ pet projects</span>
            </div>

            {/* Featured Projects Carousel */}
            <div className="carousel-container">
                <Carousel
                    navButtonsAlwaysVisible={true}
                    animation="slide"
                    autoPlay={false}
                    indicators={false}
                    onChange={handleCarouselChange}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'rgba(10, 25, 47, 0.7)',
                            color: 'var(--green-bright)',
                            borderRadius: '50%',
                            padding: '5px',
                        }
                    }}
                >
                    {spotlightProjects.map((project, i) => (
                        <div key={i} className="carousel-slide">
                            <img
                                className="carousel-image"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="caption-bg">
                                <div className="carousel-caption">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p className="tech-stack">{project.techStack}</p>
                                    <div className="carousel-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <GitHub />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <Launch />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                {/* Custom indicators outside carousel but inside container */}
                <div className="custom-indicators">
                    {spotlightProjects.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator-item ${index === activeStep ? 'active' : ''}`}
                            onClick={() => setActiveStep(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Other Projects */}
            <div className="project-container">
                <ul className="projects-grid">
                    {Object.keys(projects).map((key, index) => (
                        <li key={index} className="projects-card">
                            <div className="card-header">
                                <div className="folder-icon">
                                    <FolderIcon style={{ fontSize: 35 }} />
                                </div>
                                <div className="card-links">
                                    <a
                                        href={projects[key].github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-icon"
                                    >
                                        <GitHub style={{ fontSize: 20 }} />
                                    </a>
                                    {projects[key].live && (
                                        <a
                                            href={projects[key].live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="open-icon"
                                        >
                                            <Launch style={{ fontSize: 20 }} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="card-title">{key}</div>
                            <div className="card-desc">{projects[key].description}</div>
                            <div className="card-tech">{projects[key].techStack}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects; 