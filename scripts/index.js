import {initialCards, obj, profile, popups, popupEditProfile, popupAddMesto, popupLookImg, openPopupEditProfile,
  openPopupAddMesto, popupCloseProfile, popupCloseMesto, popupCloseImg, submitButtonProfile, submitButtonMesto, 
  popupFormProfile, popupFormMesto, profileTitle, profileSubtitle, inputName, inputJob, popupImageLook, 
  cardsList, inputNameEl, inputUrlEl, elementTemplateSelector} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


export function openPopup(popup) { // open popup
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKey);
};
function closePopup(popup) { // close popup
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKey);
};

const validationFormProfile = new FormValidator(obj, popupFormProfile);
const validationFormMesto = new FormValidator(obj, popupFormMesto);
validationFormProfile.enableValidation();
validationFormMesto.enableValidation();

// коллбек для секции
const createCard = (cardData) => {
  const card = new Card(cardData, elementTemplateSelector);
  return card.generateCard();
}

const renderCard = (cardData) => {
  const card = createCard(cardData);
  cardsList.prepend(card);
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});
  
// функции редактирования профиля 
openPopupEditProfile.addEventListener('click', function() {    // открыть окно 
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});
function submitFormProfile(evt) {  // сохранение внесенных изменений 
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  closePopup(popupEditProfile);
}
popupFormProfile.addEventListener('submit', submitFormProfile);

// функции добавления карточки место
openPopupAddMesto.addEventListener('click', function() {    // открыть окно 
  openPopup(popupAddMesto);
  popupFormMesto.reset();
  validationFormMesto.resetValidation();
});
function submitFormAddMesto(evt) {     
  evt.preventDefault();
  const cardData = {
    name: "",
    link: "",
    };
  cardData.name = inputNameEl.value;
  cardData.link = inputUrlEl.value;
  renderCard(cardData);
  closePopup(popupAddMesto);
  popupFormMesto.reset();
  //validationFormMesto.toggleButtonState(); 
};
popupFormMesto.addEventListener('submit', submitFormAddMesto);

// закрыть окно через нажатие - Esc
function handleEscKey(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  }
};

//слушатели на нажатия для закрытия
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      } 
      if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
      }
  });
});