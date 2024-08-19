import { PropsWithChildren } from "react";
import { styled } from "styled-components";

const StyledCenterText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const CenterText = ({ children, ...props }: PropsWithChildren) => {
  return <StyledCenterText {...props}>{children}</StyledCenterText>;
};

export default CenterText;
