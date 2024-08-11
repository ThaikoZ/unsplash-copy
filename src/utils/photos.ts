import { breakpoints } from "../styles/breakpoints";
import { Photo } from "../types/Photo";

export const splitPhotos = (photos: Photo[], columns: number) => {
  const list: (Photo[])[] = [];

  for(let i = 0; i < columns; i++)
    list.push([])

  photos.forEach((photo, index) => list[index%columns].push(photo) )

  return list ;
};


export const countColumns = (breakpoint: string) => {
  switch(breakpoint) {
    case breakpoints.xs:
    case breakpoints.sm:
    case breakpoints.md:
      return 1;
    case breakpoints.lg:
    case breakpoints.xl:
      return 2
    case breakpoints.xxl:
    default:
      return 3;
  }
}