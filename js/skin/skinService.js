import { getSkinForCoinSide } from "./skinRepository.js";

const coinImage = document.getElementById("coinImage");

export function showCoinSide(result) {
  coinImage.src = getSkinForCoinSide(result);
}
