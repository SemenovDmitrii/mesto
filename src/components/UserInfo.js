export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._userName.textContent,
      profileAbout: this._userAbout.textContent,
    }
  }

  setUserInfo({name, about}) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.style.backgroundImage = `url(${avatarUrl})`;
  }
}