export function insertionSort(input: readonly number[]): number[] {
  const result = [...input];
  for (let i = 1; i < result.length; i++) {
    const value = result[i]!;
    let j = i - 1;
    while (j >= 0 && result[j]! > value) {
      result[j + 1] = result[j]!;
      j--;
    }
    result[j + 1] = value;
  }
  return result;
}
