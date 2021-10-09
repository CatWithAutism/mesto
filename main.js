(()=>{"use strict";var e=document.querySelector("#popupProfile"),t=document.querySelector("#popupPicture"),n=document.querySelector("#popupAddPicture"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=e.querySelector("#name"),u=e.querySelector("#about"),c=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),e.querySelector(".popup__form"),t.querySelector(".popup__picture"),t.querySelector(".popup__subtitle"),n.querySelector(".popup__form"),n.querySelector("#pictureTitle"),n.querySelector("#url"),document.querySelector(".profile__avatar-container")),a=(document.querySelector(".pictures"),{formSelector:".popup__form",inputSelector:".popup__input-field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input-field_invalid",errorClass:"popup__error-message_active"});function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.title,this._link=t.link,this._id=t.id,this._likes=t.likes,this._isLiked=this._likes.some((function(e){return e._id===n})),this._isMine=t.ownerId===n,this._templateSelector=r,this._handleCardClick=o,this._handleCardDelete=i,this._handleCardLike=u}var t,n;return t=e,(n=[{key:"_onLike",value:function(e){this._likeButton.classList.toggle("pictures__like_active"),this._likeCounter.textContent=e.likes.length,this._isLiked=!this._isLiked}},{key:"_cloneTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0)}},{key:"_fillData",value:function(e){e.querySelector(".pictures__title").textContent=this._title}},{key:"_fillLikesQuantity",value:function(e){e.querySelector(".pictures__like-counter").textContent=this._likes.length}},{key:"_fillPicture",value:function(e){e.setAttribute("src",this._link),e.setAttribute("alt",this._title)}},{key:"_setEventListenersOnButtons",value:function(e){var t=this;e.querySelector(".pictures__like").addEventListener("click",(function(){return t._handleCardLike(t._id,t._isLiked,t._onLike.bind(t))})),this._isMine&&e.querySelector(".pictures__remove-button").addEventListener("click",(function(e){return t._handleCardDelete({evt:e,id:t._id})}))}},{key:"_setEventListenersOnPicture",value:function(e){var t=this;e.addEventListener("click",(function(){return t._handleCardClick(t._title,t._link)}))}},{key:"getCard",value:function(){var e=this._cloneTemplate();this._isMine||e.querySelector(".pictures__remove-button").remove();var t=e.querySelector(".pictures__element"),n=t.querySelector(".pictures__picture");return this._likeButton=t.querySelector(".pictures__like"),this._isLiked&&this._likeButton.classList.toggle("pictures__like_active"),this._likeCounter=t.querySelector(".pictures__like-counter"),this._fillData(t),this._fillPicture(n),this._fillLikesQuantity(t),this._setEventListenersOnButtons(t),this._setEventListenersOnPicture(n),e}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._submitButton=n.querySelector(this._validationConfig.submitButtonSelector),this._inputFields=Array.from(n.querySelectorAll(this._validationConfig.inputSelector))}var t,n;return t=e,(n=[{key:"_printError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._validationConfig.errorClass),e.classList.add(this._validationConfig.inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.classList.remove(this._validationConfig.errorClass),t.textContent="",e.classList.remove(this._validationConfig.inputErrorClass)}},{key:"_resolveButtonState",value:function(){if(this._inputFields.every((function(e){return e.validity.valid})))return this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass),void this._submitButton.removeAttribute("disabled");this._submitButton.classList.add(this._validationConfig.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_validateInputField",value:function(e){e.validity.valid?this._hideError(e):this._printError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._resolveButtonState(),this._inputFields.forEach((function(t){t.addEventListener("input",(function(){e._validateInputField(t,e._validationConfig),e._resolveButtonState()}))})),this._formElement.addEventListener("reset",(function(){e._resolveButtonState()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=t.nicknameSelector,r=t.userPosSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nicknameElement=document.querySelector(n),this._userPosElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nicknameElement.textContent,about:this._userPosElement.textContent,avatar:this._avatarElement.getAttribute("src"),id:this._id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._nicknameElement.textContent=t,this._userPosElement.textContent=n,this._avatarElement.setAttribute("src",r),this._id=o}}])&&d(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._bindedEscHandler=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._bindedEscHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._bindedEscHandler)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target===e._popup||t.target.classList.contains("popup__closing-button"))&&e.close()}))}}])&&y(t.prototype,n),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__picture"),t._title=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.setAttribute("src",t),this._image.setAttribute("alt",e),this._title.textContent=e,m(S(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),u}(v);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},O(e,t,n||e)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._onSubmitFunc=t,n._popupForm=n._popup.querySelector(".popup__form"),n._inputFields=Array.from(n._popupForm.querySelectorAll(".popup__input-field")),n._submitButton=n._popupForm.querySelector(".popup__submit-button"),n}return t=u,(n=[{key:"open",value:function(){O(j(u.prototype),"open",this).call(this)}},{key:"close",value:function(){this._popupForm.reset(),O(j(u.prototype),"close",this).call(this)}},{key:"getForm",value:function(){return this._popupForm}},{key:"setEventListeners",value:function(){var e=this;O(j(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitButton.textContent;e._submitButton.textContent="Сохранение...",e._onSubmitFunc&&e._onSubmitFunc(e._getInputValues()),e._submitButton.textContent=n,e.close()}))}},{key:"setValues",value:function(e){this._inputFields.forEach((function(t){t.id in e&&(t.value=e[t.id])}))}},{key:"_getInputValues",value:function(){return this._inputFields.reduce((function(e,t){return e[t.name]=t.value,e}),{})}}])&&C(t.prototype,n),u}(v);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T="append",R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n,T)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){this._container[t](this._renderer(e))}},{key:"addItems",value:function(e,t){var n=this;e.forEach((function(e){n._container[t](n._renderer(e))}))}}])&&B(t.prototype,n),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},I(e,t,n||e)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function D(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._onSubmitFunc=t,n._popupForm=n._popup.querySelector(".popup__form"),n._submitButton=n._popupForm.querySelector(".popup__submit-button"),n}return t=u,(n=[{key:"open",value:function(e){this._lastEvent=e,I(U(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;I(U(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitButton.textContent;e._submitButton.textContent="Сохранение...",e._onSubmitFunc&&e._onSubmitFunc(e._lastEvent),e._submitButton.textContent=n,e.close()}))}}])&&A(t.prototype,n),u}(v);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}var t,n;return t=e,n=[{key:"_getDeserializedJsonObject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.headers=this._headers,fetch("".concat(this._baseUrl,"/").concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._getDeserializedJsonObject("users/me")}},{key:"getCards",value:function(){return this._getDeserializedJsonObject("cards")}},{key:"updateUserInfo",value:function(e){return this._getDeserializedJsonObject("users/me",{method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})})}},{key:"updateUserAvatar",value:function(e){return this._getDeserializedJsonObject("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e})})}},{key:"sendCard",value:function(e){return this._getDeserializedJsonObject("cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._getDeserializedJsonObject("cards/".concat(e),{method:"DELETE"})}},{key:"updateLikeState",value:function(e,t){return this._getDeserializedJsonObject("cards/likes/".concat(e),{method:t?"DELETE":"PUT"})}}],n&&z(t.prototype,n),e}();function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-28",headers:{authorization:"b38078dd-f6b0-4e16-83cc-6b71b2124085","Content-Type":"application/json"}}),N=new E("#popupPicture");N.setEventListeners();var Q=new J("#popupRemovingCard",(function(e){M.deleteCard(e.id).then((function(t){e.evt.target.parentElement.remove()})).catch((function(e){Z(e)})).finally((function(){Q.close()}))}));Q.setEventListeners();var $=new q("#popupUpdateProfilePicture",(function(e){M.updateUserAvatar(e.newAvatar).then((function(e){X.setUserInfo(e)})).catch((function(e){return Z(e)})).finally($.close())}));$.setEventListeners(),new p(a,$.getForm()).enableValidation();var G=new q("#popupProfile",(function(e){M.updateUserInfo({name:e.newName,about:e.newTitle}).then((function(e){X.setUserInfo(e)})).catch((function(e){Z(e)})).finally((function(){G.close()}))}));G.setEventListeners(),new p(a,G.getForm()).enableValidation();var K=new q("#popupAddPicture",(function(e){var t={name:e.newTitle,link:e.newUrl};M.sendCard(t).then((function(e){W.addItem(e,"prepend")})).catch((function(e){Z(e)})).finally((function(){K.close()}))}));K.setEventListeners(),new p(a,K.getForm()).enableValidation();var W=new R((function(e){return function(e,t,n,r,o,i){return new s({title:e.name,link:e.link,likes:e.likes,id:e._id,ownerId:e.owner._id},t,"#pictureTemplate",r,o,i)}(e,X.getUserInfo().id,0,N.open.bind(N),Q.open.bind(Q),Y).getCard()}),".pictures"),X=new _({nicknameSelector:".profile__title",userPosSelector:".profile__subtitle",avatarSelector:".profile__avatar"});function Y(e,t,n){M.updateLikeState(e,t).then((function(e){n(e)})).catch((function(e){Z(e)}))}function Z(e){console.log(e)}Promise.all([M.getUserInfo(),M.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(o),W.addItems(i,T)})),r.addEventListener("click",(function(){G.setValues(X.getUserInfo()),i.dispatchEvent(new Event("input")),u.dispatchEvent(new Event("input")),G.open()})),o.addEventListener("click",(function(){K.open()})),c.addEventListener("click",(function(){$.open()}))})();