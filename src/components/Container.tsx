import { ReactNode } from "react";
import styled from "styled-components";
import { numberToPixels } from "../utils/pixels";

interface Props {
  maxWidth?: number;
  children: ReactNode;
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  max-width: ${(props) => numberToPixels(props.maxWidth)};
  width: 100%;
`;

const Container = ({ children, maxWidth = 1300 }: Props) => {
  return (
    <OuterContainer>
      <InnerContainer maxWidth={maxWidth}>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default Container;
