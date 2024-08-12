import { breakpoints } from "../styles/breakpoints";
import { Photo } from "../types/Photo";

export const splitPhotos = (photos: Photo[], columns: number) => {
  if(!photos.length) return [[]];
  
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
      return 1;
    case breakpoints.md:
    case breakpoints.lg:
      return 2
    case breakpoints.xl:
    case breakpoints.xxl:
    default:
      return 3;
  }
}


const getTitle = (title: string | undefined) => title ? title + ".png" : "image.png"

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