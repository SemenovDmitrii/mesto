<<<<<<< HEAD
const profile = document.querySelector('.profile');
// popup 
//const popup = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddMesto = document.querySelector('.popup_add-mesto');
const popupLookImg = document.querySelector('.popup_look-image');
// open popup button - "click"
const openPopupEditProfile = profile.querySelector('.profile__edit-button');
const openPopupAddMesto = profile.querySelector('.profile__add-button');
const openPopupImageLook = document.querySelector(".element__image");
// close popup
const popupCloseProfile = popupEditProfile.querySelector('.popup__close-button');
const popupCloseMesto = popupAddMesto.querySelector('.popup__close-button');
const popupCloseImg = popupLookImg.querySelector('.popup__close-button');
//submit button
const submitButtonProfile = popupEditProfile.querySelector('.popup__submit-button');
const submitButtonMesto = popupAddMesto.querySelector('.popup__submit-button');
// popup form
const popupFormProfile = popupEditProfile.querySelector('.popup__form');
const popupFormMesto = popupAddMesto.querySelector('.popup__form');


const profileTitle = profile.querySelector('.profile__name-info');
const profileSubtitle = profile.querySelector('.profile__about-me');
const inputName = popupFormProfile.querySelector('#name-input');
const inputJob = popupFormProfile.querySelector('#description-input');

const popupImageLook = document.querySelector('.popup__image');

const cardsList = document.querySelector('.element-list');  
const cardElement = cardsList.querySelector('.element');
const imageLink = cardsList.querySelector(".element__image");
const imageName = cardsList.querySelector(".element__name-mesto");
const inputNameEl = popupFormMesto.querySelector("#input-element");
const inputUrlEl = popupFormMesto.querySelector( "#input-url");
const cardTemplate = document.querySelector('#element-template').content;
=======
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  
  let profile = document.querySelector('.profile');
  // popup 
  let popup = document.querySelectorAll('.popup');
  let popupEditProfile = document.querySelector('.popup_edit-profile');
  let popupAddMesto = document.querySelector('.popup_add-mesto');
  let popupLookImg = document.querySelector('.popup_look-image');
  // open popup button - "click"
  let OpenPopupEditProfile = profile.querySelector('.profile__edit-button');
  let OpenPopupAddMesto = profile.querySelector('.profile__add-button');
  let OpenPopupImageLook = document.querySelector(".element__image");
  // close popup
  let popupCloseProfile = popupEditProfile.querySelector('.popup__close-button');
  let popupCloseMesto = popupAddMesto.querySelector('.popup__close-button');
  let popupCloseImg = popupLookImg.querySelector('.popup__close-button');
  //submit button
  let submitButtonProfile = popupEditProfile.querySelector('.popup__submit-button');
  let submitButtonMesto = popupAddMesto.querySelector('.popup__submit-button');
  // popup form
  let popupFormProfile = popupEditProfile.querySelector('.popup__form');
  let popupFormMesto = popupAddMesto.querySelector('.popup__form');


  let profileTitle = profile.querySelector('.profile__name-info');
  let profileSubtitle = profile.querySelector('.profile__about-me');
  let inputName = popupFormProfile.querySelector('#name-input');
  let inputJob = popupFormProfile.querySelector('#description-input');

  let popupImageLook = document.querySelector('.popup__image');

  let cardsList = document.querySelector('.element-list');  
  let cardElement = cardsList.querySelector('.element');
  let imageLink = cardsList.querySelector(".element__image");
  let imageName = cardsList.querySelector(".element__name-mesto");
  let inputNameEl = popupFormMesto.querySelector("#input-element");
  let inputUrlEl = popupFormMesto.querySelector( "#input-url");
  let cardTemplate = document.querySelector('#element-template').content;
>>>>>>> 3e6a4a48d41a14e4a69a40849eb85799d24cea46
 
  
function createCard(name, link) { 
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const imageLink = cardElement.querySelector(".element__image");
  const imageName = cardElement.querySelector(".element__name-mesto");
  imageName.textContent = name;
  imageLink.alt = name;
  imageLink.src = link;

  cardElement.querySelector('.element__remove').addEventListener('click', deleteElement);  //delete
  cardElement.querySelector('.element__like').addEventListener('click', likeElement)  //like
  cardElement.querySelector('.element__image').addEventListener('click', function(evt) {   //image look - нужно перенести в отдельную функцию
    popupLookImg.querySelector('.popup__image-caption').textContent = name;
    popupImageLook.alt = name;
    popupImageLook.src = link;
    openPopup(popupLookImg);
  });

  return cardElement;
};

// рендер начальных карточек по условию задания
initialCards.forEach(function (initialCards) { 
  const cardElement = createCard(initialCards.name, initialCards.link);
  cardsList.appendChild(cardElement);
});
  

function openPopup(popup) { // open popup
  popup.classList.add('popup_opened');
};
function closePopup(popup) { // close popup
  popup.classList.remove('popup_opened');
};


// функции редактирования профиля 
openPopupEditProfile.addEventListener('click', function() {    // открыть окно 
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});
popupCloseProfile.addEventListener('click', function() {   // закрыть окно 
  closePopup(popupEditProfile);
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
});
popupCloseMesto.addEventListener('click', function() {  // закрыть окно 
  closePopup(popupAddMesto);
});
function submitFormAddMesto(evt) {
  evt.preventDefault();
  const name = inputNameEl.value;
  const link = inputUrlEl.value;
  const cardElement = createCard(name, link);
  cardsList.prepend(cardElement);
  closePopup(popupAddMesto);
  inputNameEl.value = '';
  inputUrlEl.value = '';
};
popupFormMesto.addEventListener('submit', submitFormAddMesto);

//закрытие попап с картинкой 

popupCloseImg.addEventListener('click', function() {  
  closePopup(popupLookImg);
});

function deleteElement(evt) { // function Delete 
  evt.target.closest('.element').remove();
};

function likeElement(evt) { // function Like
  evt.target.classList.toggle('element__like_active');
};