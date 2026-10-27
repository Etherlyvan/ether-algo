import { describe, expect, it } from "vitest";
import { findMax } from "../../src/arrays/find-max.js";

describe("findMax", () => {
  it.each([
    { input: [], expected: undefined },
    { input: [7], expected: 7 },
    { input: [9, 2, 3], expected: 9 },
    { input: [1, 9, 3], expected: 9 },
    { input: [1, 2, 9], expected: 9 },
    { input: [-5, -2, -8], expected: -2 },
    { input: [4, 4, 2], expected: 4 },
    { input: [-1, 0, -3], expected: 0 },
    { input: [1.5, -2.5, 3.25], expected: 3.25 },
  ])("returns $expected for $input", ({ input, expected }) => {
    expect(findMax(input)).toBe(expected);
  });

  it("does not change the input", () => {
    const input = Object.freeze([3, 1, 8, 2]);

    expect(findMax(input)).toBe(8);
    expect(input).toEqual([3, 1, 8, 2]);
  });
});
