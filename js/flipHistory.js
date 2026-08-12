import { CoinSide } from "./coinFlipper.js";

export class FlipHistory {
  #amountOfEntriesInHistory = 10;
  #entries;

  constructor(entries = []) {
    if (!Array.isArray(entries)) {
      throw new TypeError("FlipHistory entries must be an array");
    }
    this.#entries = Object.freeze([...entries]);
    Object.freeze(this);
  }

  get length() {
    return this.#entries.length;
  }

  get history() {
    return this.#entries.slice(-this.#amountOfEntriesInHistory);
  }

  add(flip) {
    return new FlipHistory([...this.#entries, flip]);
  }

  getStreak() {
    const entries = this.#entries;
    if (entries.length === 0) return 0;

    let streak = 0;
    for (let i = entries.length - 1; i >= 0; i--) {
      if (entries[i] === CoinSide.TAILS) break;
      streak++;
    }

    return streak;
  }

  getMaxStreak() {
    let maxStreak = 0;
    let streak = 0;

    for (const entry of this.#entries) {
      if (entry === CoinSide.HEADS) {
        streak++;
        if (streak > maxStreak) {
          maxStreak = streak;
        }
      } else {
        streak = 0;
      }
    }

    return maxStreak;
  }

  toJSON() {
    return JSON.stringify(this.#entries);
  }

  static fromJSON(json) {
    if (!json) return new FlipHistory();
    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) return new FlipHistory();
      return new FlipHistory(parsed);
    } catch {
      return new FlipHistory();
    }
  }
}
