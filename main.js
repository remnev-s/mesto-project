(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>z});var t=function(){Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(".popup__form-set")).forEach((function(e){!function(e){var t=Array.from(e.querySelectorAll(".popup__input")),r=e.querySelector(".popup__submit");n(t,r),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__input-error_active"),n.textContent=""}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__input-error_active")}(e,t,t.validationMessage)}(e,o),n(t,r)}))}))}(e)}))}))};function n(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove("popup__save-btn_inactive"),t.disabled=!1):(t.classList.add("popup__save-btn_inactive"),t.disabled=!0)}t();var r={baseUrl:"https://nomoreparties.co/v1/plus-cohort7/",headers:{authorization:"a794a2ca-2fdb-43bd-a4a4-85b3c1a8c71e","Content-Type":"application/json"}},o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},c=function(e){console.log(e)},a=document.querySelectorAll(".popup"),u=document.querySelector(".popup__close-btn"),i=document.querySelector(".popup"),l=document.querySelector(".profile__add-btn"),s=document.querySelector(".popup__close-btn_add_card"),d=document.querySelector(".popup__close-btn_delete_card"),p=document.querySelector(".popup__close-btn_image_fullsize"),_=document.querySelector(".popup-cards"),f=document.querySelector(".popup_image"),m=document.querySelector(".profile__avatar"),v=document.querySelector(".popup_avatar"),y=document.querySelector(".popup__close-btn_add_avatar"),b=document.querySelector(".popup__save-btn"),h=document.querySelector(".popup__form"),S=function(e){e.classList.add("popup_opened"),window.addEventListener("keydown",L)},q=function(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",L)},k=function(e){"click"===e.type&&e.target===e.currentTarget&&q(e.target)},L=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");q(t)}};a.forEach((function(e){e.addEventListener("click",k)})),l.addEventListener("click",(function(){S(_)})),s.addEventListener("click",(function(){q(_)})),p.addEventListener("click",(function(){q(f)}));var g=function(e,t){e.disabled=t,e.textContent=t?"Cохранение...":"Сохранить"},E=document.querySelector(".popup__input-name"),O=document.querySelector(".popup__input-about"),w=document.querySelector(".info__name"),j=document.querySelector(".info__description"),C=document.querySelector(".popup__form-profile"),P=C.querySelector(".popup__submit");C.addEventListener("submit",(function(e){var t;e.preventDefault(),g(P,!0),(t={name:E.value,about:O.value},fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return e.ok?t:Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){w.textContent=e.name,j.textContent=e.about,q(i),h.reset(),b.classList.add("popup__save-btn_inactive"),b.setAttribute("disabled",!0)})).catch(c).finally((function(){g(P,!1)}))})),document.querySelector(".info__edit-btn").addEventListener("click",(function(){E.value=w.textContent,O.value=j.textContent,S(i)})),u.addEventListener("click",(function(){q(i)}));var A,x=document.querySelector(".popup__form-avatar"),D=document.querySelector(".popup__input-avatar"),U=document.querySelector(".profile__avatar-img"),I=x.querySelector(".popup__submit");m.addEventListener("click",(function(){S(v)})),y.addEventListener("click",(function(){q(v)})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),g(I,!0),(t=D.value,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?t:Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){U.src=e,q(v),x.reset(),I.classList.add("popup__save-btn_inactive"),I.setAttribute("disabled",!0)})).catch(c).finally((function(){g(I,!1)}))}));var T=document.querySelector(".popup__form-delete-card").querySelector(".popup__submit"),N=document.querySelector(".popup_delete-card");d.addEventListener("click",(function(){q(N)}));var J=function(e,t){e.textContent=t};N.addEventListener("submit",(function(e){e.preventDefault(),J(T,"Удаление..."),Z(A).then((function(){q(N)})).catch(c).finally((function(){J(T,"Да")}))}));var z,H=document.querySelector(".elements__list"),M=_.querySelector(".popup__form-card"),B=M.querySelector(".popup__submit"),$=document.querySelector(".popup_image-photo"),F=document.querySelector(".popup_image-caption"),G=document.querySelector(".popup_image"),K=document.querySelector(".popup__input-title"),Q=document.querySelector(".popup__input-link"),R=document.querySelector(".popup__save-btn_add_card"),V=function(e){var t=e.name,n=e.link,r=e.likes,o=e.cardId,c=e.ownerId,a=document.querySelector(".template").content.querySelector(".elements__list-item").cloneNode(!0),u=a.querySelector(".elements__list-photo"),i=a.querySelector(".elements__like-btn");if(a.id=o,a.querySelector(".elements__description").textContent=t,u.src=n,u.alt=t,a.querySelector(".elements__like-count").textContent=r.length.toString(),Boolean(r.find((function(e){return e._id===z})))&&i.classList.add("elements__like-btn_active"),Y(a,r.length),i.addEventListener("click",X),c===z){var l=a.querySelector(".elements__button-delete");l.classList.add("elements__button_inactive"),l.addEventListener("click",(function(e){S(N),A=e}))}return u.addEventListener("click",(function(){$.src=n,$.alt=t,F.textContent=t,S(G)})),a},W=function(e,t){t.prepend(e)},X=function(e){var t,n=e.target.closest(".elements__list-item"),a=e.target;a.classList.contains("elements__like-btn_active")?(t=n.id,fetch("".concat(r.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:r.headers}).then(o)).then((function(e){a.classList.remove("elements__like-btn_active"),Y(n,e.likes.length)})).catch(c):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(n.id).then((function(e){a.classList.add("elements__like-btn_active"),Y(n,e.likes.length)})).catch(c)},Y=function(e,t){e.querySelector(".elements__like-count").textContent=t},Z=function(e){var t,n=e.target.closest(".elements__list-item");return(t=n.id,fetch("".concat(r.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:r.headers}).then(o)).then((function(){n.remove()}))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}M.addEventListener("submit",(function(e){var t;e.preventDefault(),g(B,!0),(t={name:K.value,link:Q.value},fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(o)).then((function(e){var t=e.name,n=e.link,r=e.likes,o=e._id,c=e.owner._id,a=V({name:t,link:n,likes:r,cardId:o,ownerId:c});W(a,H),q(_),M.reset(),R.classList.add("popup__save-btn_inactive"),R.setAttribute("disabled",!0)})).catch(c).finally((function(){g(B,!1)}))})),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then((function(e){return o(e)})),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];w.textContent=o.name,j.textContent=o.about,U.alt=o.name,U.src=o.avatar,z=o._id,c.reverse().forEach((function(e){var t=V(te(te({},e),{},{cardId:e._id,ownerId:e.owner._id}));W(t,H)}))})).catch(c),t()})();