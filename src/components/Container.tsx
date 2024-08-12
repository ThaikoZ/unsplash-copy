import { ReactNode } from "react";
import styled from "styled-components";
import { numberToPixels } from "../utils/pixels";

interface Props {
  maxwidth?: number;
  children: ReactNode;
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div<{ maxwidth: number }>`
  max-width: ${(props) => numberToPixels(props.maxwidth)};
  width: 100%;
`;

const Container = ({ children, maxwidth = 1300 }: Props) => {
  return (
    <OuterContainer>
      <InnerContainer maxwidth={maxwidth}>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default Container;
