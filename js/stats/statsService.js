import { getHistory } from "../flipHistory/flipHistoryRepository.js";

const headsProcentLabel = document.getElementById("headsPercent");

export function updateStats() {
  const headsProcent = getHistory().getHeadsProcent();
  const formattedProcent = headsProcent.toFixed(2);
  headsProcentLabel.textContent = `Heads: ${formattedProcent}%`;
}
