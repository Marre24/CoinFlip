import { CoinSide } from "./coinFlipper.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 2;

export function updateMoney(streak) {
  const cm = currentMoney();

  if (streak === -1) {
    return;
  }

  const moneyForFlip = moneyForHeads ** streak;
  const newMoney = cm + moneyForFlip;
  localStorage.setItem("money", newMoney);
  updateMoneyDisplay();
  return moneyForFlip;
}

export function updateMoneyDisplay() {
  const cm = currentMoney();

  moneyLabel.textContent = "$" + cm;
}

export function currentMoney() {
  return parseInt(localStorage.getItem("money")) || 0;
}

export function deductMoney(amount) {
  const cm = currentMoney();
  const newMoney = cm - amount;
  localStorage.setItem("money", newMoney);
  updateMoneyDisplay();
}
