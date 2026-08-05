var button = document.getElementById('flipButton');

function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  console.log(isHeads ? 'Heads' : 'Tails');
  return isHeads;
}

button.onclick = flipCoin;