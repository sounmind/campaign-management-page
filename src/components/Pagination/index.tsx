import React, { useContext } from "react";
import styled from "styled-components";

import { CampaignInfoContext } from "../../context";

import Container from "../shared/Container";
import ErrorMessage from "../shared/ErrorMessage";

const Wrapper = styled(Container)`
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const MoveButton = styled.button`
  width: 20px;
  height: 20px;
  object-fit: contain;
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
  page: number;
  handlePage: (page: number) => void;
}

const TOTAL_PAGINATION = 5;

const Pagination = ({ page, handlePage }: PaginationProps) => {
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
    page % TOTAL_PAGINATION === 0 ? TOTAL_PAGINATION : page % TOTAL_PAGINATION;
  const [startPage, endPage] = [
    page - remained + 1,
    Math.min(page - remained + TOTAL_PAGINATION, maxPage),
  ];
  const pages = [];

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  return (
    <Wrapper>
      <MoveButton
        direction="left"
        disabled={page - 1 === 0}
        onClick={() => handlePage(page - 1)}
        type="button"
      >
        prev
      </MoveButton>

      {pages.map((pageNumber) => (
        <PageButton key={pageNumber} currentPage={pageNumber === page}>
          {pageNumber}
        </PageButton>
      ))}

      <MoveButton
        direction="right"
        disabled={page === maxPage}
        onClick={() => handlePage(page + 1)}
        type="button"
      >
        next
      </MoveButton>
    </Wrapper>
  );
};

export default Pagination;
