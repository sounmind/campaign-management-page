import { PAGINATION_LENGTH } from "../constants";

const getPaginations = (
  currentPageNumber: number,
  maxPageNumber: number
): number[] => {
  const pages = [];

  const remained =
    currentPageNumber % PAGINATION_LENGTH === 0
      ? PAGINATION_LENGTH
      : currentPageNumber % PAGINATION_LENGTH;
  const [startPage, endPage] = [
    currentPageNumber - remained + 1,
    Math.min(currentPageNumber - remained + PAGINATION_LENGTH, maxPageNumber),
  ];

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  return pages;
};

export default getPaginations;
