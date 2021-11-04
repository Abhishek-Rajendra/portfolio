import styled from "styled-components";
import { Title, StackCardGroup } from "@components/Components";
import researchData from "./constants";


const ResearchContainer = styled.div`
  padding: 50px;
`;

const Research = () => { 
  return (
    <>
      <ResearchContainer>
        <Title>Research</Title>
        <StackCardGroup data={researchData}></StackCardGroup>
      </ResearchContainer>
    </>
  );
};

export default Research;
