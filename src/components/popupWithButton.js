import Popup from "./Popup.js";

export class PopupWithButton extends Popup {

    constructor(selector, onSubmit) {
        super(selector);

        this._onSubmitFunc = onSubmit;
        this._popupForm = this._popup.querySelector(".popup__form");
        this._submitButton = this._popupForm.querySelector(".popup__submit-button");
    }

    open(event) {
        this._lastEvent = event;
        super.open();
    } 

    enableSubmit() {
        this._submitButton.removeAttribute("disabled");
        this._submitButton.textContent = this._submitText;
    }

    disableSubmit() {
        this._submitButton.setAttribute("disabled", "disabled");
        this._submitButton.textContent = "Сохранение...";
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            
            if(this._onSubmitFunc){
                this._onSubmitFunc(this._lastEvent);
            }
        });
    }

}