import { flipHistory } from "../flipHistory/flipHistoryService.js";

const headsProcentLabel = document.getElementById("headsPercent");

export function updateStats() {
  const headsProcent = flipHistory().getHeadsProcent();
  const formattedProcent = headsProcent.toFixed(2);
  headsProcentLabel.textContent = `Heads: ${formattedProcent}%`;
}
