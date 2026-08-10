import { CoinSide } from "./coinFlipper.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 2;

export function updateMoney(streak) {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  if (streak === -1) {
    return;
  }

  const newMoney = currentMoney + moneyForHeads ** streak;
  localStorage.setItem("money", newMoney);
  updateMoneyDisplay();
}

export function updateMoneyDisplay() {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  moneyLabel.textContent = "$" + currentMoney;
}
