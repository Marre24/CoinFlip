import { getCoinSideWithCurrentSkin } from "./skinRepository.js";
import { headsSideForSkin } from "./skinRepository.js";
import { getHeadsForCurrentSkin } from "./skinRepository.js";

const coinImage = document.getElementById("coinImage");

const priceMap = {
  Bronze: 0,
  Silver: 100,
  Gold: 500,
};

export function showCurrentSkin() {
  coinImage.src = getHeadsForCurrentSkin();
}

export function showCoinSide(result) {
  coinImage.src = getCoinSideWithCurrentSkin(result);
}

export function getHeadsFor(skin) {
  return headsSideForSkin(skin);
}

export function getPriceForSkin(skin) {
  return priceMap[skin] || 0;
}
