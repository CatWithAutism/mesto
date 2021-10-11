export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._bindedEscHandler = this._handleEscClose.bind(this);
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._bindedEscHandler);
    } 

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._bindedEscHandler);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners(){
        this._popup.addEventListener('click', (evt) => {
            if(!(evt.target === this._popup || evt.target.classList.contains('popup__closing-button'))){
                return;
            }
            this.close();
        });
    }
}