import { getHistory } from "./flipHistoryRepository.js";

const historyList = document.getElementById("historyList");

export function renderHistory() {
  const history = getHistory().history;
  historyList.innerHTML = "";
  for (const entry of history) {
    const item = document.createElement("li");
    item.textContent = entry;
    historyList.appendChild(item);
  }
}
