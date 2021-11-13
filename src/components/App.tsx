import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Container from "./shared/Container";

const Main = styled(Container)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: red;
`;

const App = () => {
  return (
    <>
      <Main>Hello World</Main>
      <GlobalStyles />
    </>
  );
};

export default App;
