import Popup from "./popup.js";

export class PopupWithForm extends Popup{
    constructor(selector, onSubmit){
        super(selector);

        this._onSubmitFunc = onSubmit;
        this._popupForm = this._popup.querySelector(".popup__form");
        this._inputFields = Array.from(this._popupForm.querySelectorAll(".popup__input-field"));
    }

    open(){
        super.open();
    }

    close(){
        this._popupForm.reset();

        super.close();
    }

    getForm(){
        return this._popupForm;
    }

    setEventListeners(){
        super.setEventListeners();

        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();

            if(this._onSubmitFunc){
                this._onSubmitFunc(this._getInputValues());
            }

            this.close();
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