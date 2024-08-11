export interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export const breakpoints: Breakpoints = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const device = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
}