import React from 'react';
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  console.log(project);
  // Remove isVisible prop from Card element
  return (
    <Card className="project-card mb-4 animate__animated animate__fadeIn">
      {project.video ? (
        <iframe
          src={project.video.replace("/view?usp=sharing", "/preview")}
          title={project.name}
          className="projVideo"
          allow="autoplay"
          allowFullScreen
        />
      ) : (
        <Card.Img variant="top" src={project.imageUrl} alt={project.name} />
      )}
      <Card.Body className="project-card-body">
        <div className="project-card-title">{project.name}</div>
        {/* <div className="project-card-description">{project.description}</div> */}
        <div className="project-card-buttons">
          <Button variant="primary" href={project.github}>Repo</Button>
          <Button variant="secondary" href={project.live}>Live</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;



