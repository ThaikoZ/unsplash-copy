
export const pixelsToNumber = (pixels: string) => {
  return parseInt(pixels.slice(0, pixels.length-2))
}
export const numberToPixels = (num: number) => {
  return num + "px";
}