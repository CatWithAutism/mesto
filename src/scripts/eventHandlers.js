import * as consts from "./constants.js";
import { createCard, drawCard } from "./utils.js";

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", onKeydown);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", onKeydown);
}

//https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli?rq=1
export function onClickPopupContainer(event) {
    event.stopPropagation();
}

export function onKeydown(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"));
    }
};

export function onClosePopup(event) {
    closePopup(event.target.closest(".popup"));
}

export function onAddPicture(event) {
    openPopup(consts.popupAddPicture);
}

export function onAddNewPictureSubmit(event) {
    event.preventDefault();
    drawCard(createCard(consts.addPictureTitleElement.value.trim(), consts.addPictureUrlElement.value.trim(), consts.cardTemplateSelector));

    closePopup(consts.popupAddPicture);

    //чтобы подписка на ресет сработала правильно :(
    consts.addPictureTitleElement.value = '';
    consts.addPictureUrlElement.value = '';
    consts.popupAddPictureForm.reset();
}

export function onProfileEditSubmit(event) {
    event.preventDefault();
    consts.profileTitleElement.textContent = consts.popupProfileNameElement.value.trim();
    consts.profileSubTitleElement.textContent = consts.popupProfileTitleElement.value.trim();
    closePopup(consts.popupProfile);
}

export function onEditProfileData(event) {
    consts.popupProfileNameElement.value = consts.profileTitleElement.textContent;
    consts.popupProfileTitleElement.value = consts.profileSubTitleElement.textContent;

    consts.popupProfileNameElement.dispatchEvent(new Event('input'));
    consts.popupProfileTitleElement.dispatchEvent(new Event('input'));
    openPopup(consts.popupProfile);
}