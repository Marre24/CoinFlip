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
  console.log(isHeads ? CoinSide.HEADS : CoinSide.TAILS);
  return isHeads;
}

function handleFlipClick() {
  button.disabled = true;
  resultText.textContent = 'Flipping...';

  var isHeads = flipCoin();

  // Always spin several full rotations for effect, landing on
  // an even multiple of 360 for heads, or +180 for tails.
  var extraSpins = 4 * 360;
  var landingOffset = isHeads ? 0 : 180;
  currentRotation += extraSpins + landingOffset;

  coin.style.setProperty('--final-rotation', currentRotation + 'deg');

  // Restart the animation each click
  coin.classList.remove('flipping');
  void coin.offsetWidth; // force reflow so animation restarts
  coin.classList.add('flipping');

  coin.addEventListener('animationend', function onEnd() {
    coin.removeEventListener('animationend', onEnd);
    coin.style.transform = 'rotateY(' + currentRotation + 'deg)';
    resultText.textContent = isHeads ? CoinSide.HEADS : CoinSide.TAILS;
    button.disabled = false;
  });
}

button.onclick = handleFlipClick;