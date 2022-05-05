export class Card {
  constructor({ name, link, handleCardClick, likesArr, userId, ownerId, cardId, confirmDelete, handleLike}, templateSelector) {   
    this._name = name;
    this._link = link; 
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._confirmDelete = confirmDelete;
    this._handleLike = handleLike;
    this._likesArr = likesArr;
    this._template = templateSelector;
  }

  _getTemplateElement () {
    const cardTemplate = this._template.querySelector('.element').cloneNode(true);
    return cardTemplate;
  }

  _cardOwnerCheck() {
    if (!(this._ownerId == this._userId)) {
      this._deleteButton.remove();
    }
  }

  _hasLike() {
    if(!(this._likesArr.find(elm => elm._id == this._userId) == undefined)) {
      this._likeButton.classList.add('element__like_active');
    }
  }

  _setEventListener() {
    this._likeCard();
    this._deleteCard();
    this._openCard();
  }

  _likeCard() {
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('element__like_active');
    })
  }

  _deleteCard() {
    this._deleteButton.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
    });
  }

  _openCard() {
    this._cardImage.addEventListener('click', () => this._handleCardClick({
      name: this._name,
      link: this._link
    }));
  }

  generateCard() {
    this._element = this._getTemplateElement();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardName = this._element.querySelector('.element__name-mesto');
    this._likeButton = this._element.querySelector('.element__like');
    this._likeQuantity = this._element.querySelector('.element__like-quantity');
    this._deleteButton = this._element.querySelector('.element__remove');
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeQuantity.textContent = this._likesArr.length;
    this._cardOwnerCheck();
    this._hasLike();
    this._setEventListener();
    return this._element;
  }
}