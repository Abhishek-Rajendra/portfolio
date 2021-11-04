import styled from "styled-components";
import { Title } from "@components/Components";
import { blogData, groupCardConfig } from "./constants";
import GroupCard from "@components/GroupCard";


const BlogContainer = styled.div`
  padding: 50px;
`;

const Blog = () => {
  return (
    <>
      <BlogContainer>
        <Title>Blog</Title>
        <GroupCard
          data={blogData}
          groupCardConfig={groupCardConfig}
        ></GroupCard>
      </BlogContainer>
    </>
  );
};

export default Blog;
