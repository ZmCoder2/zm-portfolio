import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel"; may use this but just gonna keep it how it is
import bootstrapImg from "../assets/images/bootstrap.png";
import cssImg from "../assets/images/css.png";
import javascriptImage from "../assets/images/Js.png";
import mongodbImg from "../assets/images/mongodb.png";
import nodeImg from "../assets/images/node.png";
import pythonImg from "../assets/images/python.png";
import reactImg from "../assets/images/react.png";
import sassImg from "../assets/images/sass.png";

export const Skills = () => {
    const responsive = {
        largerDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5 
        },
        pc: {
            breakpoin: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        phone: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

  return (
    <section className="skill" id="skills">
      <div className="skills-container">
        <Row className="row">
          <Col className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="skills-header">Skills</h2>
              <p className="skills-text">Here are some of my top skills:</p>
              <div className="wrapper">
                <div className="items">
                  <SkillItem src={bootstrapImg} title="Bootstrap" />
                  <SkillItem src={cssImg} title="CSS" />
                  <SkillItem src={javascriptImage} title="JavaScript" />
                  <SkillItem src={mongodbImg} title="MongoDB" />
                  <SkillItem src={nodeImg} title="Node.js" />
                  <SkillItem src={pythonImg} title="Python" />
                  <SkillItem src={reactImg} title="React.js" />
                  <SkillItem src={sassImg} title="Sass" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

const SkillItem = ({ src, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="item" tabIndex={0} style={{ backgroundImage: `url(${src})`, width: '100px', height: '100px', filter: 'none' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="item-info">
        {isHovered && <h3 className="item-title">{title}</h3>}
      </div>
    </div>
  );
};