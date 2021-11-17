import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import { getCampaignCountInfo, getCampaignInfo } from "../../api";
import CampaignCountInfo from "../CampaignCountInfo";
import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import mockCampaignInfo from "../../mock/mockCampaignInfo";
import mockCampaignCountInfo from "../../mock/mockCampaignCountInfo";
import CampaignTable from "../CampaignTable";
import Pagination from "../Pagination";
import Loading from "../shared/Loading";
import { CampaignCountInfoContext, CampaignInfoContext } from "../../context";
import { ICampaignCountInfo, ICampaignInfo } from "../../types";

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

const App = () => {
  const [info, setInfo] = useState<null | {
    campaignCountInfo: ICampaignCountInfo;
    campaignInfo: ICampaignInfo;
  }>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setErrorMessage("");

    const initializeCampaign = async () => {
      try {
        setIsLoading(true);
        // const campaignInfo = await getCampaignInfo();
        // const campaignCountInfo = await getCampaignCountInfo();

        const campaignInfo = mockCampaignInfo;
        const campaignCountInfo = mockCampaignCountInfo;

        setInfo({ campaignInfo, campaignCountInfo });
      } catch (error) {
        setErrorMessage("캠페인 데이터를 가져오는데 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    initializeCampaign();
  }, []);

  const handlePage = (number: number) => {
    setPage(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isLoading ? (
        <Loading />
      ) : (
        info && (
          <CampaignInfoContext.Provider value={info.campaignInfo}>
            <CampaignCountInfoContext.Provider value={info.campaignCountInfo}>
              <Container justifyContent="center">
                <Main flexDirection="column">
                  <Title>캠페인 관리</Title>
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                  <CampaignCountInfo />
                  <CampaignTable page={page} />
                  <Pagination page={page} handlePage={handlePage} />
                </Main>
              </Container>
            </CampaignCountInfoContext.Provider>
          </CampaignInfoContext.Provider>
        )
      )}
    </ThemeProvider>
  );
};

export default App;
