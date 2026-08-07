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

  var extraSpins = 4 * 360;
  var landingOffset = coinFlipResult === CoinSide.HEADS ? 0 : 180;
  currentRotation += extraSpins + landingOffset;

  coin.style.setProperty('--final-rotation', currentRotation + 'deg');

  coin.classList.remove('flipping');
  void coin.offsetWidth;
  coin.classList.add('flipping');

  coin.addEventListener('animationend', function onEnd() {
    coin.removeEventListener('animationend', onEnd);
    coin.style.transform = 'rotateY(' + currentRotation + 'deg)';
    resultText.textContent = coinFlipResult;
    button.disabled = false;
  });
}

button.onclick = handleFlipClick;