import { getCoinSideWithCurrentSkin } from "./skinRepository.js";
import { headsSideForSkin } from "./skinRepository.js";

const coinImage = document.getElementById("coinImage");

export function showCoinSide(result) {
  coinImage.src = getCoinSideWithCurrentSkin(result);
}

export function getHeadsFor(skin) {
  return headsSideForSkin(skin);
}
