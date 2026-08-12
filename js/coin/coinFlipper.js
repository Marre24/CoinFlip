export const CoinSide = {
  HEADS: "Heads",
  TAILS: "Tails",
};

export function flipCoin() {
  var isHeads = Math.random() >= 0.5;
  var result = isHeads ? CoinSide.HEADS : CoinSide.TAILS;
  console.log(result);
  return result;
}
