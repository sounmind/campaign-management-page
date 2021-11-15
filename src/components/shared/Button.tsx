import styled from "styled-components";

export default styled.button<{ background: "black" | "white" }>`
  width: 80px;
  height: 40px;
  padding: 0;
  font-size: 12px;

  ${({ background, theme }) =>
    background === "black"
      ? "background-color: black; color: white"
      : `background-color: white; border: 1px solid ${theme.color.grayWhite}`}
`;
