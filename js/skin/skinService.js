import { getSkinForCoinSide } from "./skinRepository.js";
import { getSkinType } from "./skinRepository.js";

const coinImage = document.getElementById("coinImage");

export function showCoinSide(result) {
  const skinType = getSkinType();
  coinImage.src = getSkinForCoinSide(result, skinType);
}
