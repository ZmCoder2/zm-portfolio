import { Col } from "react-bootstrap";

export const ProjectCard = ({ name, videoUrl, description, github, live }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="poj-videobx">
                <iframe src={videoUrl} title={name} />
                <div className="poj-text">
                    <h4>{name}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}
