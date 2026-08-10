import { animateCoinFlip } from "./coinFlipAnimation.js";
import { flipCoin } from "./coinFlipper.js";
import { updateMoney } from "./purse.js";
import { storeAndGetHeadsInARow } from "./flipHistoryRepository.js";
import { updateMoneyDisplay } from "./purse.js";

const button = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");
const resultText = document.getElementById("result");

const flipDuration = 200;

localStorage.setItem("money", 0);

let isFlipping = false;
async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;
  button.disabled = true;

  resultText.textContent = "Flipping...";
  await animateCoinFlip(coinWrapper, flipDuration);

  const result = flipCoin();
  const headsInARow = storeAndGetHeadsInARow(result);
  updateMoney(headsInARow);
  resultText.textContent = result;

  button.disabled = false;
  isFlipping = false;
}

button.onclick = handleFlipClick;

updateMoneyDisplay();
