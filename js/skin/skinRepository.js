import { CoinSide } from "../coin/coinFlipper.js";

export const SkinType = {
  BRONZE: "Bronze",
  SILVER: "Silver",
  GOLD: "Gold",
};

const skinMap = {
  [SkinType.BRONZE]: {
    [CoinSide.HEADS]: "../../assets/img/BronzeCoinHeads.png",
    [CoinSide.TAILS]: "../../assets/img/BronzeCoinTails.png",
  },
  [SkinType.SILVER]: {
    [CoinSide.HEADS]: "../../assets/img/SilverCoinHeads.png",
    [CoinSide.TAILS]: "../../assets/img/SilverCoinTails.png",
  },
  [SkinType.GOLD]: {
    [CoinSide.HEADS]: "../../assets/img/GoldCoinHeads.png",
    [CoinSide.TAILS]: "../../assets/img/GoldCoinTails.png",
  },
};

export function getSkinType() {
  const skinType = localStorage.getItem("skinType");
  return skinType;
}

export function getSkinForCoinSide(coinSide, skinType) {
  return skinMap[skinType][coinSide];
}
