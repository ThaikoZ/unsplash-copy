import { it, describe, expect} from "vitest";
import { shortener } from '../../src/utils/string'

describe('shortener', () => {
  it("should return a string without ...", () => {
    expect(shortener("Opis", 5)).toBe("Opis")
    expect(shortener("Opis", 1)).toBe("O...")
  })

  it("should return an empty string if negative value was passed", () => {
    expect(shortener("Opis", -1)).toBe("")
  })

  it("should return a string with ...", () => {
    expect(shortener("Bardzo długi opis", 4)).toMatch(/.../i)
  })
})