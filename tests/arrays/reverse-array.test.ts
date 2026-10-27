import { describe, expect, it } from "vitest";
import { reverseArray } from "../../src/arrays/reverse-array.js";

describe("reverseArray", () => {
  it("preserves duplicate elements", () => {
    expect(reverseArray([1, 2, 1, 3])).toEqual([3, 1, 2, 1]);
  });

  it("preserves object references without changing the input", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const input = Object.freeze([first, second]);
    const result = reverseArray(input);

    expect(result[0]).toBe(second);
    expect(result[1]).toBe(first);
    expect(input[0]).toBe(first);
    expect(input[1]).toBe(second);
  });

  it("membalik urutan elemen", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("menangani array kosong", () => {
    expect(reverseArray([])).toEqual([]);
  });

  it("menangani satu elemen", () => {
    expect(reverseArray(["a"])).toEqual(["a"]);
  });

  it("tidak mengubah input dan menghasilkan array baru", () => {
    const input = [1, 2, 3];
    const result = reverseArray(input);

    expect(input).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);
  });
});
