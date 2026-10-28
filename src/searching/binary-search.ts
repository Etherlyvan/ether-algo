/** Requires input sorted in ascending order. May return any matching index. */
export function binarySearch(input: readonly number[], target: number): number {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    const value = input[middle]!;
    if (value === target) return middle;
    if (value < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}
