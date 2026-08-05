var button = document.getElementById('flipButton');

const CoinSide = {
  HEADS: 'Heads',
  TAILS: 'Tails'
};

function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  console.log(isHeads ? CoinSide.HEADS : CoinSide.TAILS);
  return isHeads;
}

button.onclick = flipCoin;