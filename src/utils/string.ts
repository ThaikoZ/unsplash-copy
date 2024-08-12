
export const shortener = (text: string | undefined, limit: number = 40) => {
  if(limit < 0 || !text) return ""
  return text.length > limit ? text.slice(0, limit) + "..." : text
}; 