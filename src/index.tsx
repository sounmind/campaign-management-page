import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import { CampaignProvier } from "./context";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

ReactDOM.render(
  <CampaignProvier>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </CampaignProvier>,
  document.getElementById("root")
);
