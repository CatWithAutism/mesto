export const initialCards = [{
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    title: 'Я сделаль',
    link: 'https://cs8.pikabu.ru/images/big_size_comm/2016-02_1/1454547854141668474.jpg'
},
{
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

export const popupProfile = document.querySelector('#popupProfile');
export const popupPicture = document.querySelector('#popupPicture');
export const popupAddPicture = document.querySelector('#popupAddPicture');
export const editProfileDataButton = document.querySelector('.profile__edit-button');
export const addPictureButton = document.querySelector('.profile__add-button');
export const popupProfileNameElement = popupProfile.querySelector('#name');
export const popupProfileTitleElement = popupProfile.querySelector('#title');
export const profileTitleElement = document.querySelector('.profile__title');
export const profileSubTitleElement = document.querySelector('.profile__subtitle');
export const popupProfileForm = popupProfile.querySelector('.popup__form');
export const popupPictureElement = popupPicture.querySelector('.popup__picture');
export const popupSubtitleElement = popupPicture.querySelector('.popup__subtitle');
export const popupAddPictureForm = popupAddPicture.querySelector('.popup__form');
export const addPictureTitleElement = popupAddPicture.querySelector('#pictureTitle');
export const addPictureUrlElement = popupAddPicture.querySelector('#url');
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