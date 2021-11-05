import styled from "styled-components";
import { StackCardGroup, Title, Navigation } from "@components/Components";
import { workData } from "@constants/work";

const WorkContainer = styled.div`
  padding: 50px;
`;

const Work = () => {
  return (
    <>
      <WorkContainer>
        <Title>Work</Title>
        <StackCardGroup data={workData}></StackCardGroup>
      </WorkContainer>
    </>
  );
};

export default Work;
