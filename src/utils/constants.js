export const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error',
    inputErrorClassActive: 'popup__validate-error_active',
  };

export const profile = document.querySelector('.profile');
// popup 
export const popupSelector = document.querySelectorAll('.popup');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddMesto = document.querySelector('.popup_type_add-mesto');
export const popupLookImg = document.querySelector('.popup_type_look-image');
export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
// open popup button - "click"
export const editButtonProfile = profile.querySelector('.profile__edit-button');
export const addButtonMesto = profile.querySelector('.profile__add-button');
export const editButtonAvatar = profile.querySelector('.profile__edit-avatar-button');

// input profile
export const profileNameInput = popupEditProfile.querySelector('#name-input');
export const profileAboutInput = popupEditProfile.querySelector('#about-input');

// close popup
export const popupCloseProfile = popupEditProfile.querySelector('.popup__close-button');
export const popupCloseMesto = popupAddMesto.querySelector('.popup__close-button');
export const popupCloseImg = popupLookImg.querySelector('.popup__close-button');
//submit button
export const submitButtonProfile = popupEditProfile.querySelector('.popup__button');
export const submitButtonMesto = popupAddMesto.querySelector('.popup__button');
// // popup form
export const popupFormProfile = popupEditProfile.querySelector('.popup__form');
export const popupFormMesto = popupAddMesto.querySelector('.popup__form');
export const popupFormAvatar = popupEditAvatar.querySelector('.popup__form');

export const profileTitle = profile.querySelector('.profile__name-info');
export const profileSubtitle = profile.querySelector('.profile__about-me');
export const inputName = popupFormProfile.querySelector('#name-input');
export const inputJob = popupFormProfile.querySelector('#description-input');

export const popupImageLook = document.querySelector('.popup__image');

export const cardsList = document.querySelector('.element-list');  
export const inputNameEl = popupFormMesto.querySelector("#element-input");
export const inputUrlEl = popupFormMesto.querySelector( "#url-input");

export const popupImage = popupLookImg.querySelector('.popup__image');
export const imageCaption = popupLookImg.querySelector('.popup__image-caption');

export const templateSelector = document.querySelector('#element-template').content;