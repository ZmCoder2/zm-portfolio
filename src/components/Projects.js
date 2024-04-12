import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import ProjectCard from "../components/ProjectCard";
import projects from "../../src/projects.json";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some projects that I am proud of:</p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={6} key={index}>
                        <ProjectCard project={project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}





