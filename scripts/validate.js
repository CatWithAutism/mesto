function printError(formElement, inputElement, errorMessage, data) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(data.errorClass);

    inputElement.classList.add(data.inputErrorClass);
}

function hideError(formElement, inputElement, data) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.remove(data.errorClass);
    errorElement.textContent = '';

    inputElement.classList.remove(data.inputErrorClass);
}

function resolveButtonState(inputList, buttonElement, data) {

    if (inputList.every((t) => t.validity.valid)) {
        buttonElement.classList.remove(data.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
        return;
    }

    buttonElement.classList.add(data.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}

function validateInputField(formElement, inputElement, data) {
    inputElement.validity.valid ? hideError(formElement, inputElement, data) : printError(formElement, inputElement, inputElement.validationMessage, data);
}

function setEventListeners(formElement, data) {
    const submitButton = formElement.querySelector(data.submitButtonSelector);
    const inputFields = Array.from(formElement.querySelectorAll(data.inputSelector));

    formElement.addEventListener("reset", () => {
        resolveButtonState(inputFields, submitButton, data);
    });

    //чтобы провалидировался до ввода чего либо
    resolveButtonState(inputFields, submitButton, data);
    inputFields.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            validateInputField(formElement, inputElement, data);
            resolveButtonState(inputFields, submitButton, data);
        });
    });
}

function enableValidation(data) {
    document.querySelectorAll(data.formSelector).forEach(formElement => {
        setEventListeners(formElement, data);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input-field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input-field_invalid',
    errorClass: 'popup__error-message_active',
});
