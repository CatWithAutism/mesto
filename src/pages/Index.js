import * as consts from "../constants/constants.js";
import { createCard } from "../utils/utils.js";
import { FormValidator } from "../components/formValidator.js";
import { UserInfo } from "../components/userInfo.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section, methodOfAdding } from "../components/section.js";

const userInfo = new UserInfo({ 
    nicknameSelector: ".profile__title",
    userPosSelector: ".profile__subtitle",
});

//#region InitPopupPicture
const popupPicture = new PopupWithImage("#popupPicture");
popupPicture.setEventListeners();
//#endregion

//#region InitCards
const cardSection = new Section(renderCard, ".pictures");
cardSection.addItems(consts.initialCards, methodOfAdding.PREPEND);
//#endregion

//#region InitForms
const popupProfile = new PopupWithForm("#popupProfile", onProfileEditSubmit)
popupProfile.setEventListeners();
const profileFormValidator = new FormValidator(consts.validationConfig, popupProfile.getForm());
profileFormValidator.enableValidation();

const popupAddPicture = new PopupWithForm("#popupAddPicture", onAddNewPictureSubmit)
popupAddPicture.setEventListeners();
const addPictureFormValidator = new FormValidator(consts.validationConfig, popupAddPicture.getForm());
addPictureFormValidator.enableValidation();
//#endregion

//#region Buttons
consts.editProfileDataButton.addEventListener('click', () => {
    popupProfile.setValues(userInfo.getUserInfo());

    consts.popupProfileNameElement.dispatchEvent(new Event('input'));
    consts.popupProfileTitleElement.dispatchEvent(new Event('input'));
    popupProfile.open();
});

consts.addPictureButton.addEventListener('click', onAddPicture);
//#endregion Buttons

//#region Handlers
export function onEditProfileData(event) {
    consts.popupProfileNameElement.value = consts.profileTitleElement.textContent;
    consts.popupProfileTitleElement.value = consts.profileSubTitleElement.textContent;

    consts.popupProfileNameElement.dispatchEvent(new Event('input'));
    consts.popupProfileTitleElement.dispatchEvent(new Event('input'));
    popupProfile.open();
}

export function onPictureClick(event) {
    const title = event.target.parentElement.querySelector('.pictures__title').textContent;

    consts.popupPictureElement.setAttribute('src', event.target.getAttribute('src'));
    consts.popupPictureElement.setAttribute('alt', title)
    consts.popupSubtitleElement.textContent = title;

    popupPicture.open();
}

export function onAddPicture(event) {
    popupAddPicture.open();
}

export function onAddNewPictureSubmit(event) {
    event.preventDefault();
    //я бы это переделал на getInpuvValues передав заботу о том что мы получаем на того, кто отправляет и того, кто принимает
    cardSection.addItem({
        link: event.target.elements.url.value.trim(),
        title: event.target.elements.pictureTitle.value.trim(),
    }, methodOfAdding.PREPEND);

    popupAddPicture.close();
}

export function onProfileEditSubmit(event) {
    event.preventDefault();
    userInfo.setUserInfo({
        name:  event.target.elements.name.value.trim(),
        title: event.target.elements.title.value.trim(),
    });
    popupProfile.close();
}
//#endregion

//#region Funcs
function renderCard(cardData){
    const renderedCard = createCard(cardData.title, cardData.link, consts.cardTemplateSelector, popupPicture.open.bind(popupPicture))
    return renderedCard.getCard();
}
//#endregion