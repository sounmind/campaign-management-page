import React from "react";
import styled from "styled-components";
import Container from "../shared/Container";

const Wrapper = styled(Container)``;

interface PaginationProps {
  page: number;
  handlePage: (page: number) => void;
}

const TOTAL_PAGINATION = 5;

const Pagination = ({ page, handlePage }: PaginationProps) => { 
  // 항상 5개 출력
  // 현재 page 표시
  // 버튼 클릭 시 page 바뀜

  const remained = page % TOTAL_PAGINATION;
  const currentPageIndex = remained === 0 ? TOTAL_PAGINATION - 1 : remained - 1;

  return (
    <Wrapper>
      <button type="button">previous</button>
      {Array(TOTAL_PAGINATION)
        .fill(0)
        .map((_, index) => {
          if (index === currentPageIndex) {
            return <div>*{index + 1}*</div>;
          }

          return <div>{index + 1}</div>;
        })}
      <button type="button">next</button>
    </Wrapper>
  );
};

export default Pagination;
