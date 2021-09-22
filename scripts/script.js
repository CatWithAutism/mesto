import { Card } from "./сard.js";
import { FormValidator } from "./formValidator.js";
import * as consts from "./constants.js";
import * as handlers from "./eventHandlers.js";

//больше нигде не используется
document.querySelectorAll('.popup__closing-button').forEach(t => {
    t.addEventListener('click', handlers.onClosePopup);
});
document.querySelectorAll('.popup__container').forEach(t => {
    t.addEventListener('click', handlers.onClickPopupContainer);
});
consts.editProfileDataButton.addEventListener('click', handlers.onEditProfileData);
consts.addPictureButton.addEventListener('click', handlers.onAddPicture);
consts.popupProfileForm.addEventListener('submit', handlers.onProfileEditSubmit);
consts.popupAddPictureForm.addEventListener('submit', handlers.onAddNewPictureSubmit);
consts.popupProfile.addEventListener('click', handlers.onClosePopup);
consts.popupPicture.addEventListener('click', handlers.onClosePopup);
consts.popupAddPicture.addEventListener('click', handlers.onClosePopup);

export function drawPictures(...args) {
    const pictures = document.querySelector('.pictures');
    args.forEach(t => {
        pictures.prepend((new Card({ name: t.name, link: t.link }, '#pictureTemplate')).getCard());
    });
}

function enableValidation() {
    const data = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input-field',
        submitButtonSelector: '.popup__submit-button',
        inactiveButtonClass: 'popup__submit-button_disabled',
        inputErrorClass: 'popup__input-field_invalid',
        errorClass: 'popup__error-message_active',
    };

    document.querySelectorAll(data.formSelector).forEach(formElement => {
        (new FormValidator(data, formElement)).enableValidation();
    });
}

drawPictures(...consts.initialCards);
enableValidation();

