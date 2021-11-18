import React, { useContext } from "react";
import styled from "styled-components";

import { CampaignInfoContext } from "../../context";

import Button from "../shared/Button";
import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";

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

const Campaign = styled(Container)`
  width: 100%;
  height: 100px;
  align-items: center;
`;

const CAMPAIGN_ITEMS = [
  "캠페인",
  "캠페인 유형",
  "인플루언서",
  "모집",
  "등록 콘텐츠",
  "보고서",
];

interface CampaignTableProps {
  page: number;
}

const CampaignTable = ({ page }: CampaignTableProps) => {
  const campaignInfoContext = useContext(CampaignInfoContext);

  if (!campaignInfoContext || !campaignInfoContext.data) {
    return <ErrorMessage>캠페인 정보를 불러올 수 없습니다.</ErrorMessage>;
  }

  const campaigns = campaignInfoContext.data.slice(
    (page - 1) * 10,
    (page - 1) * 10 + 10
  );

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

      {campaigns.map(({ _id: id, title, reqruitCounts, type: { text } }) => (
        <Campaign justifyContent="space-between" key={id}>
          <div style={{ flex: 2.5, fontSize: "15px" }}>{title}</div>
          <div style={{ display: "flex", flex: 1.5, fontSize: "15px" }}>
            {text}
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <Button background="black">선발하기</Button>
          </div>
          <div style={{ flex: 1, textAlign: "center", fontSize: "15px" }}>
            {reqruitCounts}명
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <Button background="white">확인</Button>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <Button background="white">확인</Button>
          </div>
        </Campaign>
      ))}
    </>
  );
};

export default CampaignTable;
