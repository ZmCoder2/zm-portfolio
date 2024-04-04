import React from 'react';
import { Card, Button } from "react-bootstrap";

// Import projectsData from projects.json
import projectsData from "../../src/projects.json";

const ProjectCard = ({ isVisible }) => {
    return (
        <>
            {projectsData.map((project, index) => (
                <Card key={index} className={`mb-4 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    {project.videoUrl ? (
                        <iframe
                            src={project.videoUrl.replace("/view?usp=sharing", "/preview")}
                            title={project.name}
                            className="projVideo"
                            allow="autoplay"
                            allowFullScreen
                        />
                    ) : (
                        <Card.Img variant="top" src={project.videoUrl} alt={project.name} />
                    )}
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <div>
                            <Button variant="primary" href={project.github}>Repo</Button>
                            <Button variant="secondary" href={project.live}>Live</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default ProjectCard;

