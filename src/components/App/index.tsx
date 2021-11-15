import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import { getCampaignCountInfo, getCampaignInfo } from "../../api";
import CampaignContext from "../../context";
import { ICampaign } from "../../types";
import CampaignCountInfo from "../CampaignCountInfo";
import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import mockCampaignInfo from "../../mock/mockCampaignInfo";
import mockCampaignCountInfo from "../../mock/mockCampaignCountInfo";
import CampaignTable from "../CampaignTable";
import Pagination from "../Pagination";

const Main = styled(Container)`
  position: relative;
  background-color: white;
  padding: 40px 70px;
  width: 1060px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
`;

const initialCampaign = { status: "loading" };

const App = () => {
  const [campaign, setCampaign] = useState<ICampaign>(initialCampaign);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");

    const initializeCampaign = async () => {
      try {
        // TODO: CORS 해결한 뒤, 구현
        // const campaignInfo = await getCampaignInfo();
        // const campaignCountInfo = await getCampaignCountInfo();

        setCampaign({
          status: "success",
          data: {
            campaignInfo: mockCampaignInfo,
            campaignCountInfo: mockCampaignCountInfo,
          },
        });
      } catch (error) {
        console.log(error);
        setCampaign({ status: "fail" });
        setErrorMessage("캠페인 데이터를 가져오는데 오류가 발생했습니다.");
      }
    };

    initializeCampaign();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CampaignContext.Provider value={campaign}>
        <Container justifyContent="center">
          <Main flexDirection="column">
            <Title>캠페인 관리</Title>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <CampaignCountInfo />
            <CampaignTable />
            <Pagination />
          </Main>
        </Container>
      </CampaignContext.Provider>
    </ThemeProvider>
  );
};

export default App;
