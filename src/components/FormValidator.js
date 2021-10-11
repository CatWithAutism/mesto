export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._submitButton = formElement.querySelector(this._validationConfig.submitButtonSelector);
        this._inputFields = Array.from(formElement.querySelectorAll(this._validationConfig.inputSelector));
    }

    _printError(inputElement, errorMessage) {
        //Выборка сделана адаптивно для любого количества полей и работает на вызове евента. Куда-то это выносить смысла не вижу.
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validationConfig.errorClass);

        inputElement.classList.add(this._validationConfig.inputErrorClass);
    }  

    _hideError(inputElement) {
        //Выборка сделана адаптивно для любого количества полей и работает на вызове евента. Куда-то это выносить смысла не вижу.
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.classList.remove(this._validationConfig.errorClass);
        errorElement.textContent = '';

        inputElement.classList.remove(this._validationConfig.inputErrorClass);
    }

    _resolveButtonState() {
        if (this._inputFields.every((t) => t.validity.valid)) {
            this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
            return;
        }

        this._submitButton.classList.add(this._validationConfig.inactiveButtonClass);
        this._submitButton.setAttribute('disabled', true);
    }

    _validateInputField(inputElement) {
        inputElement.validity.valid ? this._hideError(inputElement) : this._printError(inputElement, inputElement.validationMessage);
    }

    _setEventListeners() {
        this._resolveButtonState();
        this._inputFields.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._validateInputField(inputElement, this._validationConfig);
                this._resolveButtonState();
            });
        });

        this._formElement.addEventListener('reset', () => {
            this._resolveButtonState();
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
}