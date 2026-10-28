export function bubbleSort(input: readonly number[]): number[] {
  const result = [...input];
  for (let end = result.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      const left = result[i]!;
      const right = result[i + 1]!;
      if (left > right) {
        result[i] = right;
        result[i + 1] = left;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}
