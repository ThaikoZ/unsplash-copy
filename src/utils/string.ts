
export const shortener = (text: string, limit: number = 40) => text.length > limit ? text.slice(0, limit) + "..." : text; 