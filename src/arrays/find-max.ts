/** Finds the largest finite number without changing the input. */
export function findMax(input: readonly number[]): number | undefined {
  let max = input[0];

  if (max === undefined) {
    return undefined;
  }

  for (let i = 1; i < input.length; i++) {
    const value = input[i]!;

    if (value > max) {
      max = value;
    }
  }

  return max;
}
