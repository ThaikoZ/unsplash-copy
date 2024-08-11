import { it, describe, expect} from "vitest";
import { countColumns, splitPhotos } from '../../src/utils/photos'
import { breakpoints } from "../../src/styles/breakpoints";


describe('countColumns', () => {
  it("should return correct value", () => {
    expect(countColumns(breakpoints.xs)).toBeTruthy()
    expect(countColumns(breakpoints.xxl)).toBeTruthy()
  })

  it("should return undefinded if breakpoint doesn't exist", () => {
    expect(countColumns('')).toBeTruthy()
    expect(countColumns('unvalid')).toBeTruthy()
  })
})

describe('splitPhotos', () => {
  it("should return correct value if photos are empty", () => {
    expect(splitPhotos([], 3)).toStrictEqual([[]])
  })

  it("should return a correctly splitted array", () => {
    const ph = {title: '...'} 
    const photos = [ph, ph, ph, ph]

    expect(splitPhotos(photos, 2)).toStrictEqual([[ph, ph], [ph, ph]])
    expect(splitPhotos(photos, 3)).toStrictEqual([[ph, ph], [ph], [ph]])
  })
})

