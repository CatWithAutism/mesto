import * as consts from "../utils/Constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section, methodOfAdding } from "../components/Section.js";
import { PopupWithButton } from "../components/PopupWithButton.js";
import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import "./index.css";

/*

Не знаю в чем причина
То ли гит на Винде 11 с ума сходит
То ли у меня крыша едет :)
Я закоммитил еще все после первого ревью
А это как-то кусками произошло
Причем изменения старше не улетели, а младше улетели

*/

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-28",
    headers: {
        authorization: "b38078dd-f6b0-4e16-83cc-6b71b2124085",
        "Content-Type": "application/json"
    }
});

//#region InitPopupPicture
const popupPicture = new PopupWithImage("#popupPicture");
popupPicture.setEventListeners();
//#endregion

//#region InitRemovePicturePopup
const removingPicturePopup = new PopupWithButton("#popupRemovingCard", onRemovePicture);
removingPicturePopup.setEventListeners();
//#endregion

//#region InitRemovePicturePopup
const updateProfilePicturePopup = new PopupWithForm("#popupUpdateProfilePicture", onUpdatePictureSubmit);
updateProfilePicturePopup.setEventListeners();

const updateProfileValidator = new FormValidator(consts.validationConfig, updateProfilePicturePopup.getForm());
updateProfileValidator.enableValidation();
//#endregion

//#region InitForms
const popupProfile = new PopupWithForm("#popupProfile", onProfileEditSubmit);
popupProfile.setEventListeners();
const profileFormValidator = new FormValidator(consts.validationConfig, popupProfile.getForm());
profileFormValidator.enableValidation();

const popupAddPicture = new PopupWithForm("#popupAddPicture", onAddNewPictureSubmit)
popupAddPicture.setEventListeners();
const addPictureFormValidator = new FormValidator(consts.validationConfig, popupAddPicture.getForm());
addPictureFormValidator.enableValidation();
//#endregion

//#region InitCards
const cardSection = new Section(renderCard, ".pictures");
//#endregion

const userInfo = new UserInfo({
    nicknameSelector: ".profile__title",
    userPosSelector: ".profile__subtitle",
    avatarSelector: ".profile__avatar",
});

Promise.all([api.getUserInfo(), api.getCards()])
    .then(([resultGetUserInfo, resultGetCards]) => {
        userInfo.setUserInfo(resultGetUserInfo);
        cardSection.addItems(resultGetCards.reverse(), methodOfAdding.PREPEND);
    })
    .catch(handleError);

//#region Buttons
consts.editProfileDataButton.addEventListener('click', () => {
    popupProfile.setValues(userInfo.getUserInfo());
    profileFormValidator.resetValidation();
    popupProfile.open();
});

consts.addPictureButton.addEventListener('click', () => {
    addPictureFormValidator.resetValidation();
    popupAddPicture.open();
});

consts.profileAvatarElement.addEventListener('click', () => {
    updateProfileValidator.resetValidation();
    updateProfilePicturePopup.open();
});
//#endregion Buttons

//#region Handlers
export function onUpdatePictureSubmit(formData) {
    updateProfilePicturePopup.disableSubmit();
    api.updateUserAvatar(formData.newAvatar)
        .then(result => {
            userInfo.setUserInfo(result);
            updateProfilePicturePopup.close();
        })
        .catch(error => {
            handleError(error);
        })
        .finally(() => {
            updateProfilePicturePopup.enableSubmit();
        });
}

export function onAddNewPictureSubmit(formData) {
    popupAddPicture.disableSubmit();
    const newCardInfo = {
        name: formData.newTitle,
        link: formData.newUrl,
    };
    api.sendCard(newCardInfo)
        .then(result => {
            cardSection.addItem(result, methodOfAdding.PREPEND);
            popupAddPicture.close();
        })
        .catch(error => {
            handleError(error);
        })
        .finally(() => {
            popupAddPicture.enableSubmit();
        });
}

export function onProfileEditSubmit(formData) {
    popupProfile.disableSubmit();
    api.updateUserInfo({
        name: formData.newName,
        about: formData.newTitle,
        }).then(result => {
            userInfo.setUserInfo(result);
            popupProfile.close();
        })
        .catch(error => {
            handleError(error);
        })
        .finally(() => {
            popupProfile.enableSubmit();
        });
}

export function onRemovePicture(data) {
    removingPicturePopup.disableSubmit();
    api.deleteCard(data.id)
        .then(result => {
            data.evt.target.parentElement.remove();
            removingPicturePopup.close();
        })
        .catch(error => {
            handleError(error);
        })
        .finally(() => {
            removingPicturePopup.enableSubmit();
        });
}

export function onLikePicture(id, isLiked, onSuccess) {
    api.updateLikeState(id, isLiked)
        .then(result => {
            onSuccess(result);
        })
        .catch(error => {
            handleError(error);
        });
}
//#endregion

//#region Funcs
function renderCard(cardData) {
    const renderedCard = createCard(
        cardData,
        userInfo.getUserInfo().id,
        consts.cardTemplateSelector,
        popupPicture.open.bind(popupPicture),
        removingPicturePopup.open.bind(removingPicturePopup),
        onLikePicture)
    return renderedCard.getCard();
}

function handleError(data) {
    console.log(data);
}

export function createCard(cardData, userId, selector, clickHandler, deleteCardHandler, onLikeCard){
    return new Card({ title: cardData.name, link: cardData.link, likes: cardData.likes, id:cardData._id, ownerId:cardData.owner._id}, userId, selector, clickHandler, deleteCardHandler, onLikeCard)
} 
//#endregion