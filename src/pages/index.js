import * as consts from "../constants/constants.js";
import { createCard } from "../utils/utils.js";
import { FormValidator } from "../components/formValidator.js";
import { UserInfo } from "../components/userInfo.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section, methodOfAdding } from "../components/section.js";
import "./index.css";

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
export function onAddPicture(event) {
    popupAddPicture.open();
}

export function onAddNewPictureSubmit(formData) {
    //я бы это переделал на getInpuvValues передав заботу о том что мы получаем на того, кто отправляет и того, кто принимает
    cardSection.addItem({
        link: formData.newUrl,
        title: formData.newTitle,
    }, methodOfAdding.PREPEND);

    popupAddPicture.close();
}

export function onProfileEditSubmit(formData) {
    userInfo.setUserInfo({
        name:  formData.newName,
        title: formData.newTitle,
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