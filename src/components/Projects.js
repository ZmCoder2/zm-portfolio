import React from 'react';
import { Container, Row, Col, Tab } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import ProjectCard from "../components/ProjectCard"; // Import the updated ProjectCard component

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
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <ProjectCard isVisible={isVisible} /> {/* Pass isVisible prop to ProjectCard */}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


