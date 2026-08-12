import { getHistory } from "./flipHistoryRepository.js";

const historyList = document.getElementById("historyList");
const currentStreakLabel = document.getElementById("currentStreak");
const maxStreakLabel = document.getElementById("maxStreak");

export function renderHistory() {
  const history = getHistory().history;
  historyList.innerHTML = "";
  for (const entry of history) {
    const item = document.createElement("li");
    item.textContent = entry;
    historyList.appendChild(item);
  }
}

export function updateStreakDisplay() {
  const currentStreak = getHistory().getStreak();
  const maxStreak = getHistory().getMaxStreak();
  currentStreakLabel.textContent = `Current Streak: ${currentStreak}`;
  maxStreakLabel.textContent = `Max Streak: ${maxStreak.toString()}`;
}
