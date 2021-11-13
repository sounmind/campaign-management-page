import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    background-color: #f5f5f5;
    padding: 60px 430px;
  }
`;

export default GlobalStyles;
