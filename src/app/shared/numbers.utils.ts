export function randomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = (k: number) => Math.floor((k + 1) * Math.random());

/**
 * Shuffle an array
 * @param arr
 * @returns shuffled arr
 */
export function fisherYatesShuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
