import { openPopup } from "./eventHandlers.js";
import { popupPictureElement, popupSubtitleElement } from "./constants.js";

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
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

    _onPictureClick(event) {
        const title = event.target.parentElement.querySelector('.pictures__title').textContent;

        popupPictureElement.setAttribute('src', event.target.getAttribute('src'));
        popupPictureElement.setAttribute('alt', title)
        popupSubtitleElement.textContent = title;

        openPopup(popupPicture);
    }

    _cloneTemplate() {
        return document.querySelector(this._templateSelector).content.cloneNode(true);
    }

    _fillData(template) {
        template.querySelector('.pictures__title').textContent = this._name;
    }

    _fillPicture(picture) {
        picture.setAttribute('src', this._link);
        picture.setAttribute('alt', this._name);
    }

    _setEventListenersOnButtons(template) {
        template.querySelector('.pictures__like').addEventListener('click', this._onLike);
        template.querySelector('.pictures__remove-button').addEventListener('click', this._onRemovePicture);
    }

    _setEventListenersOnPicture(picture) {
        picture.addEventListener('click', this._onPictureClick);
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