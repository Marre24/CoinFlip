import { animateCoinFlip } from "./coin/coinFlipAnimation.js";
import { flipCoin } from "./coin/coinFlipper.js";
import { updateMoney } from "./coin/purse.js";
import { storeAndGetHeadsInARow } from "./flipHistory/flipHistoryRepository.js";
import { updateMoneyDisplay } from "./coin/purse.js";
import { renderHistory } from "./flipHistory/flipHistoryService.js";
import { updateStreakDisplay } from "./flipHistory/flipHistoryService.js";
import { showMoneyAddedEffect } from "./vfx/visualEffects.js";
import { showCoinSide } from "./skin/skinService.js";

const button = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");

const flipDuration = 1000;

localStorage.setItem("money", 0);
localStorage.setItem("coinFlipHistory", "");

let isFlipping = false;
async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;
  button.disabled = true;

  await animateCoinFlip(coinWrapper, flipDuration);

  const result = flipCoin();
  showCoinSide(result);
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
