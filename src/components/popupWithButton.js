import Popup from "./popup.js";

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

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();

            const oldValue = this._submitButton.textContent;
            this._submitButton.textContent = "Сохранение...";
            if(this._onSubmitFunc){
                this._onSubmitFunc(this._lastEvent);
            }
            this._submitButton.textContent = oldValue;

            this.close();
        });
    }

}