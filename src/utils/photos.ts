import { breakpoints } from "../styles/breakpoints";
import { Photo } from "../types/Photo";

// const findMinIndex = (tab: number[]) => {
//   if (!tab.length) return -1;

//   let minIndex = 0;
//   for (let i = 1; i < tab.length; i++) if (tab[minIndex] > tab[i]) minIndex = i;

//   return minIndex;
// };

export const splitPhotos = (photos: Photo[] | undefined, columns: number) => {
  if (!photos?.length) return [[]];

  const columnsHeight: number[] = [];
  const list: Photo[][] = [];

  for (let i = 0; i < columns; i++) {
    list.push([]);
    columnsHeight.push(0);
  }

  // for (let i = 0; i < photos.length; i++) {
  //   const index = findMinIndex(columnsHeight);
  //   const factor = photos[i].height / photos[i].width;
  //   columnsHeight[index] += photos[i].height * factor;
  //   list[index].push(photos[i]);
  //   console.log(columnsHeight);
  // }

  photos.forEach((photo, index) => list[index % columns].push(photo));

  return list;
};

export const countColumns = (breakpoint: string) => {
  switch (breakpoint) {
    case breakpoints.xs:
    case breakpoints.sm:
      return 1;
    case breakpoints.md:
    case breakpoints.lg:
      return 2;
    case breakpoints.xl:
    case breakpoints.xxl:
    default:
      return 3;
  }
};

const getTitle = (title: string | undefined) =>
  title ? title + ".png" : "image.png";

export const downloadPhoto = (href: string, title?: string) => {
  fetch(href, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", getTitle(title));
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
