import { CoinSide } from "./coin/coinFlipper.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 2;

export function updateMoney(streak) {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  if (streak === -1) {
    return;
  }

  const moneyForFlip = moneyForHeads ** streak;
  const newMoney = currentMoney + moneyForFlip;
  localStorage.setItem("money", newMoney);
  updateMoneyDisplay();
  return moneyForFlip;
}

export function updateMoneyDisplay() {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  moneyLabel.textContent = "$" + currentMoney;
}
