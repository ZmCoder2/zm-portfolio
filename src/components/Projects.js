import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard"
import 'animate.css'
import TrackVisibility from "react-on-screen";
import projectsData from "../../src/projects.json"

export const Projects = () => {
    const myProjects = projectsData;

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some projects that I am proud of:</p>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    myProjects.map((project, index) => { // Change variable name from myProjects to project
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                name={project.title} // Pass individual project properties as props
                                                                videoUrl={project.videoUrl}
                                                                description={project.description}
                                                                github={project.github}
                                                                live={project.live}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
