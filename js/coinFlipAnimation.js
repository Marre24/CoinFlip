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

    let settled = false;
    let fallbackTimeoutId = null;

    const finish = () => {
      if (settled) return;
      settled = true;
      if (fallbackTimeoutId !== null) {
        clearTimeout(fallbackTimeoutId);
        fallbackTimeoutId = null;
      }
      wrapperElement.removeEventListener("animationend", handleAnimationEnd);
      wrapperElement.classList.remove("coin-flipping");
      resolve();
    };

    const handleAnimationEnd = (event) => {
      if (event.target !== wrapperElement) return;
      finish();
    };

    const startAnimation = () => {
      wrapperElement.addEventListener("animationend", handleAnimationEnd);
      wrapperElement.classList.add("coin-flipping");

      fallbackTimeoutId = setTimeout(finish, duration + 100);
    };

    wrapperElement.classList.remove("coin-flipping");
    requestAnimationFrame(() => {
      requestAnimationFrame(startAnimation);
    });
  });
}
