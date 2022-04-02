import { popupLookImg } from './constants.js';
import { popupImage } from './constants.js';
import { ImageCaption } from './constants.js';
import { openPopup } from './index.js';

export class Card {
  constructor(cardData) { 
    this._image = cardData.link; 
    this._name = cardData.name; 
  }
    
    // клонируем template элемент
    _getTemplateElement () {
      const cardTemplate = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);
      return cardTemplate;
    }
  
    // добавление слушателей 
    _setEventListener() {
      this._cardLikeButton();
      this._cardDeleteButton();
      this._cardOpenClick();
    }
  
    // лайк
    _cardLikeButton() {
      this._likeButton.addEventListener('click', () => {
        this._likeButton.classList.toggle('element__like_active');
      })
    }
  
    // удаления
    _cardDeleteButton() {
      this._deleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
      });
    }

    // попап картинки 
    _cardOpenClick() {
      this._cardImage.addEventListener('click', () => {
        popupImage.src = this._cardImage.src;
        popupImage.alt = this._cardImage.alt;
        ImageCaption.textContent = this._cardName.textContent;
        openPopup(popupLookImg);
      })
    }
    
    // итоговая генерация и сохранение элемента
    generateCard() {
      this._element = this._getTemplateElement();
      this._cardImage = this._element.querySelector('.element__image');
      this._cardName = this._element.querySelector('.element__name-mesto');
      this._likeButton = this._element.querySelector('.element__like');
      this._deleteButton = this._element.querySelector('.element__remove');
      this._cardImage.src = this._image;
      this._cardImage.alt = this._name;
      this._cardName.textContent = this._name;
      this._setEventListener();
      return this._element;
    }
  }