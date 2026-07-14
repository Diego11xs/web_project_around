import { initialCards } from "./cards.js";
import Card from "./Card.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  occupationSelector: ".profile__occupation",
});

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
const profileForm = profilePopup.querySelector(".popup__form");
const nameInput = profilePopup.querySelector("#name-input");
const occupationInput = profilePopup.querySelector("#occupation-input");

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const profilePopupForm = new PopupWithForm(".popup__profile", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    occupation: formData.occupation,
  });

  profilePopupForm.close();
});

profilePopupForm.setEventListeners();

editButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();

  nameInput.value = currentUser.name;
  occupationInput.value = currentUser.occupation;

  profilePopupForm.open();
});

/* POPUP NUEVO LUGAR */

const newPlaceButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup__newplace");
const newPlaceForm = newPlacePopup.querySelector(".popup__newplace-form");
const newPlaceFormValidator = new FormValidator(validationConfig, newPlaceForm);

const placePopupForm = new PopupWithForm(".popup__newplace", (formData) => {
  const cardElement = createCard({
    name: formData.title,
    link: formData.link,
  });

  cardSection.addItem(cardElement);

  placePopupForm.close();
});

placePopupForm.setEventListeners();

newPlaceButton.addEventListener("click", () => {
  placePopupForm.open();
});

/* POPUP IMAGE PREVIEW */

const imagePopup = new PopupWithImage(".popup__image-preview");

imagePopup.setEventListeners();

/* TARJETAS INICIALES */

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", (data) => {
    imagePopup.open(data);
  });

  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  ".elements",
);

cardSection.renderItems();

/* INICIALIZAR VALIDACIÓN */

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();
