export function showMoneyAddedEffect(moneyAdded) {
  const moneyLabel = document.getElementById("moneyLabel");
  const rect = moneyLabel.getBoundingClientRect();

  const effect = document.createElement("div");
  effect.className = "money-added-effect";
  effect.textContent = `+$${moneyAdded}`;
  effect.style.left = `${rect.left}px`;
  effect.style.top = `${rect.top}px`;

  document.body.appendChild(effect);

  effect.addEventListener("animationend", () => {
    effect.remove();
  });
}

export function showMoneyRemovedEffect(moneyRemoved) {
  const moneyLabel = document.getElementById("moneyLabel");
  const rect = moneyLabel.getBoundingClientRect();

  const effect = document.createElement("div");
  effect.className = "money-removed-effect";
  effect.textContent = `-$${moneyRemoved}`;
  effect.style.left = `${rect.left}px`;
  effect.style.top = `${rect.top}px`;

  document.body.appendChild(effect);

  effect.addEventListener("animationend", () => {
    effect.remove();
  });
}
