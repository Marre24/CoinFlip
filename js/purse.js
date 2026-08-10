import { CoinSide } from "./coinFlipper.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 10;

export function updateMoney(result) {
  const storage = localStorage.getItem("money") || 0;
  const currentMoney = parseInt(storage, 10);

  if (result === CoinSide.TAILS) {
    return;
  }
  const newMoney = currentMoney + moneyForHeads;
  localStorage.setItem("money", newMoney);
  moneyLabel.textContent = "$" + newMoney;
}
