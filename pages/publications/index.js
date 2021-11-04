import { Title } from "@components/Components";
import GroupCard from "@components/GroupCard";
import styled from "styled-components";
import { publicationData, groupCardConfig } from "./constants";

const PublicationContainer = styled.div`
  padding: 50px;
`;

const Publication = () => {
  return (
    <>
      <PublicationContainer>
        <Title>Publications</Title>
        <GroupCard
          data={publicationData}
          groupCardConfig={groupCardConfig}
        ></GroupCard>
      </PublicationContainer>
    </>
  );
};

export default Publication;
