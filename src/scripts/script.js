import * as consts from "./constants.js";
import * as handlers from "./eventHandlers.js";
import { createCard, drawCard } from "./utils.js";
import { FormValidator } from "./formValidator.js";


//больше нигде не используется
document.querySelectorAll('.popup__closing-button').forEach(popupClosingButton => {
    popupClosingButton.addEventListener('click', handlers.onClosePopup);
});
document.querySelectorAll('.popup__container').forEach(popupContainer => {
    popupContainer.addEventListener('click', handlers.onClickPopupContainer);
});
consts.editProfileDataButton.addEventListener('click', handlers.onEditProfileData);
consts.addPictureButton.addEventListener('click', handlers.onAddPicture);
consts.popupProfileForm.addEventListener('submit', handlers.onProfileEditSubmit);
consts.popupAddPictureForm.addEventListener('submit', handlers.onAddNewPictureSubmit);
consts.popupProfile.addEventListener('click', handlers.onClosePopup);
consts.popupPicture.addEventListener('click', handlers.onClosePopup);
consts.popupAddPicture.addEventListener('click', handlers.onClosePopup);

consts.initialCards.forEach(cardData => {
    drawCard(createCard(cardData.name, cardData.link, consts.cardTemplateSelector));
});

const profileFormValidator = new FormValidator(consts.validationConfig, consts.popupProfileForm);
const addPictureFormValidator = new FormValidator(consts.validationConfig, consts.popupAddPictureForm);

profileFormValidator.enableValidation();
addPictureFormValidator.enableValidation();

