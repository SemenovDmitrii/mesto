import '../../src/pages/index.css';
import {initialCards, obj, profile, popupSelector, popupEditProfile, popupAddMesto, popupLookImg, editButtonProfile, addButtonMesto, editButtonAvatar,
  popupCloseProfile, popupCloseMesto, popupCloseImg, submitButtonProfile, submitButtonMesto, popupFormProfile, popupFormAvatar,
  popupFormMesto, profileTitle, profileSubtitle, inputName, inputJob, popupImageLook, inputNameEl, cardsList,
  inputUrlEl, popupImage, imageCaption, profileNameInput, profileAboutInput, templateSelector} from '../utils/constants.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { renderLoading } from '../utils/utils.js'
import { Api } from '../components/Api.js';

// api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: 'e3187960-22db-46b1-a8e9-14c8569f58ff',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.loadUserInfo(), api.getCards()])
  .then(([userData, cardsData])=>{

    userInfoClass.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatarUrl: userData.avatar
    })
    userInfoClass.userId = userData._id

    section.renderedItems = cardsData;
    section.renderItems();
  })
  .catch((err)=>{
    console.log(`Ошибка: ${err}`)
  })

const validationFormProfile = new FormValidator(obj, popupFormProfile);
const validationFormMesto = new FormValidator(obj, popupFormMesto);
const validationFormAvatar = new FormValidator(obj, popupFormAvatar);

validationFormProfile.enableValidation();
validationFormMesto.enableValidation();
validationFormAvatar.enableValidation();

const userInfoClass = new UserInfo({
  nameSelector: '.profile__name-info',
  aboutSelector: '.profile__about-me',
  avatarSelector: '.profile__avatar'
})

//new Card
const newCard = (data)=> {
  const card = new Card({
    text: data.name,
    link: data.link,
    likesArr: data.likes,
    userId: userInfoClass.userId,
    ownerId: data.owner._id,
    cardId: data._id,
    templateSelector,
    handleCardClick: () => {
      popupOpenCard.open(data)
    },
  
    confirmDelete: (thisElement) => {
      popupConfirm.open()
      popupConfirm.confirmHandler = ()=>{
        api.handleDeleteCard(data._id)
          .then(()=> {
            thisElement.remove()
            popupConfirm.close()
          })
          .catch((err)=>{
            console.log(`Ошибка: ${err}`)
        })
      }
    },
  
    handleLike: (likeButton, quantityLikesElement, hasLike)=>{
      if(!hasLike) {
        api.setLike(data._id)
          .then(data=>{
            quantityLikesElement.textContent = data.likes.length
            likeButton.classList.add('element__like_active')
          })
          .catch(err=>{
            console.log(`Ошибка: ${err}`)
          })
      } else {
        api.unsetLike(data._id)
        .then(data=>{
          quantityLikesElement.textContent = data.likes.length
          likeButton.classList.remove('element__like_active')
        })
        .catch(err=>{
          console.log(`Ошибка: ${err}`)
        })
      }
    },
  })
  const cardElement = card.generateCard()
  section.addItem(cardElement, 'prepend')
}

//new card
const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_type_add-mesto',
  handleSubmitForm: (data) => {
    renderLoading(true, popupNewCard.submitButton)
    api.addCard(data)
      .then((data)=> {
        newCard(data)
        popupNewCard.close()
      })
      .catch((err)=>{
        console.log(`Ошибка: ${err}`)
      })
      .finally(()=>{
        renderLoading(false, popupNewCard.submitButton, 'Создать')
      });
}});

//edit profile
const popupInfoProfileEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleSubmitForm: (data) => {
    renderLoading(true, popupInfoProfileEdit.submitButton)
    api.updateUserInfo(data)
      .then(data => {
        userInfoClass.setUserInfo({
          name: data.name,
          about: data.about,
          avatarUrl: data.avatar
        })
        popupInfoProfileEdit.close()
    })
      .catch((err)=>{
        console.log(`Ошибка: ${err}`)
    })
      .finally(
        renderLoading(false, popupInfoProfileEdit.submitButton, 'Сохранить')
      )
  }
}
);

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleSubmitForm: (data) => {
    renderLoading(true, popupEditAvatar.submitButton)
    api.editAvatar(data.newAvatar)
      .then(data=>{
        userInfoClass.setUserInfo({
          name: data.name,
          about: data.about,
          avatarUrl: data.avatar
        })
        popupEditAvatar.close()
      })
      .catch((err)=>{
        console.log(`Ошибка: ${err}`)
      })
      .finally(()=>(
        renderLoading(false, popupEditAvatar.submitButton, 'Сохранить')
      ))
  }
})

const popupOpenCard = new PopupWithImage('.popup_type_look-image');

//Section
const section = new Section({
  renderer: (data) => {
    newCard(data)
  }
}, cardsList)

// PopupWithConfirmation
const popupConfirm = new PopupWithConfirmation({
  popupSelector: '.popup_type_confirm',
  confirmHandler: ''
})

// Установка слушателей формы
popupNewCard.setEventListeners();
popupInfoProfileEdit.setEventListeners();
popupOpenCard.setEventListeners();
popupConfirm.setEventListeners();

// обработчик кнопки открытия попапа редактирования
function editProfile() {
  popupInfoProfileEdit.open();
  profileNameInput.value = userInfoClass.getUserInfo().profileName;
  profileAboutInput.value = userInfoClass.getUserInfo().profileAbout;
  validationFormProfile.resetValidation()
}

// обработчик кнопки добавления карточки
function addMesto() {
  popupNewCard.open();
  validationFormMesto.resetValidation();
}

// обработчик кнопки изменения аватарки
function editAvatar() {
  popupEditAvatar.open() //нужно написать 
  validationFormAvatar.resetValidation()
}

// Слушатели кнопок 
editButtonProfile.addEventListener('click', editProfile);
addButtonMesto.addEventListener('click', addMesto);
editButtonAvatar.addEventListener('click', editAvatar);