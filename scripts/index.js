import { openPopup, closePopup, setOverlayCloseListener } from "./Utils.js";
import Card from "./card.js";
import { initialCards } from "./cards.js";
import FormValidator from "./FormValidator.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/* POPUP PERFIL */

const editButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup__profile");
const profileCloseBtn = profilePopup.querySelector(".popup__close-button");
const profileForm = profilePopup.querySelector(".popup__form");

const nameInput = profilePopup.querySelector("#name-input");
const occupationInput = profilePopup.querySelector("#ocupation-input");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

const profileFormValidator = new FormValidator(validationConfig, profileForm);

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;

  nameInput.dispatchEvent(new Event("input"));
  occupationInput.dispatchEvent(new Event("input"));

  openPopup(profilePopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
  profileFormValidator.resetValidation();
}

editButton.addEventListener("click", openProfilePopup);
profileCloseBtn.addEventListener("click", closeProfilePopup);

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  closeProfilePopup();
});

/* POPUP NUEVO LUGAR */

const newPlaceButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup__newplace");
const newPlaceCloseBtn = newPlacePopup.querySelector(
  ".popup__newplace-closebtn",
);
const newPlaceForm = newPlacePopup.querySelector(".popup__newplace-form");
const newPlaceTitleInput = newPlacePopup.querySelector("#newplace-input");
const newPlaceUrlInput = newPlacePopup.querySelector("#newplace-url-input");

const newPlaceFormValidator = new FormValidator(validationConfig, newPlaceForm);

function openNewPlacePopup() {
  openPopup(newPlacePopup);
}

function closeNewPlacePopup() {
  closePopup(newPlacePopup);
  newPlaceForm.reset();
  newPlaceFormValidator.resetValidation();
}

newPlaceButton.addEventListener("click", openNewPlacePopup);
newPlaceCloseBtn.addEventListener("click", closeNewPlacePopup);

/* CONTENEDOR DE TARJETAS */

const cardsContainer = document.querySelector(".elements");

/* POPUP IMAGE PREVIEW */

const imagePopup = document.querySelector(".popup__image-preview");
const previewImage = imagePopup.querySelector(".popup__preview-image");
const previewCaption = imagePopup.querySelector(".popup__preview-caption");
const previewCloseBtn = imagePopup.querySelector(".popup__preview-close");

function openImagePopup(src, caption) {
  previewImage.src = src;
  previewImage.alt = caption;
  previewCaption.textContent = caption;

  openPopup(imagePopup);
}

previewCloseBtn.addEventListener("click", () => {
  closePopup(imagePopup);
});

/* SUBMIT NUEVO LUGAR */

newPlaceForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const card = new Card(
    {
      name: newPlaceTitleInput.value,
      link: newPlaceUrlInput.value,
    },
    "#card-template",
    openImagePopup,
  );

  cardsContainer.prepend(card.generateCard());

  closeNewPlacePopup();
});

/* TARJETAS INICIALES */

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template", openImagePopup);
  cardsContainer.append(card.generateCard());
});

/* CERRAR POPUPS AL HACER CLIC EN EL OVERLAY */

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  setOverlayCloseListener(popup);
});

/* INICIALIZAR VALIDACIÓN */

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();
