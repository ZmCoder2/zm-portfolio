import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import austronautImg from "../assets/images/astronaut-programmer.png"



export const Banner = () => {
  const [text] = useTypewriter({
    words: [" Developer", " Software Engineer", " Programmer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            <h1 style={{ margin: "50px" }}>
          Hi! I'm Zack a 
          <span style={{ fontWeight: "bold", color: "#1C0056" }}>{text}</span>
          <span style={{ color: "white" }}>
            <Cursor cursorStyle="|" />
          </span>
        </h1>
            <p>Hey there, I'm Zackary Miller, but Zack works just fine! I'm a 27-year-old software engineer from Cumming, Georgia, with a passion for continuous learning and pushing the boundaries of technology. Every day, I dive into new coding challenges, explore the latest tech trends, and collaborate with fellow developers. Excited to see where this journey takes me!</p>
        </TrackVisibility>  
        </Col>
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={austronautImg} alt="Header Img" />
                </div>
                }
            </TrackVisibility>
        </Col>
        </Row>
      </Container>
    </section>
  );
};
