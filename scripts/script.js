const editForm = document.querySelector('.popup__form');
const popupClosingButton = document.querySelector('.popup__closing-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubTitleElement = document.querySelector('.profile__subtitle');
const picturesElement = document.querySelector('.pictures');
const popupContainer = document.querySelector('.popup__container');
const addPictureButton = document.querySelector('.profile__add-button');

//https://cs8.pikabu.ru/images/big_size_comm/2016-02_1/1454547854141668474.jpg

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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

popupClosingButton.addEventListener("click", onCloseForm);
profileEditButton.addEventListener('click', onEditProfileData);
addPictureButton.addEventListener('click', onAddPicture)

drawPictures(initialCards);

function drawPictures(pictures) {
    let pictureTitle = document.createElement('h3');
    pictureTitle.classList.add('pictures__title');

    //тут вроде нельзя вставить инъекцию, так что оставил так
    pictures.forEach(element => {
        pictureTitle.textContent = element.name;
        picturesElement.insertAdjacentHTML('afterbegin', `
        <div class="pictures__element">
            <img src="${element.link}" class="pictures__picture" alt="${element.name}}">
            <div class="pictures__info">
                ${pictureTitle.outerHTML}
                <button class="pictures__like" type="button"></button>
            </div>
            <button class="pictures__remove-button" type="button"></button>
        </div>
        `);
    });

    //Выглядит ужасно это снизу. Как можно в контейнер это дело поместить и повесить эвенты сразу, а не после?
    document.querySelectorAll('.pictures__like').forEach(t => {
        t.addEventListener('click', onLike);
    });

    document.querySelectorAll('.pictures__remove-button').forEach(t => {
        t.addEventListener('click', onRemovePicture);
    });

    document.querySelectorAll('.pictures__picture').forEach(t => {
        t.addEventListener('click', onPictureClick)
    });
}

function onPictureClick(event) {
    event.preventDefault();
    popupContainer.classList.add('popup__container_large');
    let url = event.target.getAttribute('src');
    let title = event.target.parentElement.querySelector('.pictures__title').textContent;
    popupContainer.insertAdjacentHTML('afterbegin', `
        <img class="popup__picture"src="${url}" alt="${title}">
        <p class="popup__subtitle">${title}</p>
    `);
    popup.classList.add('popup_opened');
}

function onLike(event) {
    event.preventDefault();
    const activeClass = 'pictures__like_active';
    if (event.target.classList.contains(activeClass)) {
        event.target.classList.remove(activeClass);
    } else {
        event.target.classList.add(activeClass)
    }
}

function onRemovePicture(event) {
    event.preventDefault();
    event.target.parentElement.remove();
}

function onAddPicture(event) {
    event.preventDefault();
    popupContainer.insertAdjacentHTML('afterbegin', `
        <h2 class="popup__title">Новое место</h2>
        <form class="popup__form" name="profileDataForm">
            <input id="title" name="newTitle" type="text" class="popup__input-field" placeholder="Название">
            <input id="url" name="newUrl" type="text" class="popup__input-field" placeholder="Ссылка на картинку">
            <button class="popup__submit-button" type="submit">Создать</button>
        </form>
    `);

    popupContainer.querySelector('.popup__form').addEventListener('submit', onAddNewPictureSubmit);
    popup.classList.add("popup_opened");
}

function onAddNewPictureSubmit(event) {
    event.preventDefault();
    drawPictures([{
        name: popupContainer.querySelector('#title').value.trim(),
        link: popupContainer.querySelector('#url').value.trim()
    }, ]);
    onCloseForm(event)
}

function onProfileEditSubmit(event) {
    event.preventDefault();
    profileTitleElement.textContent = popupContainer.querySelector('#name').value.trim();
    profileSubTitleElement.textContent = popupContainer.querySelector('#title').value.trim();
    onCloseForm(event)
}

function onCloseForm(event) {
    event.preventDefault();
    popupContainer.className = 'popup__container';
    popupContainer.innerHTML = '';
    popup.classList.remove("popup_opened");
}

function onEditProfileData(event) {
    event.preventDefault();
    popupContainer.insertAdjacentHTML('afterbegin', `
        <h2 class="popup__title">Редактировать профиль</h2>
        <form class="popup__form" name="profileDataForm">
            <input id="name" name="newName" type="text" class="popup__input-field">
            <input id="title" name="newTitle" type="text" class="popup__input-field">
            <button class="popup__submit-button" type="submit">Сохранить</button>
        </form>
    `);

    popupContainer.querySelector('#name').value = profileTitleElement.textContent;
    popupContainer.querySelector('#title').value = profileSubTitleElement.textContent;
    popupContainer.querySelector('.popup__form').addEventListener('submit', onProfileEditSubmit);
    popup.classList.add("popup_opened");
}