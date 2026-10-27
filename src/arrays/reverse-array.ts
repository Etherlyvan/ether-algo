export function reverseArray<T>(input: readonly T[]): T[] {
  const result: T[] = [];

  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i]!);
  }

  return result;
}