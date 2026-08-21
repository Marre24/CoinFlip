export function currentMoney() {
  return parseInt(localStorage.getItem("money")) || 0;
}

export function store(newMoney) {
  localStorage.setItem("money", newMoney);
}
