import { CoinSide } from "../coin/coinFlipper.js";
import { showMoneyRemovedEffect } from "../vfx/visualEffects.js";
import { currentMoney } from "./moneyRepository.js";
import { addMoneyToBalance } from "./moneyRepository.js";
import { deductFromBalance } from "./moneyRepository.js";

const moneyLabel = document.getElementById("moneyLabel");
const moneyForHeads = 2;

export function updateMoney(streak) {
  if (streak === -1) {
    return;
  }

  const moneyForFlip = moneyForHeads ** streak;
  addMoneyToBalance(moneyForFlip);
  updateMoneyDisplay();
  return moneyForFlip;
}

export function hasEnoughMoneyFor(cost) {
  return currentMoney() >= cost;
}

export function updateMoneyDisplay() {
  const cm = currentMoney();

  moneyLabel.textContent = "$" + cm;
}

export function deductMoney(amount) {
  deductFromBalance(amount);
  updateMoneyDisplay();
  showMoneyRemovedEffect(amount);
}
