import styled from "styled-components";
import { countColumns, splitPhotos } from "../../utils/photos";
import useBreakpoint from "../../hooks/useBreakpoint";
import PhotoCard from "../PhotoCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSearchPhotosInfinite } from "../../services/photoServices";
import { Column, Grid } from "./PhotoGrid.styles";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [`photos`, searchQuery],
    queryFn: (props) => fetchSearchPhotosInfinite(searchQuery, props),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.data.results.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <CenterText>Loading photos...</CenterText>;
  if (isError) return <CenterText>{error.message}</CenterText>;

  const photos = data?.pages.flatMap((photoSet) => photoSet.data.results);
  const columnsAmount = countColumns(breakpoint);
  const columns = splitPhotos(photos, columnsAmount);

  return (
    <>
      <Grid>
        {columns.map((column, col_index) => (
          <Column key={col_index}>
            {column.map((photo, index) => {
              if (column.length === index + 3)
                return <PhotoCard key={index} photo={photo} innerRef={ref} />;
              return <PhotoCard key={index} photo={photo} />;
            })}
          </Column>
        ))}
      </Grid>
      {isFetchingNextPage && <CenterText>Loading photos...</CenterText>}
    </>
  );
};

export default PhotoGrid;
