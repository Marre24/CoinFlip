import { SkinType } from "../skin/skinRepository.js";
import { getHeadsFor } from "../skin/skinService.js";
import { getPriceForSkin } from "../skin/skinService.js";
import { hasEnoughMoneyFor } from "../money/moneyService.js";
import { deductMoney } from "../money/moneyService.js";
import { showCurrentSkin } from "../skin/skinService.js";
import { getLockedSkin } from "../skin/skinService.js";

const shopModal = document.getElementById("shopModal");
const shopItems = document.querySelectorAll(".shopItem");

export function renderShop() {
  const ownedSkins = getOwnedSkins();
  ownedSkins.push(SkinType.BRONZE);

  shopItems.forEach((item) => {
    const skin = Object.values(SkinType).find((value) => value === item.id);
    if (!skin) {
      return;
    }

    const price = getPriceForSkin(skin);
    if (ownedSkins.includes(skin)) {
      item.querySelector(".itemLabel").textContent = skin;
      item.querySelector("img").src = getHeadsFor(skin);
      return;
    }
    item.querySelector(".itemLabel").textContent = price + "$";
    item.querySelector("img").src = getLockedSkin();
  });

  getPriceForSkin;

  shopModal.showModal();
}

export function selectOrBuy(skin) {
  const ownedSkins = getOwnedSkins();
  if (ownedSkins.includes(skin)) {
    localStorage.setItem("skinType", skin);
    showCurrentSkin();
    shopModal.close();
    return;
  }

  if (!hasEnoughMoneyFor(getPriceForSkin(skin))) {
    return;
  }

  deductMoney(getPriceForSkin(skin));
  ownedSkins.push(skin);
  localStorage.setItem("ownedSkins", JSON.stringify(ownedSkins));
  localStorage.setItem("skinType", skin);
  showCurrentSkin();
  shopModal.close();
}

function getOwnedSkins() {
  return JSON.parse(localStorage.getItem("ownedSkins")) || [];
}
