import { CoinSide } from "../coin/coinFlipper.js";

export const SkinType = {
  BRONZE: "Bronze",
  SILVER: "Silver",
  GOLD: "Gold",
};

const DEFAULT_SKIN = SkinType.BRONZE;

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

function currentSkinType() {
  const stored = localStorage.getItem("skinType");
  const isValid = Object.values(SkinType).includes(stored);
  return isValid ? stored : DEFAULT_SKIN;
}

export function getCoinSideWithCurrentSkin(coinSide) {
  return skinMap[currentSkinType()][coinSide];
}

export function headsSideForSkin(skin) {
  return skinMap[skin][CoinSide.HEADS];
}
