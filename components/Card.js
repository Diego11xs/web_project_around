export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    currentUserId,
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._isLiked = data.isLiked || false;
    this._ownerId =
      typeof data.owner === "string" ? data.owner : data.owner?._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._currentUserId = currentUserId;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  isLiked() {
    return this._isLiked;
  }

  updateLikeStatus(isLiked) {
    this._isLiked = isLiked;

    this._likeButton.classList.toggle(
      "elements__like-button_active",
      this._isLiked,
    );
  }

  getId() {
    return this._id;
  }

  removeCard() {
    this._element.classList.add("elements_remove");
    setTimeout(() => this._element.remove(), 300);
  }

  removeCard() {
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
      this._handleLikeClick(this);
    });

    if (this._deleteButton) {
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteClick(this);
      });
    }

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
    if (this._ownerId !== this._currentUserId) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }

    this._likeButton = this._element.querySelector(".elements__like-button");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this.updateLikeStatus(this._isLiked);

    this._setEventListeners();

    return this._element;
  }
}
