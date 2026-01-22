/* ============================
   POPUP PERFIL
============================ */

const editButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup__profile");
const profileCloseBtn = profilePopup.querySelector(".popup__close-button");
const profileForm = profilePopup.querySelector(".popup__form");

const nameInput = profilePopup.querySelector("#name-input");
const occupationInput = profilePopup.querySelector("#ocupation-input");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  profilePopup.classList.add("popup_opened");
}

function closeProfilePopup() {
  profilePopup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openProfilePopup);
profileCloseBtn.addEventListener("click", closeProfilePopup);

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  closeProfilePopup();
});

/* ============================
   POPUP NUEVO LUGAR
============================ */

const newPlaceButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup__newplace");
const newPlaceCloseBtn = newPlacePopup.querySelector(
  ".popup__newplace-closebtn",
);
const newPlaceForm = newPlacePopup.querySelector(".popup__newplace-form");
const newPlaceTitleInput = newPlacePopup.querySelector("#newplace-input");
const newPlaceUrlInput = newPlacePopup.querySelector("#newplace-url-input");

function openNewPlacePopup() {
  newPlacePopup.classList.add("popup_opened");
}

function closeNewPlacePopup() {
  newPlacePopup.classList.remove("popup_opened");
}

newPlaceButton.addEventListener("click", openNewPlacePopup);
newPlaceCloseBtn.addEventListener("click", closeNewPlacePopup);

/* ============================
   CREATE CARD FUNCTION
============================ */

const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(data) {
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);

  const image = cardElement.querySelector(".elements__image");
  const title = cardElement.querySelector(".elements__name");
  const deleteBtn = cardElement.querySelector(".elements__delete-button");
  const likeBtn = cardElement.querySelector(".elements__like-button");

  image.src = data.link;
  image.alt = data.name;
  title.textContent = data.name;

  // PREVIEW
  image.addEventListener("click", () => {
    openImagePopup(data.link, data.name);
  });

  // LIKE
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("elements__like-button_active");
  });

  // DELETE
  deleteBtn.addEventListener("click", () => {
    cardElement.classList.add("elements_remove");
    setTimeout(() => cardElement.remove(), 300);
  });

  return cardElement;
}

/* ============================
   TARJETAS INICIALES
============================ */

initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData));
});

/* ============================
   SUBMIT NUEVO LUGAR
============================ */

newPlaceForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  cardsContainer.prepend(
    createCard({
      name: newPlaceTitleInput.value,
      link: newPlaceUrlInput.value,
    }),
  );

  newPlaceForm.reset();
  closeNewPlacePopup();
});

/* ============================
   ESC CLOSE POPUPS
============================ */
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      openedPopup.classList.remove("popup_opened");
    }
  }
});

/* ============================
   POPUP IMAGE PREVIEW
============================ */
const imagePopup = document.querySelector(".popup__image-preview");
const previewImage = imagePopup.querySelector(".popup__preview-image");
const previewCaption = imagePopup.querySelector(".popup__preview-caption");
const previewCloseBtn = imagePopup.querySelector(".popup__preview-close");

function openImagePopup(src, caption) {
  previewImage.src = src;
  previewImage.alt = caption;
  previewCaption.textContent = caption;

  imagePopup.classList.add("popup_opened");
}

previewCloseBtn.addEventListener("click", () => {
  imagePopup.classList.remove("popup_opened");
});
