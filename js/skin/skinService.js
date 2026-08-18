import { getCoinSideWithCurrentSkin } from "./skinRepository.js";

const coinImage = document.getElementById("coinImage");

export function showCoinSide(result) {
  coinImage.src = getCoinSideWithCurrentSkin(result);
}
