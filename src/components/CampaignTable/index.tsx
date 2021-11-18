import React from "react";
import styled from "styled-components";

import useCampaignState from "../../hooks/useCampaignState";
import { CampaignMediaType } from "../../types";

import Button from "../shared/Button";
import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import BlogIcon from "./icons/ic-blog.svg";
import InstagramIcon from "./icons/ic-insta.svg";

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

const CampaignList = styled(Container)`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Campaign = styled(Container)`
  width: 100%;
  height: 100px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.grayWhite};
  border-bottom: 1px solid ${({ theme }) => theme.color.grayWhite};
`;

const CampaignItem = styled(Container)<{
  flex?: number;
  textAlign?: string;
  fontSize?: string;
  gap?: string;
}>`
  ${({ flex, textAlign, fontSize, gap }) =>
    `flex: ${flex}; textAlign: ${textAlign}; fontSize: ${fontSize}; gap: ${gap}`}
`;

const CAMPAIGN_ITEMS = [
  "캠페인",
  "캠페인 유형",
  "인플루언서",
  "모집",
  "등록 콘텐츠",
  "보고서",
];

const ITEM_COUNT_PER_PAGE = 10;

const CampaignTable = () => {
  const { currentPageNumber, campaignInfo } = useCampaignState();

  const campaigns = campaignInfo.data.slice(
    (currentPageNumber - 1) * ITEM_COUNT_PER_PAGE,
    currentPageNumber * ITEM_COUNT_PER_PAGE
  );

  const printCampaignType = (text: CampaignMediaType) => {
    if (text === "blog") {
      return (
        <>
          <BlogIcon />
          블로그
        </>
      );
    }

    if (text === "instagram") {
      return (
        <>
          <InstagramIcon />
          인스타그램
        </>
      );
    }

    return <ErrorMessage>잘못된 캠페인 유형: {text}</ErrorMessage>;
  };

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
            <Item flex={flex} textAlign={textAlign} key={item}>
              {item}
            </Item>
          );
        })}
      </Header>

      <CampaignList flexDirection="column">
        {campaigns.map(({ _id: id, title, reqruitCounts, type: { text } }) => (
          <Campaign justifyContent="space-between" key={id}>
            <CampaignItem flex={2.5} fontSize="15px">
              {title}
            </CampaignItem>
            <CampaignItem flex={1.5} fontSize="15px" gap="8px">
              {printCampaignType(text)}
            </CampaignItem>
            <CampaignItem justifyContent="center" flex={1} textAlign="center">
              <Button background="black">선발하기</Button>
            </CampaignItem>
            <CampaignItem
              justifyContent="center"
              flex={1}
              textAlign="center"
              fontSize="15px"
            >
              {reqruitCounts}명
            </CampaignItem>
            <CampaignItem justifyContent="center" flex={1} textAlign="center">
              <Button background="white">확인</Button>
            </CampaignItem>
            <CampaignItem justifyContent="center" flex={1} textAlign="center">
              <Button background="white">확인</Button>
            </CampaignItem>
          </Campaign>
        ))}
      </CampaignList>
    </>
  );
};

export default CampaignTable;
