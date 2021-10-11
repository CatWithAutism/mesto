export class Card {
    constructor(data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike) {
        this._title = data.title;
        this._link = data.link;
        this._id = data.id;
        this._likes = data.likes;
        this._isLiked = this._likes.some(like => like._id === userId);
        this._isMine = data.ownerId === userId;

        this._templateSelector = templateSelector;

        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
    }

    _onLike(result) {
        this._likeButton.classList.toggle('pictures__like_active');
        this._likeCounter.textContent = result.likes.length;
        this._isLiked = !this._isLiked;
    }

    _cloneTemplate() {
        return document.querySelector(this._templateSelector).content.cloneNode(true);
    }

    _fillData(template) {
        template.querySelector('.pictures__title').textContent = this._title;
    }

    _fillLikesQuantity(template) {
        template.querySelector('.pictures__like-counter').textContent = this._likes.length;
    }

    _fillPicture(picture) {
        picture.setAttribute('src', this._link);
        picture.setAttribute('alt', this._title);
    }

    _setEventListenersOnButtons(template) {
        template.querySelector('.pictures__like').addEventListener('click', () => this._handleCardLike(this._id, this._isLiked, this._onLike.bind(this)));
        if(this._isMine){
            template.querySelector('.pictures__remove-button').addEventListener('click', (evt) => this._handleCardDelete({ evt: evt, id: this._id }));
        }
    }

    _setEventListenersOnPicture(picture) {
        picture.addEventListener('click', () => this._handleCardClick(this._title, this._link));
    } 

    getCard() {
        const template = this._cloneTemplate();
        if(!this._isMine){
            template.querySelector('.pictures__remove-button').remove();
        }

        const rawPictureElement = template.querySelector('.pictures__element');
        const picture = rawPictureElement.querySelector('.pictures__picture');

        this._likeButton = rawPictureElement.querySelector('.pictures__like');
        if(this._isLiked){
            this._likeButton.classList.toggle('pictures__like_active');
        }

        this._likeCounter = rawPictureElement.querySelector('.pictures__like-counter');

        this._fillData(rawPictureElement);
        this._fillPicture(picture);
        this._fillLikesQuantity(rawPictureElement);
        this._setEventListenersOnButtons(rawPictureElement);
        this._setEventListenersOnPicture(picture);

        return template;
    }
}