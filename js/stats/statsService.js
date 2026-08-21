import { getHistory } from "../flipHistory/flipHistoryRepository.js";

const headsProcentLabel = document.getElementById("headsPercent");

export function updateStats() {
  const headsProcent = getHistory().getHeadsProcent();
  headsProcentLabel.textContent = `Heads: ${headsProcent}%`;
}
