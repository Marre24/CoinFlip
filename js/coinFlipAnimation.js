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
