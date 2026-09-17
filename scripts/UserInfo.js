export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._occupationElement = document.querySelector(occupationSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
    };
  }

  setUserInfo({ name, occupation, avatar }) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = occupation;
    this._avatarElement.src = avatar;
  }
}
