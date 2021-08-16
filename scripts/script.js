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
const pictureTemplate = document.querySelector('#pictureTemplate').content;

//больше нигде не используется
document.querySelectorAll('.popup__closing-button').forEach(t => {
    t.addEventListener('click', onClosePopup);
});
document.querySelectorAll('.popup__container').forEach(t => {
    t.addEventListener('click', onClickPopupContainer);
});
editProfileDataButton.addEventListener('click', onEditProfileData);
addPictureButton.addEventListener('click', onAddPicture);
popupProfileForm.addEventListener('submit', onProfileEditSubmit);
popupAddPictureForm.addEventListener('submit', onAddNewPictureSubmit);
popupProfile.addEventListener('click', onClosePopup);
popupPicture.addEventListener('click', onClosePopup);
popupAddPicture.addEventListener('click', onClosePopup);

drawPictures(...initialCards);

function drawPictures(...args) {
    const pictures = document.querySelector('.pictures');

    args.forEach(t => {
        pictures.prepend(createCard({name: t.name, link: t.link}));
    });
}

function createCard(cardData){
    const rawPictureElement = pictureTemplate.querySelector('.pictures__element').cloneNode(true);
    const picture = rawPictureElement.querySelector('.pictures__picture');

    picture.setAttribute('src', cardData.link);
    picture.setAttribute('alt', cardData.name);
    rawPictureElement.querySelector('.pictures__title').textContent = cardData.name;
    rawPictureElement.querySelector('.pictures__like').addEventListener('click', onLike);
    rawPictureElement.querySelector('.pictures__remove-button').addEventListener('click', onRemovePicture);
    picture.addEventListener('click', onPictureClick);
    return rawPictureElement;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", onKeydown);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", onKeydown);
}

//https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli?rq=1
function onClickPopupContainer(event) {
    event.stopPropagation();
}

function onKeydown(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"));
    }
};

function onLike(event) {
    const activeClass = 'pictures__like_active';
    if (event.target.classList.contains(activeClass)) {
        event.target.classList.remove(activeClass);
    } else {
        event.target.classList.add(activeClass)
    }
}

function onClosePopup(event) {
    closePopup(event.target.closest(".popup"));
}

function onRemovePicture(event) {
    event.target.parentElement.remove();
}

function onAddPicture(event) {
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

    closePopup(popupAddPicture);

    //чтобы подписка на ресет сработала правильно :(
    addPictureTitleElement.value = '';
    addPictureUrlElement.value = '';
    popupAddPictureForm.reset();
}

function onPictureClick(event) {
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
    popupProfileNameElement.value = profileTitleElement.textContent;
    popupProfileTitleElement.value = profileSubTitleElement.textContent;

    popupProfileNameElement.dispatchEvent(new Event('input'));
    popupProfileTitleElement.dispatchEvent(new Event('input'));
    openPopup(popupProfile);
}