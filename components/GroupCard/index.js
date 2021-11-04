import { Row, Col } from "react-bootstrap";

import SimpleCard from "@components/SimpleCard";

const GroupCard = (props) => {
  const { data, groupCardConfig } = props;

  return (
    <Row {...groupCardConfig}>
      {data.map((cardData, index) => (
        <Col key={index}>
          <SimpleCard
            cardConfig={cardData.cardConfig}
            header={cardData.header}
            headerConfig={cardData.headerConfig}
            isVideo={cardData.isVideo}
            src={cardData.src}
            srcConfig={cardData.srcConfig}
            title={cardData.title}
            body={cardData.body}
            footer={cardData.footer}
            footerConfig={cardData.footerConfig}
          />
        </Col>
      ))}
    </Row>
  );

  //   return (
  //     <Stack gap={4}>
  //       {data.map((cardData, index) => (
  //         <SimpleCard
  //           key={index}
  //           cardConfig={cardData.cardConfig}
  //           header={cardData.header}
  //           headerConfig={cardData.headerConfig}
  //           isVideo={cardData.isVideo}
  //           src={cardData.src}
  //           srcConfig={cardData.srcConfig}
  //           title={cardData.title}
  //           body={cardData.body}
  //           footer={cardData.footer}
  //           footerConfig={cardData.footerConfig}
  //         />
  //       ))}
  //     </Stack>
  //   );
};

export default GroupCard;
