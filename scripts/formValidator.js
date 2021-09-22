export class FormValidator {
    constructor(data, formElement) {
        this._data = data;
        this._formElement = formElement;
    }

    _printError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._data.errorClass);

        inputElement.classList.add(this._data.inputErrorClass);
    }

    _hideError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

        errorElement.classList.remove(this._data.errorClass);
        errorElement.textContent = '';

        inputElement.classList.remove(this._data.inputErrorClass);
    }

    _resolveButtonState(inputList, buttonElement) {
        if (inputList.every((t) => t.validity.valid)) {
            buttonElement.classList.remove(this._data.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
            return;
        }

        buttonElement.classList.add(this._data.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }

    _validateInputField(formElement, inputElement) {
        inputElement.validity.valid ? this._hideError(formElement, inputElement) : this._printError(formElement, inputElement, inputElement.validationMessage);
    }

    _setEventListeners(formElement) {
        const submitButton = formElement.querySelector(this._data.submitButtonSelector);
        const inputFields = Array.from(formElement.querySelectorAll(this._data.inputSelector));
        this._resolveButtonState(inputFields, submitButton);
        inputFields.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._validateInputField(formElement, inputElement, this._data);
                this._resolveButtonState(inputFields, submitButton, this._data);
            });
        });

        formElement.addEventListener('reset', () => {
            this._resolveButtonState(inputFields, submitButton);
        });
    }

    enableValidation() {
        this._setEventListeners(this._formElement);
    }
}