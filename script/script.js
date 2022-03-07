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
  let popupEditProfile = document.querySelector('.popup__edit-profile');
  let popupAddMesto = document.querySelector('.popup__add-mesto');
  let popupLookImg = document.querySelector('.popup__look-image');
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

  let cardsList = document.querySelector('.element__list');  
  let cardElement = cardsList.querySelector('.element');
  let imageLink = cardsList.querySelector(".element__image");
  let imageName = cardsList.querySelector(".element__name-mesto");
  let inputNameEl = popupFormMesto.querySelector("#input-element");
  let inputUrlEl = popupFormMesto.querySelector( "#input-url");
  let cardTemplate = document.querySelector('#element-template').content;
 
  
function createCard(name, link) { // работает 
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    const imageLink = cardElement.querySelector(".element__image");
    const imageName = cardElement.querySelector(".element__name-mesto");
    imageName.textContent = name;
    imageLink.alt = name;
    imageLink.src = link;

    cardElement.querySelector('.element__remove').addEventListener('click', function (evt) { //delete
      evt.target.closest('.element');
      cardElement.remove();
    });

    cardElement.querySelector('.element__like').addEventListener('click', function (evt) { //like
      evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__image').addEventListener('click', function(evt) {   //image look
      popupLookImg.querySelector('.popup__image-caption').textContent = name;
      popupImageLook.alt = name;
      popupImageLook.src = link;
      popupOpenClose(2);
    });

    return cardElement;
  };
  
  initialCards.forEach(function (initialCards) { //работает 
    const cardElement = createCard(initialCards.name, initialCards.link);
    cardsList.appendChild(cardElement);
  });
  
  function addCard(name, link) { // функция добавления карточки - не работает
    name = inputNameEl.value;
    link = inputUrlEl.value;
    cardElement = createCard(name, link);
    cardsList.prepend(cardElement);
  };   
  
  submitButtonMesto.addEventListener('click', function(evt) { // - не работает
    evt.preventDefault();
    addCard(inputNameEl.value, inputUrlEl.value);
    inputNameEl.value = '';
    inputUrlEl.value = '';
    popupOpenClose(1);
  });


  //popup Open Close
  function popupOpenClose(index) {
    popup[index].classList.toggle('popup_opened');
  }
  OpenPopupEditProfile.addEventListener('click', ()=> popupOpenClose(0));
  OpenPopupAddMesto.addEventListener('click', ()=> popupOpenClose(1));

  popupCloseProfile.addEventListener('click', ()=> popupOpenClose(0));
  popupCloseMesto.addEventListener('click', ()=> popupOpenClose(1));
  popupCloseImg.addEventListener('click', ()=> popupOpenClose(2));



  // save popup - не работает
  function submitFormProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputJob.value;
    popupOpenClose(0);
  }
  submitButtonProfile.addEventListener('click', submitFormProfile);

