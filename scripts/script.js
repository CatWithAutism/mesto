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

const popupProfile = document.querySelector('#popupProfile');
const popupPicture = document.querySelector('#popupPicture');
const popupAddPicture = document.querySelector('#popupAddPicture');
const editProfileDataButton = document.querySelector('.profile__edit-button');
const addPictureButton = document.querySelector('.profile__add-button');
const popupProfileNameElement = popupProfile.querySelector('#name');
const popupProfileTitleElement = popupProfile.querySelector('#title');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubTitleElement = document.querySelector('.profile__subtitle');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupPictureElement = popupPicture.querySelector('.popup__picture');
const popupSubtitleElement = popupPicture.querySelector('.popup__subtitle');
const popupAddPictureForm = popupAddPicture.querySelector('.popup__form');

//больше нигде не используется
document.querySelectorAll('.popup__closing-button').forEach(t => {
    t.addEventListener('click', onClosePopup);
});
editProfileDataButton.addEventListener('click', onEditProfileData);
addPictureButton.addEventListener('click', onAddPicture);
popupProfileForm.addEventListener('submit', onProfileEditSubmit);
popupAddPictureForm.addEventListener('submit', onAddNewPictureSubmit);


drawPictures(...initialCards);

function drawPictures(...args) {
    const pictures = document.querySelector('.pictures');
    const pictureTemplate = document.querySelector('#pictureTemplate').content;

    args.forEach(t => {
        const rawPictureElement = pictureTemplate.querySelector('.pictures__element').cloneNode(true);
        const picture = rawPictureElement.querySelector('.pictures__picture');

        picture.setAttribute('src', t.link);
        picture.setAttribute('alt', t.name);
        rawPictureElement.querySelector('.pictures__title').textContent = t.name;
        rawPictureElement.querySelector('.pictures__like').addEventListener('click', onLike);
        rawPictureElement.querySelector('.pictures__remove-button').addEventListener('click', onRemovePicture);
        picture.addEventListener('click', onPictureClick);
        pictures.prepend(rawPictureElement);
    });
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function onLike(event) {
    event.preventDefault();
    //а это вообще можно было через радиобаттон сделать, но и так вродь ок
    const activeClass = 'pictures__like_active';
    if (event.target.classList.contains(activeClass)) {
        event.target.classList.remove(activeClass);
    } else {
        event.target.classList.add(activeClass)
    }
}

function onClosePopup(event) {
    event.preventDefault();
    closePopup(event.target.parentElement);
}

function onRemovePicture(event) {
    event.preventDefault();
    event.target.parentElement.remove();
}

function onAddPicture(event) {
    event.preventDefault();
    openPopup(popupAddPicture);
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

    closePopup(popupAddPicture)
}

function onPictureClick(event) {
    event.preventDefault();

    const title = event.target.parentElement.querySelector('.pictures__title').textContent;

    popupPictureElement.setAttribute('src', event.target.getAttribute('src'));
    popupPictureElement.setAttribute('alt', title)
    popupSubtitleElement.textContent = title;

    openPopup(popupPicture);
}

function onProfileEditSubmit(event) {
    event.preventDefault();
    profileTitleElement.textContent = popupProfileNameElement.value.trim();
    profileSubTitleElement.textContent = popupProfileTitleElement.value.trim();
    closePopup(popupProfile);
}

function onEditProfileData(event) {
    event.preventDefault();

    popupProfileNameElement.value = profileTitleElement.textContent;
    popupProfileTitleElement.value = profileSubTitleElement.textContent;
    openPopup(popupProfile);
}