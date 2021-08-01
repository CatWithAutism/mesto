const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Я сделаль',
        link: 'https://cs8.pikabu.ru/images/big_size_comm/2016-02_1/1454547854141668474.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popupProfile');
const popupPicture = document.querySelector('#popupPicture');
const popupAddPicture = document.querySelector('#popupAddPicture');

const popupClosingButton = document.querySelector('.popup__closing-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const addPictureButton = document.querySelector('.profile__add-button');

popupClosingButton.addEventListener("click", onCloseForm);
profileEditButton.addEventListener('click', onEditProfileData);
addPictureButton.addEventListener('click', onAddPicture);

drawPictures(...initialCards);

function drawPictures(...args) {
    const pictures = document.querySelector('.pictures');
    const pictureTemplate = document.querySelector('#pictureTemplate').content;

    args.forEach(t => {
        let rawPictureElement = pictureTemplate.cloneNode(true);
        rawPictureElement.querySelector('.pictures__picture').setAttribute('src', t.link);
        rawPictureElement.querySelector('.pictures__title').textContent = t.name;
        rawPictureElement.querySelector('.pictures__like').addEventListener('click', onLike);
        rawPictureElement.querySelector('.pictures__remove-button').addEventListener('click', onRemovePicture);
        rawPictureElement.querySelector('.pictures__picture').addEventListener('click', onPictureClick);
        pictures.prepend(rawPictureElement);
    });
}

//#region Common

function onLike(event) {
    event.preventDefault();
    const activeClass = 'pictures__like_active';
    if (event.target.classList.contains(activeClass)) {
        event.target.classList.remove(activeClass);
    } else {
        event.target.classList.add(activeClass)
    }
}

//#endregion Common

//#region popupAddPicture
const popupAddPictureForm = popupAddPicture.querySelector('.popup__form');
popupAddPictureForm.addEventListener('submit', onAddNewPictureSubmit);

function onAddPicture(event) {
    event.preventDefault();
    popup.classList.add("popup_opened");
    popupAddPicture.classList.add('popup__container_opened');
}

function onRemovePicture(event) {
    event.preventDefault();
    event.target.parentElement.remove();
}

function onAddNewPictureSubmit(event) {
    event.preventDefault();
    const addPictureTitleElement = popupAddPicture.querySelector('#pictureTitle');
    const addPictureUrlElement = popupAddPicture.querySelector('#url');

    drawPictures({
        name: addPictureTitleElement.value.trim(),
        link: addPictureUrlElement.value.trim()
    });

    addPictureTitleElement.value = '';
    addPictureUrlElement.value = '';

    onCloseForm(event)
}

//#endregion popupAddPicture

//#region popupShowPicture

const popupPictureElement = popupPicture.querySelector('.popup__picture');
const popupSubtitleElement = popupPicture.querySelector('.popup__subtitle');

function onPictureClick(event) {
    event.preventDefault();

    let title = event.target.parentElement.querySelector('.pictures__title').textContent;

    popupPictureElement.setAttribute('src', event.target.getAttribute('src'));
    popupPictureElement.setAttribute('alt', title)
    popupSubtitleElement.textContent = title;

    popup.classList.add('popup_opened');
    popupPicture.classList.add('popup__container_large', 'popup__container_opened');
}

//#endregion popupShowPicture



//#region profilePopup

const popupProfileNameElement = popupProfile.querySelector('#name');
const popupProfileTitleElement = popupProfile.querySelector('#title');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubTitleElement = document.querySelector('.profile__subtitle');
const popupProfileForm = popupProfile.querySelector('.popup__form');
popupProfileForm.addEventListener('submit', onProfileEditSubmit);

function onProfileEditSubmit(event) {
    event.preventDefault();
    profileTitleElement.textContent = popupProfileNameElement.value.trim();
    profileSubTitleElement.textContent = popupProfileTitleElement.value.trim();
    onCloseForm(event)
}

function onEditProfileData(event) {
    event.preventDefault();

    popupProfileNameElement.value = profileTitleElement.textContent;
    popupProfileTitleElement.value = profileSubTitleElement.textContent;

    popup.classList.add("popup_opened");
    popupProfile.classList.add('popup__container_opened');
}

//#endregion profilePopup


//#region commonPopup

function onCloseForm(event) {
    event.preventDefault();
    const popup__container = 'popup__container';

    popup.classList.remove("popup_opened");
    popupAddPicture.className = popup__container;
    popupProfile.className = popup__container;
    popupPicture.className = popup__container;
    popupPictureElement.setAttribute('src', '');
    popupSubtitleElement.textContent = '';
}

//#endregion commonPopup