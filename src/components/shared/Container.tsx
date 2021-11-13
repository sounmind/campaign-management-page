import styled from "styled-components";

interface ContainerProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Container = styled.div<ContainerProps>`
  justify-content: ${({ justifyContent }) => justifyContent || "flexStart"};
  align-items: ${({ alignItems }) => alignItems || "flexStart"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

export default Container;
