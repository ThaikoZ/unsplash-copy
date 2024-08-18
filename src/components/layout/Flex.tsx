import { ReactNode } from "react";
import styled from "styled-components";

interface Properties {
  direction?: "row" | "column";
  gap?: number;
  align?: string;
  justify?: string;
  padding?: string;
}

interface Props extends Properties {
  children: ReactNode;
}

const StyledFlex = styled.div<Properties>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(props) => props.gap}px;
  padding: ${(props) => props.padding};
`;

const Flex = ({ children, direction = "row", gap, ...props }: Props) => {
  return (
    <StyledFlex direction={direction} gap={gap} {...props}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
