import { animateCoinFlip } from "./coinFlipAnimation.js";

const button = document.getElementById("flipButton");
const coinImage = document.getElementById("coinImage");
const resultText = document.getElementById("result");

const CoinSide = {
  HEADS: "Heads",
  TAILS: "Tails",
};

function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  var result = isHeads ? CoinSide.HEADS : CoinSide.TAILS;
  console.log(result);
  return result;
}

async function handleFlipClick() {
  button.disabled = true;
  resultText.textContent = "Flipping...";

  var coinFlipResult = flipCoin();

  await animateCoinFlip(coinImage);

  resultText.textContent = coinFlipResult;

  button.disabled = false;
}

button.onclick = handleFlipClick;
