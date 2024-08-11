import { it, describe, expect} from "vitest";
import { numberToPixels, pixelsToNumber } from '../../src/utils/pixels'

describe('numberToPixels', () => {
  it("should return value that contain px", () => {
    expect(numberToPixels(200)).toMatch(/px/i)
  })
  it("should handle with negative value", () => {
    expect(numberToPixels(-200)).toMatch(/px/i)
  })
})

describe('pixelsToNumber', () => {
  it("should return correct value", () => {
    expect(pixelsToNumber("200px")).toBe(200)
  })
  it("should handle with negative value", () => {
    expect(pixelsToNumber("-200px")).toBe(-200)
  })
  it("should handle with negative value", () => {
    expect(pixelsToNumber('')).toBe(undefined)
    expect(pixelsToNumber('54')).toBe(undefined)
  })
  
})