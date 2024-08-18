import styled from "styled-components";
import { countColumns, splitPhotos } from "../../utils/photos";
import useBreakpoint from "../../hooks/useBreakpoint";
import PhotoCard from "../PhotoCard";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchPhotos } from "../../services/photoServices";
import { Column, Grid } from "./PhotoGrid.styles";

interface Props {
  searchQuery: string;
}

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const PhotoGrid = ({ searchQuery }: Props) => {
  const breakpoint = useBreakpoint();
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery({
    queryKey: [`photos`, searchQuery],
    queryFn: () => fetchSearchPhotos(searchQuery),
    // initialData: { data: { results: photosData } },
  });

  if (isLoading) return <CenterText>Loading photos...</CenterText>;
  if (error) return <CenterText>Unidentified error has occurred.</CenterText>;

  const columnsAmount = countColumns(breakpoint);
  const columns = splitPhotos(photos?.data.results, columnsAmount);

  return (
    <Grid>
      {columns.map((column, index) => (
        <Column key={index}>
          {column.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </Column>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
