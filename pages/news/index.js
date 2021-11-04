import styled from "styled-components";
import { SimpleTable, Title } from "@components/Components";
import { newsData, tableConfig } from "./constants";

const NewsContainer = styled.div`
  padding: 50px;
`;

const News = () => {
  return (
    <>
      <NewsContainer>
        <Title>News</Title>
        <SimpleTable data={newsData} tableConfig={tableConfig}></SimpleTable>
      </NewsContainer>
    </>
  );
};

export default News;
