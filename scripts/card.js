export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("elements__like-button_active");
  }

  _handleDeleteButton() {
    this._element.classList.add("elements_remove");
    setTimeout(() => this._element.remove(), 300);
  }

  _handleImageClick() {
    this._handleCardClick({
      name: this._name,
      link: this._link,
    });
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._image.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector(".elements__image");
    this._title = this._element.querySelector(".elements__name");
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button",
    );
    this._likeButton = this._element.querySelector(".elements__like-button");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
