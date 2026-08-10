import { animateCoinFlip } from "./coinFlipAnimation.js";
import { flipCoin } from "./coinFlipper.js";
import { updateMoney } from "./purse.js";

const button = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");
const resultText = document.getElementById("result");

const flipDuration = 2000;

let isFlipping = false;
async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;
  button.disabled = true;

  resultText.textContent = "Flipping...";
  await animateCoinFlip(coinWrapper, flipDuration);

  const result = flipCoin();
  updateMoney(result);
  resultText.textContent = result;

  button.disabled = false;
  isFlipping = false;
}

button.onclick = handleFlipClick;
