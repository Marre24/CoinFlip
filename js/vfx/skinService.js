import { CoinSide } from "../coin/coinFlipper.js";

const coinImage = document.getElementById("coinImage");

const skinMap = {
  [CoinSide.HEADS]: "../../assets/img/BronzeCoinHeads.png",
  [CoinSide.TAILS]: "../../assets/img/BronzeCoinTails.png",
};

export function showCoinSide(result) {
  coinImage.src = skinMap[result];
}
