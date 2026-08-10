import { FlipHistory } from "./flipHistory.js";

const STORAGE_KEY = "coinFlipHistory";

export function storeAndGetHeadsInARow(result) {
  const updatedStorage = getHistory().add(result);
  saveHistory(updatedStorage);
  return updatedStorage.getStreak() - 1;
}

function saveHistory(flipHistory) {
  localStorage.setItem(STORAGE_KEY, flipHistory.toJSON());
}

function getHistory() {
  const json = localStorage.getItem(STORAGE_KEY);
  if (!json) return new FlipHistory();
  try {
    return FlipHistory.fromJSON(json);
  } catch {
    return new FlipHistory();
  }
}
