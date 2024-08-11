import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { countColumns, splitPhotos } from "../utils/photos";
import { Photo } from "../types/Photo";
import useBreakpoint from "../hooks/useBreakpoint";

interface Props {
  photos: Photo[];
}

const gridGap = "1.75rem";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${gridGap};
  grid-template-columns: repeat(3, 1fr);

  @media ${device.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gridGap};
`;

const ColumnItem = styled.div`
  background-color: blue;
  height: 300px;
`;

const PhotoGrid = ({ photos }: Props) => {
  const breakpoint = useBreakpoint();
  const columnsAmount = countColumns(breakpoint);
  const columns = splitPhotos(photos, columnsAmount);

  return (
    <Grid>
      {columns.map((column, index) => (
        <Column key={index}>
          {column.map((item, index) => (
            <ColumnItem key={index}>{item.title}</ColumnItem>
          ))}
        </Column>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
