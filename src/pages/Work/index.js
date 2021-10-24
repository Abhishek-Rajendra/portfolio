import styled from "styled-components";
import { StackCardGroup, Title } from "@components/Components";
import { workData } from "./constants";

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
