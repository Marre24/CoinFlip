export function animateCoinFlip(wrapperElement, options = {}) {
  const duration = options.duration ?? 1200;

  return new Promise((resolve) => {
    if (!wrapperElement) {
      resolve();
      return;
    }

    wrapperElement.style.animationDuration = `${duration}ms`;
    const coinImage = wrapperElement.querySelector("#coinImage");
    if (coinImage) {
      coinImage.style.animationDuration = `${duration}ms`;
    }

    wrapperElement.classList.remove("coin-flipping");
    void wrapperElement.offsetWidth; // force reflow
    wrapperElement.classList.add("coin-flipping");

    const handleAnimationEnd = (event) => {
      if (event.target !== wrapperElement) return;
      wrapperElement.removeEventListener("animationend", handleAnimationEnd);
      wrapperElement.classList.remove("coin-flipping");
      resolve();
    };

    wrapperElement.addEventListener("animationend", handleAnimationEnd);

    setTimeout(() => {
      wrapperElement.removeEventListener("animationend", handleAnimationEnd);
      wrapperElement.classList.remove("coin-flipping");
      resolve();
    }, duration + 100);
  });
}
