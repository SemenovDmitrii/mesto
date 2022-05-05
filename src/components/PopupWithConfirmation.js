import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor({popupSelector,confirmHandler}) {
        super(popupSelector)
        this._submitButton = this._popup.querySelector('.popup__button');
        this.confirmHandler = confirmHandler
    }

    setEventListeners() {    
        super.setEventListeners();
        this._submitButton.addEventListener('click', ()=> {
            this.confirmHandler()
        })
    }
}