import { getRandomNumber } from "./numbers";

// You can internt use utils to help each other
export function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50%)`;
}
