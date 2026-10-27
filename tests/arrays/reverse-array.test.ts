import { describe, expect, it } from "vitest";
import { reverseArray } from "../../src/arrays/reverse-array.js";

describe("reverseArray", () => {
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