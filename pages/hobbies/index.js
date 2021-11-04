import styled from "styled-components";
import { Title, GroupCard } from "@components/Components";
import { artData, groupCardConfig } from "./constant";

const HobbiesContainer = styled.div`
  padding: 50px;
`;

const Hobbies = () => {
  return (
    <>
      <HobbiesContainer>
        <Title>Art</Title>
        <GroupCard data={artData} groupCardConfig={groupCardConfig}></GroupCard>
      </HobbiesContainer>
    </>
  );
};

export default Hobbies;
