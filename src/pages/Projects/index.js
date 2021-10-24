import { StackCardGroup, Title } from "@components/Components";
import styled from "styled-components";
import { projectData } from "./constants";

const ProjectsContainer = styled.div`
  padding: 50px;
`;

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <Title color="black">Projects</Title>
        <StackCardGroup data={projectData}></StackCardGroup>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
