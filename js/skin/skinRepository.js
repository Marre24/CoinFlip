import { CoinSide } from "../coin/coinFlipper.js";

const skinMap = {
  [CoinSide.HEADS]: "../../assets/img/BronzeCoinHeads.png",
  [CoinSide.TAILS]: "../../assets/img/BronzeCoinTails.png",
};

export function getSkinForCoinSide(coinSide) {
  return skinMap[coinSide];
}
