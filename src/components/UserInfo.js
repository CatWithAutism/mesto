export class UserInfo{
    constructor({ nicknameSelector, userPosSelector, avatarSelector}){
        this._nicknameElement = document.querySelector(nicknameSelector);
        this._userPosElement = document.querySelector(userPosSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return {
            name: this._nicknameElement.textContent,
            about: this._userPosElement.textContent,
            avatar: this._avatarElement.getAttribute("src"),
            id: this._id,
        }
    }

    setUserInfo({ name, about, avatar, _id}){
        this._nicknameElement.textContent = name;
        this._userPosElement.textContent = about;
        this._avatarElement.setAttribute("src", avatar);
        this._id = _id;
    }
}