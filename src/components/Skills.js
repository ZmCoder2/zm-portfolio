import { Col, Row } from "react-bootstrap";
import bootstrapImg from "../assets/images/bootstrap.png";
import cssImg from "../assets/images/css.png";
import javascriptImage from "../assets/images/Js.png";
import mongodbImg from "../assets/images/mongodb.png";
import nodeImg from "../assets/images/node.png";
import pythonImg from "../assets/images/python.png";
import reactImg from "../assets/images/react.png";
import sassImg from "../assets/images/sass.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skills-container">
        <Row className="row">
          <Col className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of my top skills:</p>
              <div className="wrapper">
                <div className="items">
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${bootstrapImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>Bootstrap</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${cssImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>CSS</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${javascriptImage})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>JavaScript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${mongodbImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>MongoDB</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${nodeImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>Node.js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage:`url(${pythonImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${reactImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>React.js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="item" tabIndex={0} style={{ backgroundImage: `url(${sassImg})`, width: '100px', height: '100px', filter: 'none' }}>
                    <div className="overlay">
                      <div className="item-info">
                        <h3>Sass</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};