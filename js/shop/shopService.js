import { SkinType } from "../skin/skinRepository.js";

const shopModal = document.getElementById("shopModal");

export function renderShop() {
  const ownedSkins = JSON.parse(localStorage.getItem("ownedSkins")) || [];

  ownedSkins.forEach((skin) => {
    const skinElement = document.getElementById(skin);
    if (skinElement) {
      skinElement.querySelector(".itemLabel").textContent = skin;
    }
  });

  shopModal.showModal();
}
