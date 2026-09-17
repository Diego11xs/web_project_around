import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = null;

    this._submitButton = this._form.querySelector(".popup__save-button");

    this._initialButtonText = this._submitButton.textContent;
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  renderLoading(isLoading) {
    this._submitButton.textContent = isLoading
      ? "Eliminando..."
      : this._initialButtonText;

    this._submitButton.disabled = isLoading;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (this._handleSubmit) {
        this._handleSubmit();
      }
    });
  }
}
