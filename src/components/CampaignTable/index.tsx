import React, { useContext } from "react";
import styled from "styled-components";
import CampaignContext from "../../context";
import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import Loading from "../shared/Loading";

const Header = styled(Container)`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Item = styled.div<{ flex: number; textAlign: string }>`
  flex: ${({ flex }) => flex};
  text-align: ${({ textAlign }) => textAlign};
`;

const HeaderItem = styled(Item)``;

const Campaign = styled(Container)``;

const CampaignItem = styled(Item)``;

const CAMPAIGN_ITEMS = [
  "캠페인",
  "캠페인 유형",
  "인플루언서",
  "모집",
  "등록 콘텐츠",
  "보고서",
];

const CampaignTable = () => {
  const campaignContext = useContext(CampaignContext);

  if (campaignContext?.status === "Loading") {
    return <Loading />;
  }

  if (
    !campaignContext ||
    !campaignContext.data ||
    !campaignContext.data.campaignInfo
  ) {
    return <ErrorMessage>캠페인 정보를 불러올 수 없습니다.</ErrorMessage>;
  }

  const {
    data: { campaignInfo },
  } = campaignContext;

  return (
    <>
      <Header justifyContent="space-between">
        {CAMPAIGN_ITEMS.map((item) => {
          let [flex, textAlign] = [1, "center"];

          if (item === "캠페인") {
            flex = 2.5;
            textAlign = "left";
          }

          if (item === "캠페인 유형") {
            flex = 1.5;
            textAlign = "left";
          }

          return (
            <HeaderItem flex={flex} textAlign={textAlign} key={item}>
              {item}
            </HeaderItem>
          );
        })}
      </Header>
      {campaignInfo.data.map((campaign) => (
        <Campaign key={campaign._id} />
      ))}
    </>
  );
};

export default CampaignTable;
