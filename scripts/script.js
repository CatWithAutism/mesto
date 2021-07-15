const editForm = document.querySelector('.popup__form');
const popupClosingButton = document.querySelector('.popup__closing-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const formNameElement = document.querySelector('#name');
const formTitleElement = document.querySelector('#title');
const editFormElement = document.querySelector('.popup');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubTitleElement = document.querySelector('.profile__subtitle');

editForm.addEventListener("submit", onSubmitForm);
popupClosingButton.addEventListener("click", onCloseForm);
profileEditButton.addEventListener('click', onEditProfileData);


function onSubmitForm(event) {
    event.preventDefault();
    profileTitleElement.textContent = formNameElement.value.trim();
    profileSubTitleElement.textContent = formTitleElement.value.trim();
    onCloseForm(event)
}

function onCloseForm(event) {
    event.preventDefault();
    editFormElement.classList.remove("popup_opened");
}

function onEditProfileData(event) {
    event.preventDefault();
    formNameElement.value = profileTitleElement.textContent;
    formTitleElement.value = profileSubTitleElement.textContent;
    editFormElement.classList.add("popup_opened");
}