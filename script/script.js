let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close-button');
let popupForm = document.querySelector('.popup__form');
let profileTitle = document.querySelector('.profile__name-info');
let profileSubtitle = document.querySelector('.profile__about-me');
let inputName = popupForm.querySelector('#name-input');
let inputJob = popupForm.querySelector('#description-input');

function open() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
}

function close() {
  popup.classList.remove('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  close();
}

popupForm.addEventListener('submit', submitFormHandler);
popupOpen.addEventListener('click', open);
popupClose.addEventListener('click', close);