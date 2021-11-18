import React, { useContext } from "react";
import styled from "styled-components";

import { CampaignInfoContext } from "../../context";

import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";
import ArrowLeft from "./icons/page-arrow-l.svg";
import ArrowRight from "./icons/page-arrow-r.svg";

const Wrapper = styled(Container)`
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const MoveButton = styled.button`
  width: 20px;
  height: 20px;
  object-fit: contain;
  border: 0;
  background-color: transparent;
  padding: 0;
`;

const PageButton = styled.button<{ currentPage: boolean }>`
  width: 24px;
  height: 24px;
  padding: 4px 9px 5px;
  border: 0;
  border-radius: 12px;
  font-size: 10px;

  ${({ currentPage, theme: { color } }) =>
    currentPage
      ? `background-color: ${color.black}; color: white`
      : `background-color: ${color.middleGrayBackground}; color: white`}
`;

interface PaginationProps {
  currentPage: number;
  handlePage: (page: number) => void;
}

const TOTAL_PAGINATION = 5;

const Pagination = ({ currentPage, handlePage }: PaginationProps) => {
  const campaignInfo = useContext(CampaignInfoContext);

  if (!campaignInfo) {
    return (
      <ErrorMessage>
        오류로 인하여 페이지 이동 버튼을 표시할 수 없습니다.
      </ErrorMessage>
    );
  }

  const maxPage = Math.ceil(campaignInfo.data.length / 10);
  const remained =
    currentPage % TOTAL_PAGINATION === 0
      ? TOTAL_PAGINATION
      : currentPage % TOTAL_PAGINATION;
  const [startPage, endPage] = [
    currentPage - remained + 1,
    Math.min(currentPage - remained + TOTAL_PAGINATION, maxPage),
  ];
  const pages = [];

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  return (
    <Wrapper>
      <MoveButton
        disabled={currentPage - 1 === 0}
        onClick={() => handlePage(currentPage - 1)}
        type="button"
      >
        <ArrowLeft />
      </MoveButton>

      {pages.map((pageNumber) => (
        <PageButton
          onClick={() => handlePage(pageNumber)}
          key={pageNumber}
          currentPage={pageNumber === currentPage}
        >
          {pageNumber}
        </PageButton>
      ))}

      <MoveButton
        disabled={currentPage === maxPage}
        onClick={() => handlePage(currentPage + 1)}
        type="button"
      >
        <ArrowRight />
      </MoveButton>
    </Wrapper>
  );
};

export default Pagination;
