/* =========================
   IMPORTACIONES
========================= */

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

/* =========================
   CONFIGURACIÓN DE LA API
========================= */

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "e60f65dd-980b-46ad-8527-ce4e149ad146",
    "Content-Type": "application/json",
  },
});

/* =========================
   CONFIGURACIÓN DE VALIDACIÓN
========================= */

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/* =========================
   INFORMACIÓN DEL USUARIO
========================= */

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  occupationSelector: ".profile__occupation",
  avatarSelector: ".profile__avatar",
});

let currentUserId;

/* =========================
   POPUP DE VISTA PREVIA
========================= */

const imagePopup = new PopupWithImage(".popup__image-preview");

imagePopup.setEventListeners();

/* =========================
   POPUP DE CONFIRMACIÓN
========================= */

const confirmationPopup = new PopupWithConfirmation(".popup__confirmation");

confirmationPopup.setEventListeners();

/* =========================
   MANEJADORES DE TARJETAS
========================= */

function handleCardClick(data) {
  imagePopup.open(data);
}

function handleDeleteClick(cardToDelete) {
  confirmationPopup.setSubmitAction(() => {
    confirmationPopup.renderLoading(true);

    api
      .deleteCard(cardToDelete.getId())
      .then(() => {
        cardToDelete.removeCard();
        confirmationPopup.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        confirmationPopup.renderLoading(false);
      });
  });

  confirmationPopup.open();
}

function handleLikeClick(card) {
  api
    .changeLikeCardStatus(card.getId(), card.isLiked())
    .then((updatedCard) => {
      card.updateLikeStatus(updatedCard.isLiked);
    })
    .catch((err) => {
      console.error(err);
    });
}

/* =========================
   CREACIÓN DE TARJETAS
========================= */

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    currentUserId,
  );

  return card.generateCard();
}

/* =========================
   SECCIÓN DE TARJETAS
========================= */

let cardSection;

/* =========================
   POPUP PARA EDITAR PERFIL
========================= */

const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector(".popup__profile");

const profileForm = profilePopup.querySelector(".popup__form");

const nameInput = profilePopup.querySelector("#name-input");

const occupationInput = profilePopup.querySelector("#occupation-input");

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const profilePopupForm = new PopupWithForm(".popup__profile", (formData) => {
  profilePopupForm.renderLoading(true);

  api
    .updateUserInfo({
      name: formData.name,
      about: formData.occupation,
    })
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        occupation: userData.about,
        avatar: userData.avatar,
      });

      profilePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profilePopupForm.renderLoading(false);
    });
});

profilePopupForm.setEventListeners();

editButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();

  nameInput.value = currentUser.name;
  occupationInput.value = currentUser.occupation;

  profileFormValidator.resetValidation();
  profilePopupForm.open();
});

/* =========================
   POPUP PARA CAMBIAR AVATAR
========================= */

const avatarButton = document.querySelector(".profile__avatar-button");

const avatarPopup = document.querySelector(".popup__avatar-edit");

const avatarForm = avatarPopup.querySelector(".popup__avatar-form");

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

const avatarPopupForm = new PopupWithForm(".popup__avatar-edit", (formData) => {
  avatarPopupForm.renderLoading(true);

  api
    .updateAvatar({
      avatar: formData.avatar,
    })
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        occupation: userData.about,
        avatar: userData.avatar,
      });

      avatarPopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarPopupForm.renderLoading(false);
    });
});

avatarPopupForm.setEventListeners();

avatarButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarPopupForm.open();
});

/* =========================
   POPUP PARA AGREGAR LUGAR
========================= */

const newPlaceButton = document.querySelector(".profile__add-button");

const newPlacePopup = document.querySelector(".popup__newplace");

const newPlaceForm = newPlacePopup.querySelector(".popup__newplace-form");

const newPlaceFormValidator = new FormValidator(validationConfig, newPlaceForm);

const placePopupForm = new PopupWithForm(".popup__newplace", (formData) => {
  placePopupForm.renderLoading(true);

  api
    .addNewCard({
      name: formData.title,
      link: formData.link,
    })
    .then((cardData) => {
      const cardElement = createCard(cardData);

      cardSection.prependItem(cardElement);
      placePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      placePopupForm.renderLoading(false);
    });
});

placePopupForm.setEventListeners();

newPlaceButton.addEventListener("click", () => {
  newPlaceFormValidator.resetValidation();
  placePopupForm.open();
});

/* =========================
   INICIALIZAR VALIDACIONES
========================= */

profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

/* =========================
   CARGA INICIAL
========================= */

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;

    userInfo.setUserInfo({
      name: userData.name,
      occupation: userData.about,
      avatar: userData.avatar,
    });

    cardSection = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          const cardElement = createCard(cardData);

          cardSection.addItem(cardElement);
        },
      },
      ".elements",
    );

    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });
