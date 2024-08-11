import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: number;
}

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap}px;
  justify-items: center;
`;

const Flex = ({ children, direction = "row", gap, ...props }: Props) => {
  return (
    <StyledFlex direction={direction} gap={gap} {...props}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
