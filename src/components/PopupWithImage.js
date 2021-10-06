import Popup from "./popup.js";

export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);

        this._image = this._popup.querySelector(".popup__picture");
        this._title = this._popup.querySelector(".popup__subtitle");
    }

    open(title, link){
        this._image.setAttribute('src', link);
        this._image.setAttribute('alt', title);
        this._title.textContent = title;

        super.open();
    }
}