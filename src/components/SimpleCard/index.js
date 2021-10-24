import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardContainer = styled.div`
  :hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06);
  }
`;

const SimpleCard = (props) => {
  const { src, header, title, body, footer, cardConfig, isVideo } = props;

  var { headerConfig, footerConfig, srcConfig } = props;

  const cardImage = (isVideo, src, srcConfig) => {
    if (src)
      return (
        (isVideo && <video src={src} {...srcConfig}></video>) || (
          <Card.Img src={src} {...srcConfig} />
        )
      );
  };

  const cardHeader = (header, headerConfig) => {
    return (
      header && (
        <Card.Header
          {...headerConfig}
          dangerouslySetInnerHTML={{ __html: header }}
        ></Card.Header>
      )
    );
  };

  const cardFooter = (footer, footerConfig) => {
    return (
      footer && (
        <Card.Footer
          {...footerConfig}
          dangerouslySetInnerHTML={{ __html: footer }}
        ></Card.Footer>
      )
    );
  };

  const cardTitle = (title) => {
    return (
      title && (
        <Card.Title dangerouslySetInnerHTML={{ __html: title }}></Card.Title>
      )
    );
  };

  return (
    <CardContainer>
      <Card {...cardConfig}>
        {cardHeader(header, headerConfig)}
        {cardImage(isVideo, src, srcConfig)}
        <Card.Body>
          {cardTitle(title)}
          <Card.Text dangerouslySetInnerHTML={{ __html: body }}></Card.Text>
        </Card.Body>
        {cardFooter(footer, footerConfig)}
      </Card>
    </CardContainer>
  );
};

export default SimpleCard;
