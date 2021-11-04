import { default as Img } from "react-bootstrap/Image";
// import Figure from "react-bootstrap/Figure";
import styled from "styled-components";

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
`;

const Image = (props) => {
  const { src, type, config } = props;

  return (
    <ImageContainer>
      <Img src={src} alt="Profile" {...type} {...config}></Img>
      {/* <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={src} />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure> */}
    </ImageContainer>
  );
};

Img.defaultProps = {
  type: "thumbnail",
};

export default Image;
