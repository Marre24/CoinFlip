export function currentMoney() {
  return parseInt(localStorage.getItem("money")) || 0;
}

export function deductFromBalance(amount) {
  const newMoney = currentMoney() - amount;
  store(newMoney);
}

export function addMoneyToBalance(amount) {
  const newMoney = currentMoney() + amount;
  store(newMoney);
}

function store(newMoney) {
  localStorage.setItem("money", newMoney);
}
