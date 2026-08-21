export function currentMoney() {
  return parseInt(localStorage.getItem("money")) || 0;
}
