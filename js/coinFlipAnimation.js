/**
 * coinFlipAnimation.js
 *
 * Exports animateCoinFlip(): animates a coin image spinning (rotating on
 * its Y axis) while hopping up and down, then resolves once the animation
 * has fully finished.
 *
 * The actual @keyframes and .coin-flipping class live in css/styles.css —
 * this file just toggles that class and waits for it to finish.
 *
 * Usage:
 *   import { animateCoinFlip } from "./coinFlipAnimation.js";
 *   await animateCoinFlip(coinImage);
 */

/**
 * Animates a coin flip on the given image element.
 *
 * @param {HTMLElement} coinElement - The coin <img> element to animate.
 * @param {Object} [options]
 * @param {number} [options.duration=1200] - Animation duration in ms.
 * @returns {Promise<void>} Resolves once the flip animation has finished.
 */
export function animateCoinFlip(coinElement, options = {}) {
  const duration = options.duration ?? 1200;

  return new Promise((resolve) => {
    if (!coinElement) {
      resolve();
      return;
    }

    coinElement.style.animationDuration = `${duration}ms`;

    // Restart the animation cleanly even if it's already running/finished
    // by removing the class, forcing reflow, then re-adding it.
    coinElement.classList.remove("coin-flipping");
    void coinElement.offsetWidth; // force reflow
    coinElement.classList.add("coin-flipping");

    const handleAnimationEnd = (event) => {
      // Ignore bubbled animationend events from other elements/properties.
      if (event.target !== coinElement) return;
      coinElement.removeEventListener("animationend", handleAnimationEnd);
      coinElement.classList.remove("coin-flipping");
      resolve();
    };

    coinElement.addEventListener("animationend", handleAnimationEnd);

    // Fallback in case animationend doesn't fire (e.g. animations disabled).
    setTimeout(() => {
      coinElement.removeEventListener("animationend", handleAnimationEnd);
      coinElement.classList.remove("coin-flipping");
      resolve();
    }, duration + 100);
  });
}
