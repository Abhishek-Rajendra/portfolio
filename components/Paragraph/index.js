import styled from "styled-components";

const ParagraphContainer = styled.div`
  padding: 10px;
  display: "flex";
  justifycontent: "center";
  alignitems: "center";
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const Paragraph = (props) => {

  const { data } = props;
  return (
    <>
      <ParagraphContainer>
        <TextContainer>
          <p dangerouslySetInnerHTML={{ __html: data }}></p>
        </TextContainer>
      </ParagraphContainer>
    </>
  );
};

export default Paragraph;
