import { animateCoinFlip } from "./coinFlipAnimation.js";

const button = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");
const resultText = document.getElementById("result");

const CoinSide = {
  HEADS: "Heads",
  TAILS: "Tails",
};

let isFlipping = false;

function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  var result = isHeads ? CoinSide.HEADS : CoinSide.TAILS;
  console.log(result);
  return result;
}

async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;

  button.disabled = true;
  resultText.textContent = "Flipping...";

  var coinFlipResult = flipCoin();

  await animateCoinFlip(coinWrapper);

  resultText.textContent = coinFlipResult;

  button.disabled = false;
  isFlipping = false;
}

button.onclick = handleFlipClick;
