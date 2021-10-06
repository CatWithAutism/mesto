export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._submitButton = formElement.querySelector(this._validationConfig.submitButtonSelector);
        this._inputFields = Array.from(formElement.querySelectorAll(this._validationConfig.inputSelector));
    }

    _printError(formElement, inputElement, errorMessage) {
        //Выборка сделана адаптивно для любого количества полей и работает на вызове евента. Куда-то это выносить смысла не вижу.
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validationConfig.errorClass);

        inputElement.classList.add(this._validationConfig.inputErrorClass);
    }

    _hideError(formElement, inputElement) {
        //Выборка сделана адаптивно для любого количества полей и работает на вызове евента. Куда-то это выносить смысла не вижу.
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.classList.remove(this._validationConfig.errorClass);
        errorElement.textContent = '';

        inputElement.classList.remove(this._validationConfig.inputErrorClass);
    }

    _resolveButtonState(inputList, buttonElement) {
        if (inputList.every((t) => t.validity.valid)) {
            buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
            return;
        }

        buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }

    _validateInputField(formElement, inputElement) {
        inputElement.validity.valid ? this._hideError(formElement, inputElement) : this._printError(formElement, inputElement, inputElement.validationMessage);
    }

    _setEventListeners(formElement) {
        this._resolveButtonState(this._inputFields, this._submitButton);
        this._inputFields.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._validateInputField(formElement, inputElement, this._validationConfig);
                this._resolveButtonState(this._inputFields, this._submitButton, this._validationConfig);
            });
        });

        formElement.addEventListener('reset', () => {
            this._resolveButtonState(this._inputFields, this._submitButton);
        });
    }

    enableValidation() {
        this._setEventListeners(this._formElement);
    }
}