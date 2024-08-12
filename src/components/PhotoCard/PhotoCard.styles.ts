import { device } from "../../styles/breakpoints";
import styled from "styled-components";


export const SmallScreenComponent = styled.div`
  display: none;

  @media ${device.sm} {
    display: block;
  }
`

export const Blackout = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.45)), linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.45));
  transition: opacity 0.15s ease-out;
  z-index: 10;
`;

export const AbsoluteContainer = styled.div<{
  top?: string; bottom?: string; left?:string; right?: string; width?: string;
}>`
  z-index: 20;
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  transition: opacity 0.15s ease-out;
  opacity: 0;
`

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &:hover ${Blackout} {
    opacity: 1;
  }
  &:hover ${AbsoluteContainer} {
    opacity: 1;
  }

  @media ${device.sm} {
    display: none;
  }
`;

export const StyledPhotoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  cursor: zoom-in;
`;

export const StyledHeader = styled.header`
  display: flex;
  padding: 0.75rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  overflow: hidden;
  height: 2.25rem;
`;

export const Title = styled.div<{color?: string | undefined}>`
  color: ${props => props.color || "black"};
  font-weight: 600;
  line-height: 1rem;
  font-size: 0.95rem;
  white-space: nowrap;
`;
export const Subtitle = styled.div`
  white-space: nowrap;
  font-weight: 550;
  color: rgba(165, 165, 165, 1);
  font-size: 0.8rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  height: 2.25rem;

`;

export const Button = styled.button<{ primary?: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) =>
    props.primary ? "black" : "rgb(253, 253, 253)"};
  border: 1px solid rgb(203, 203, 203);
  border-radius: 6px;
  padding: 0.45rem 0.8rem;
  height: 100%;
  font-size: 0.95rem;
  color: ${(props) => (props.primary ? "white" : "rgb(118, 118, 118)")};
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: background-color 0.15s ease-in, color 0.15s ease-out,
  border-color 0.15s ease-out;
  opacity: ${(props) =>
    props.primary ? "1" : "0.95"};

  &:hover {
    background-color: ${(props) =>
      props.primary ? "rgb(25, 25, 25)" : "white"};
    color: ${(props) => (props.primary ? "white" : "rgb(0, 0, 0)")};
    border-color: ${(props) =>
      props.primary ? "rgb(203, 203, 203)" : "rgb(0, 0, 0)"};
    opacity: 1;
  }
`;