import Popup from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(selector, onSubmit){
        super(selector);

        this._onSubmitFunc = onSubmit;
        this._popupForm = this._popup.querySelector(".popup__form");
        this._inputFields = Array.from(this._popupForm.querySelectorAll(".popup__input-field"));
        this._submitButton = this._popupForm.querySelector(".popup__submit-button");
        this._submitText = this._submitButton.textContent;
    }

    close(){
        this._popupForm.reset();
        super.close();
    }
 
    getForm(){
        return this._popupForm;
    }

    enableSubmit() {
        this._submitButton.removeAttribute("disabled");
        this._submitButton.textContent = this._submitText;
    }

    disableSubmit() {
        this._submitButton.setAttribute("disabled", "disabled");
        this._submitButton.textContent = "Сохранение...";
    }

    setEventListeners(){
        super.setEventListeners();

        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            if(this._onSubmitFunc){
                this._onSubmitFunc(this._getInputValues());
            }
        });
    }

    setValues(vals){
        this._inputFields.forEach(inputField => {
            if(inputField.id in vals){
                inputField.value = vals[inputField.id];
            }
        });
    }

    _getInputValues(){
        return this._inputFields.reduce((obj, inputField) => {
            obj[inputField.name] = inputField.value;
            return obj;
        }, {})
    }
}