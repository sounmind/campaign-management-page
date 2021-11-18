import React from "react";
import styled from "styled-components";

import useCampaignDispatch from "../../hooks/useCampaignDispatch";
import useCampaignState from "../../hooks/useCampaignState";

import Container from "../shared/Container";
import ArrowLeft from "./icons/page-arrow-l.svg";
import ArrowRight from "./icons/page-arrow-r.svg";

const Wrapper = styled(Container)`
  width: 100%;
  justify-content: center;
  margin: 40px;
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

const PageButton = styled.button<{ isCurrentPage: boolean }>`
  width: 24px;
  height: 24px;
  padding: 4px 9px 5px;
  border: 0;
  border-radius: 12px;
  font-size: 10px;

  ${({ isCurrentPage, theme: { color } }) =>
    isCurrentPage
      ? `background-color: ${color.black}; color: white`
      : `background-color: ${color.middleGrayBackground}; color: white`}
`;

const Pagination: React.FC = () => {
  const dispatch = useCampaignDispatch();
  const { currentPageNumber, maxPageNumber, currentPaginations } =
    useCampaignState();

  return (
    <Wrapper>
      <MoveButton
        disabled={currentPageNumber - 1 === 0}
        onClick={() => dispatch({ type: "GO_PREVIOUS_PAGE" })}
        type="button"
      >
        <ArrowLeft opacity={currentPageNumber - 1 === 0 ? 0.3 : 1} />
      </MoveButton>

      {currentPaginations.map((pageNumber) => (
        <PageButton
          onClick={() => dispatch({ type: "SET_PAGE", payload: pageNumber })}
          key={pageNumber}
          isCurrentPage={pageNumber === currentPageNumber}
        >
          {pageNumber}
        </PageButton>
      ))}

      <MoveButton
        disabled={currentPageNumber === maxPageNumber}
        onClick={() => dispatch({ type: "GO_NEXT_PAGE" })}
        type="button"
      >
        <ArrowRight opacity={currentPageNumber === maxPageNumber ? 0.3 : 1} />
      </MoveButton>
    </Wrapper>
  );
};

export default Pagination;
