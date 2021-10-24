import { Stack } from "react-bootstrap";

import SimpleCard from "@components/SimpleCard";

const StackCardGroup = (props) => {
  const { data } = props;

  return (
    <Stack gap={4}>
      {data.map((cardData, index) => (
        <SimpleCard
          key={index}
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
      ))}
    </Stack>
  );
};

export default StackCardGroup;
