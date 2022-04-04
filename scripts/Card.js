import { popupLookImg, popupImage, imageCaption } from './constants.js';
import { openPopup } from './index.js';

export class Card {
  constructor(cardData, elementTemplateSelector) { 
    this._image = cardData.link; 
    this._name = cardData.name;
    this._template = elementTemplateSelector;
  }
    
    // клонируем template элемент
    _getTemplateElement () {
      const cardTemplate = this._template.querySelector(".element").cloneNode(true);
      return cardTemplate;
    }
  
    // добавление слушателей 
    _setEventListener() {
      this._likeCard();
      this._deleteCard();
      this._openCard();
    }
  
    // лайк
    _likeCard() {
      this._likeButton.addEventListener('click', () => {
        this._likeButton.classList.toggle('element__like_active');
      })
    }
  
    // удаления
    _deleteCard() {
      this._deleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
      });
    }

    // попап картинки 
    _openCard() {
      this._cardImage.addEventListener('click', () => {
        popupImage.src = this._cardImage.src;
        popupImage.alt = this._cardImage.alt;
        imageCaption.textContent = this._cardName.textContent;
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