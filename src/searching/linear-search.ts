export function linearSearch(input: readonly number[], target: number): number {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target) return i;
  }
  return -1;
}
