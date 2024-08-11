
export const pixelsToNumber = (pixels: string) => {
  if(pixels.indexOf('px') == -1) return undefined;
  return parseInt(pixels.slice(0, pixels.length-2))

}
export const numberToPixels = (num: number) => {
  return num.toString() + "px";
}