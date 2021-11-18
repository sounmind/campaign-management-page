import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CampaignCountInfo from "../CampaignCountInfo";
import CampaignTable from "../CampaignTable";
import Pagination from "../Pagination";
import useCampaignDispatch from "../../hooks/useCampaignDispatch";
import { getCampaignCountInfo, getCampaignInfo } from "../../api";

import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import Loading from "../shared/Loading";

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

const App: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useCampaignDispatch();

  useEffect(() => {
    setErrorMessage("");

    const initializeCampaign = async () => {
      try {
        setIsLoading(true);

        const campaignInfo = await getCampaignInfo();
        const campaignCountInfo = await getCampaignCountInfo();

        dispatch({
          type: "UPDATE_CAMPAIGN",
          payload: { campaignInfo, campaignCountInfo },
        });
      } catch (error) {
        setErrorMessage("캠페인 데이터를 가져오는데 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    initializeCampaign();
  }, [dispatch]);

  return (
    <Container justifyContent="center">
      <Main flexDirection="column">
        <Title>캠페인 관리</Title>
        {isLoading && <Loading />}
        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          <>
            <CampaignCountInfo />
            <CampaignTable />
            <Pagination />
          </>
        )}
      </Main>
    </Container>
  );
};

export default App;
