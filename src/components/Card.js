export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._title = data.title;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _onLike(event) {
        const activeClass = 'pictures__like_active';
        if (event.target.classList.contains(activeClass)) {
            event.target.classList.remove(activeClass);
        } else {
            event.target.classList.add(activeClass)
        }
    }

    _onRemovePicture(event) {
        event.target.parentElement.remove();
    }

    _cloneTemplate() {
        return document.querySelector(this._templateSelector).content.cloneNode(true);
    }

    _fillData(template) {
        template.querySelector('.pictures__title').textContent = this._title;
    }

    _fillPicture(picture) {
        picture.setAttribute('src', this._link);
        picture.setAttribute('alt', this._title);
    }

    _setEventListenersOnButtons(template) {
        template.querySelector('.pictures__like').addEventListener('click', this._onLike);
        template.querySelector('.pictures__remove-button').addEventListener('click', this._onRemovePicture);
    }

    _setEventListenersOnPicture(picture) {
        picture.addEventListener('click', () => this._handleCardClick(this._title, this._link));
    }

    getCard() {
        const template = this._cloneTemplate();
        const rawPictureElement = template.querySelector('.pictures__element');
        const picture = rawPictureElement.querySelector('.pictures__picture');

        this._fillData(rawPictureElement);
        this._fillPicture(picture);
        this._setEventListenersOnButtons(rawPictureElement);
        this._setEventListenersOnPicture(picture);

        return template;
    }
}