export const popupProfile = document.querySelector('#popupProfile');
export const popupPicture = document.querySelector('#popupPicture');
export const popupAddPicture = document.querySelector('#popupAddPicture');
export const editProfileDataButton = document.querySelector('.profile__edit-button');
export const addPictureButton = document.querySelector('.profile__add-button');
export const popupProfileNameElement = popupProfile.querySelector('#name');
export const popupProfileTitleElement = popupProfile.querySelector('#about');
export const profileTitleElement = document.querySelector('.profile__title');
export const profileSubTitleElement = document.querySelector('.profile__subtitle');
export const popupProfileForm = popupProfile.querySelector('.popup__form');
export const popupPictureElement = popupPicture.querySelector('.popup__picture');
export const popupSubtitleElement = popupPicture.querySelector('.popup__subtitle');
export const popupAddPictureForm = popupAddPicture.querySelector('.popup__form');
export const addPictureTitleElement = popupAddPicture.querySelector('#pictureTitle');
export const addPictureUrlElement = popupAddPicture.querySelector('#url');
export const profileAvatarElement = document.querySelector(".profile__avatar-container");
export const cardTemplateSelector = '#pictureTemplate';
export const pictures = document.querySelector('.pictures');
export const  validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input-field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input-field_invalid',
    errorClass: 'popup__error-message_active',
};