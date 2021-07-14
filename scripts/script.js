document.querySelector('.edit-form').addEventListener("submit", onSubmitForm);
document.querySelector('.popup__closing-button').addEventListener("click", onCloseForm);
document.querySelector('.profile__edit-button').addEventListener('click', onEditProfileData);

const formNameElement = document.querySelector('#name');
const formTitleElement = document.querySelector('#title');
const editFormElement = document.querySelector('.popup');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubTitleElement = document.querySelector('.profile__subtitle');


function onSubmitForm(event) {
    event.preventDefault();
    profileTitleElement.textContent = formNameElement.value.trim();
    profileSubTitleElement.textContent = formTitleElement.value.trim();
    editFormElement.classList.remove("popup_opened");
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