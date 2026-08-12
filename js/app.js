import { animateCoinFlip } from "./coinFlipAnimation.js";
import { flipCoin } from "./coin/coinFlipper.js";
import { updateMoney } from "./purse.js";
import { storeAndGetHeadsInARow } from "./flipHistoryRepository.js";
import { updateMoneyDisplay } from "./purse.js";
import { renderHistory } from "./flipHistoryService.js";
import { updateStreakDisplay } from "./flipHistoryService.js";
import { showMoneyAddedEffect } from "./visualEffects.js";

const button = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");

const flipDuration = 200;

localStorage.setItem("money", 0);
localStorage.setItem("coinFlipHistory", "");

let isFlipping = false;
async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;
  button.disabled = true;

  await animateCoinFlip(coinWrapper, flipDuration);

  const result = flipCoin();
  const headsInARow = storeAndGetHeadsInARow(result);
  const moneyAdded = updateMoney(headsInARow);
  if (moneyAdded !== undefined) showMoneyAddedEffect(moneyAdded);
  renderHistory();
  updateStreakDisplay();

  button.disabled = false;
  isFlipping = false;
}

button.onclick = handleFlipClick;

updateMoneyDisplay();
renderHistory();
