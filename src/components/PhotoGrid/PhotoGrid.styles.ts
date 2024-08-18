import { styled } from "styled-components";
import { device } from "../../styles/breakpoints";

const gridGap = "1.5rem";

export const Grid = styled.div`
  display: grid;
  grid-gap: ${gridGap};
  margin-top: calc(${gridGap} - 0.25rem);
  grid-template-columns: repeat(3, 1fr);

  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.sm} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gridGap};
`;
