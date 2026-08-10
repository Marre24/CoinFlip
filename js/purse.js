import { CoinSide } from "./coinFlipper.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 2;

export function updateMoney(streak) {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  if (streak === 0) {
    return;
  }

  const addedMoney = moneyForHeads ** streak;
  console.log(`Added money: ${addedMoney} for streak: ${streak}`);
  const newMoney = currentMoney + addedMoney;
  localStorage.setItem("money", newMoney);
  updateMoneyDisplay();
}

export function updateMoneyDisplay() {
  const currentMoney = parseInt(localStorage.getItem("money")) || 0;

  moneyLabel.textContent = "$" + currentMoney;
}
