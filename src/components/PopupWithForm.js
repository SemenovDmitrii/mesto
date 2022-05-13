import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitForm = handleSubmitForm;
    this.submitButton = this._popup.querySelector('.popup__button');
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (evt)=> {
      evt.preventDefault();
      this._submitForm(this._getInputValues(), this.submitButton);
    })
    super.setEventListeners();
  }
}