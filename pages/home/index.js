import abhishek from "@assets/abhishek.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Image, Paragraph, Title } from "@components/Components";
import styled from "styled-components";
import aboutMe from "@constants/home";

// import Abhishek_Rajendra_MSCS from "@assets/Abhishek_Rajendra_MSCS.pdf";
// import Abhishek_Rajendra_MSCS_ML from "@assets/Abhishek_Rajendra_MSCS_ML.pdf";

const HomeContainer = styled.div`
  padding: 50px;
`;

const Home = () => {
  const options = {
    config: {
      thumbnail: true,
    },
  };
  return (
    <>
      <HomeContainer>
        <Title>Welcome to Abhishek&apos;s Website!!</Title>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              <Paragraph data={aboutMe}></Paragraph>
              <a href="assets/Abhishek_Rajendra_MSCS.pdf" target="_blank" rel="noreferrer">Resume for Software Engineer</a>
              <br></br>
              <a href="assets/Abhishek_Rajendra_MSCS_ML.pdf" target="_blank" rel="noreferrer">Resume for Data Science/ML/Research</a>
            </Col>
            <Col xs={6} md={4}>
              <Image src={abhishek} alt="Profile Photo" {...options}></Image>
            </Col>
          </Row>
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;
