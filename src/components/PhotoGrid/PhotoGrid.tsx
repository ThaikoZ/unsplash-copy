import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useBreakpoint from "../../hooks/useBreakpoint";
import { fetchSearchPhotosInfinite } from "../../services/photoServices";
import { countColumns, splitPhotos } from "../../utils/photos";
import CenterText from "../CenterText";
import PhotoCard from "../PhotoCard";
import { Column, Grid } from "./PhotoGrid.styles";
import PhotoCardSkeleton from "../PhotoCard/PhotoCardSkeleton";

interface Props {
  searchQuery: string;
}

const loadingFrames = [
  [1, 2],
  [3, 4],
  [5, 6],
];

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

  if (isLoading)
    return (
      <Grid>
        {loadingFrames.map((column) => (
          <Column>
            {column.map(() => (
              <PhotoCardSkeleton />
            ))}
          </Column>
        ))}
      </Grid>
    );
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
              if (index >= column.length - 3)
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
