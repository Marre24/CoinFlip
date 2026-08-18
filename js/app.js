import { animateCoinFlip } from "./coin/coinFlipAnimation.js";
import { flipCoin } from "./coin/coinFlipper.js";
import { updateMoney } from "./coin/purse.js";
import { storeAndGetHeadsInARow } from "./flipHistory/flipHistoryRepository.js";
import { updateMoneyDisplay } from "./coin/purse.js";
import { renderHistory } from "./flipHistory/flipHistoryService.js";
import { updateStreakDisplay } from "./flipHistory/flipHistoryService.js";
import { showMoneyAddedEffect } from "./vfx/visualEffects.js";
import { showCoinSide } from "./skin/skinService.js";
import { renderShop } from "./shop/shopService.js";
import { SkinType } from "./skin/skinRepository.js";
import { selectOrBuy } from "./shop/shopService.js";
import { showCurrentSkin } from "./skin/skinService.js";

const flipButton = document.getElementById("flipButton");
const coinWrapper = document.getElementById("coinWrapper");
const shopIcon = document.getElementById("shopIcon");
const shopModal = document.getElementById("shopModal");
const closeShop = document.getElementById("closeShop");
const shopGrid = document.getElementById("shopGrid");

const flipDuration = 700;

localStorage.setItem("coinFlipHistory", "");

let isFlipping = false;
async function handleFlipClick() {
  if (isFlipping) return;
  isFlipping = true;
  flipButton.disabled = true;

  await animateCoinFlip(coinWrapper, flipDuration);

  const result = flipCoin();
  showCoinSide(result);
  const headsInARow = storeAndGetHeadsInARow(result);
  const moneyAdded = updateMoney(headsInARow);
  if (moneyAdded !== undefined) showMoneyAddedEffect(moneyAdded);
  renderHistory();
  updateStreakDisplay();

  flipButton.disabled = false;
  isFlipping = false;
}

flipButton.onclick = handleFlipClick;

shopGrid.addEventListener("click", (e) => {
  const shopItem = e.target.closest(".shopItem");
  if (!shopItem) return;

  const skin = Object.values(SkinType).find((value) => value === shopItem.id);
  if (!skin) return;
  selectOrBuy(skin);
});

shopIcon.addEventListener("click", () => {
  renderShop();
});

closeShop.addEventListener("click", () => {
  shopModal.close();
});

updateMoneyDisplay();
renderHistory();
showCurrentSkin();
