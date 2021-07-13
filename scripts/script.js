document.querySelector('.edit-form__form').addEventListener("submit", onSubmitForm);
document.querySelector('.edit-form__closing-button').addEventListener("click", onCloseForm);
document.querySelector('.profile__edit-button').addEventListener('click', onEditProfileData);
document.querySelectorAll('.pictures__like').forEach(t => {
    t.addEventListener('click', onLike);
})

function onSubmitForm(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    setProfileData(name, title);
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

function onCloseForm(event) {
    event.preventDefault();
    document.querySelector('.edit-form').classList.remove("edit-form_active");
}

function onEditProfileData(event) {
    event.preventDefault();
    document.querySelector('.edit-form').classList.add("edit-form_active");
}

function setProfileData(name, title) {
    document.querySelector('.profile__title').innerHTML = name.trim();
    document.querySelector('.profile__subtitle').innerHTML = title.trim();
}