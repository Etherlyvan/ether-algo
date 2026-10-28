import { describe, expect, it } from "vitest";
import { bubbleSort, insertionSort, mergeSort } from "../../src/index.js";

for (const sort of [bubbleSort, insertionSort, mergeSort]) {
  describe(sort.name, () => {
    const cases = [
      [], [1], [1, 2], [2, 1], [1, 2, 3, 4], [4, 3, 2, 1],
      [3, 1, 2], [2, 2, 2], [3, 1, 3, 2, 1], [-5, -2, -8],
      [0, -1, 3, -1, 0], [1.5, -2.25, 0, 1.5],
    ];

    for (const input of cases) {
      it(`sorts ${JSON.stringify(input)} without mutating it`, () => {
        const original = [...input];
        const result = sort(Object.freeze(input));
        expect(result).toEqual([...original].sort((a, b) => a - b));
        expect(input).toEqual(original);
        expect(result).not.toBe(input);
      });
    }

    it("matches numeric sorting across deterministic varied arrays", () => {
      let seed = 42;
      for (let length = 0; length <= 50; length++) {
        const input = Array.from({ length }, () => {
          seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
          return (seed % 101) - 50;
        });
        expect(sort(input)).toEqual([...input].sort((a, b) => a - b));
      }
    });
  });
}
