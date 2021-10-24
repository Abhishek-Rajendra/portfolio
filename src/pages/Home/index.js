import abhishek from "@assets/abhishek.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Image, Paragraph, Title } from "@components/Components";
import styled from "styled-components";
import { aboutMe } from "./constants";

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
        <Title>Welcome to Abhishek's Website!!</Title>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              <Paragraph data={aboutMe}></Paragraph>
            </Col>
            <Col xs={6} md={4}>
              <Image src={abhishek} {...options}></Image>
            </Col>
          </Row>
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;
