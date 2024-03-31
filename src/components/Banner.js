import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';



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
        </TrackVisibility>  
        </Col>
        </Row>
      </Container>
    </section>
  );
};
