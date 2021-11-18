import React from "react";
import styled from "styled-components";

import useCampaignState from "../../hooks/useCampaignState";

import Container from "../shared/Container";

const Wrapper = styled(Container)`
  gap: 10px;
  width: 100%;
  margin: 30px 0;
`;

const Content = styled(Container)`
  width: 180px;
  height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.lightGrayBackground};
  justify-content: space-between;
`;

const Name = styled.span`
  align-self: start;
  font-weight: bold;
  font-size: 14px;
`;

const Count = styled.span`
  align-self: end;
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
  font-size: 18px;
`;

const CampaignCountInfo: React.FC = () => {
  const { campaignCountInfo } = useCampaignState();

  const {
    data: {
      campaigns: {
        status: { ongoing, completed, registered },
      },
      influencers: {
        status: { selected },
      },
      reports,
    },
  } = campaignCountInfo;

  const info = {
    "진행 중인 캠페인": `${ongoing}개`,
    "완료된 캠페인": `${completed}개`,
    "등록 콘텐츠": `${registered}개`,
    "선발 인플루언서": `${selected}명`,
    보고서: `${reports}개`,
  };

  return (
    <Wrapper justifyContent="space-between">
      {Object.entries(info).map(([name, count]) => (
        <Content key={name}>
          <Name>{name}</Name>
          <Count>{count}</Count>
        </Content>
      ))}
    </Wrapper>
  );
};

export default CampaignCountInfo;
