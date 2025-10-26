// Edit popup Button
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
function openPopup() {
  console.log("Cerrando popup...");
  popup.classList.add("popup_opened");
}
editButton.addEventListener("click", openPopup);

// Close popup Button
let closeButton = document.querySelector(".popup__close-button");
function closePopup() {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

// Fill in profile info in the popup form
let nameInput = document.querySelector("#name-input");
let occupationInput = document.querySelector("#ocupation-input");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");

function infoprofile() {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
}
nameInput.addEventListener("click", infoprofile);

// Form submit
let form = document.querySelector(".popup__form");
function save(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  closePopup(); // Cierra el popup
}
form.addEventListener("submit", save);
