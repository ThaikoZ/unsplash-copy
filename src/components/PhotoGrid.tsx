import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { countColumns, splitPhotos } from "../utils/photos";
import { Photo as PhotoType } from "../types/Photo";
import useBreakpoint from "../hooks/useBreakpoint";
import Photo from "./PhotoCard";

interface Props {
  photos: PhotoType[];
}

const gridGap = "1.75rem";

const Grid = styled.div`
  display: grid;
  grid-gap: ${gridGap};
  margin-top: ${gridGap};
  padding: 0 ${gridGap};
  grid-template-columns: repeat(3, 1fr);

  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.md} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gridGap};
`;

const PhotoGrid = ({ photos }: Props) => {
  const breakpoint = useBreakpoint();
  const columnsAmount = countColumns(breakpoint);
  const columns = splitPhotos(photos, columnsAmount);

  return (
    <Grid>
      {columns.map((column, index) => (
        <Column key={index}>
          {column.map((photo, index) => (
            <Photo key={index} photo={photo} />
          ))}
        </Column>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
