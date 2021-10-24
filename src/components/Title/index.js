// import styled from "styled-components";

// const TitleContainer = styled.div`
//   padding: 10px;
// `;

const Title = (props) => {
  const { children, textStyle } = props;
  return (
    <>
      <h1 style={textStyle}>{children}</h1>
      <hr />
    </>
  );
};

export default Title;
