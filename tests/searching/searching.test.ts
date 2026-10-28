import { describe, expect, it } from "vitest";
import { binarySearch, linearSearch } from "../../src/index.js";

for (const search of [linearSearch, binarySearch]) {
  describe(search.name, () => {
    it.each([
      { input: [], target: 1, expected: -1 },
      { input: [2], target: 2, expected: 0 },
      { input: [2], target: 1, expected: -1 },
      { input: [-3, 0, 2, 5, 9], target: -3, expected: 0 },
      { input: [-3, 0, 2, 5, 9], target: 2, expected: 2 },
      { input: [-3, 0, 2, 5, 9], target: 9, expected: 4 },
      { input: [1, 3, 5, 7], target: 5, expected: 2 },
      { input: [1, 3, 5, 7], target: 3, expected: 1 },
      { input: [1, 3, 5, 7], target: 1, expected: 0 },
      { input: [1, 3, 5, 7], target: 7, expected: 3 },
      { input: [1, 3, 5, 7], target: 4, expected: -1 },
      { input: [1, 3, 5, 7], target: -1, expected: -1 },
      { input: [1, 3, 5, 7], target: 8, expected: -1 },
    ])("finds $target in $input", ({ input, target, expected }) => {
      expect(search(Object.freeze(input), target)).toBe(expected);
    });

    it("returns a matching index for duplicates", () => {
      const input = [1, 2, 2, 2, 3];
      const index = search(input, 2);
      expect(index).toBeGreaterThanOrEqual(1);
      expect(index).toBeLessThanOrEqual(3);
      expect(input[index]).toBe(2);
    });
  });
}

it("linear search supports unsorted input", () => {
  expect(linearSearch([8, -1, 4, 2], -1)).toBe(1);
});
