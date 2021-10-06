export class UserInfo{
    constructor({ nicknameSelector, userPosSelector }){
        this._nicknameElement     = document.querySelector(nicknameSelector);
        this._userPosElement = document.querySelector(userPosSelector);
    }

    getUserInfo(){
        return {
            name: this._nicknameElement.textContent,
            title: this._userPosElement.textContent,
        }
    }

    setUserInfo({ name, title }){
        this._elementUserName.textContent = name;
        this._elementUserPosition.textContent = title;
    }
}