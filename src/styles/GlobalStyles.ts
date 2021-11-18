import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    padding: 50px 100px;
    background-color: ${({ theme }) => theme.color.background};
    font-family: Noto Sans KR;
  }
`;

export default GlobalStyles;
