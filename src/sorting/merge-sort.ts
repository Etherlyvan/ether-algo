export function mergeSort(input: readonly number[]): number[] {
  if (input.length <= 1) return [...input];

  const middle = Math.floor(input.length / 2);
  const left = mergeSort(input.slice(0, middle));
  const right = mergeSort(input.slice(middle));
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    // Prefer the left value on ties to preserve stability.
    if (left[i]! <= right[j]!) result.push(left[i++]!);
    else result.push(right[j++]!);
  }
  while (i < left.length) result.push(left[i++]!);
  while (j < right.length) result.push(right[j++]!);
  return result;
}
