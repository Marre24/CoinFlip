import { SkinType } from "../skin/skinRepository.js";
import { getHeadsFor } from "../skin/skinService.js";

const shopModal = document.getElementById("shopModal");

export function renderShop() {
  const ownedSkins = JSON.parse(localStorage.getItem("ownedSkins")) || [];
  ownedSkins.push(SkinType.BRONZE);

  ownedSkins.forEach((skin) => {
    const skinElement = document.getElementById(skin);
    if (!skinElement) {
      return;
    }
    skinElement.querySelector(".itemLabel").textContent = skin;
    skinElement.querySelector("img").src = getHeadsFor(skin);
  });

  shopModal.showModal();
}
