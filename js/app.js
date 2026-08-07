var button = document.getElementById('flipButton');
var coin = document.getElementById('coin');
var resultText = document.getElementById('result');

const CoinSide = {
  HEADS: 'Heads',
  TAILS: 'Tails'
};

var currentRotation = 0;

function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  var result = isHeads ? CoinSide.HEADS : CoinSide.TAILS;
  console.log(result);
  return result;
}

function handleFlipClick() {
  button.disabled = true;
  resultText.textContent = 'Flipping...';

  var coinFlipResult = flipCoin();

  resultText.textContent = coinFlipResult;

  button.disabled = false;
}

button.onclick = handleFlipClick;