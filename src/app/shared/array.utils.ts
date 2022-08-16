/**
 * Get random value from an array
 * @param array
 * @returns item
 */
export function getRandomValue<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
