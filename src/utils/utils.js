export function getRandomNumber(min = 1, max = 6) {
  return Math.floor(Math.random() * (max - min) + min);
}
