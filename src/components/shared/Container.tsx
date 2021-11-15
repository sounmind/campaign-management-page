import styled from "styled-components";

interface ContainerProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "start"};
  align-items: ${({ alignItems }) => alignItems || "start"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

export default Container;
