(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(n.classList.remove(e.inactiveButtonClass),n.disabled=!1):(n.classList.add(e.inactiveButtonClass),n.disabled=!0)}e.d({},{x:()=>D});var n={baseUrl:"https://nomoreparties.co/v1/plus-cohort7/",headers:{authorization:"a794a2ca-2fdb-43bd-a4a4-85b3c1a8c71e","Content-Type":"application/json"}},r=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},o=function(e){console.log(e)},c=document.querySelectorAll(".popup"),a=document.querySelector(".popup"),i=document.querySelector(".info__edit-btn"),u=document.querySelector(".cards-popup"),l=document.querySelector(".profile__add-btn"),s=document.querySelector(".profile__avatar"),d=document.querySelector(".avatar-popup"),p=document.querySelector(".popup__form"),f=document.querySelector(".popup__form-profile"),m=f.querySelector(".popup__submit"),_=document.querySelector(".popup__input-name"),v=document.querySelector(".popup__input-about"),y=document.querySelector(".info__name"),h=document.querySelector(".info__description"),b=document.querySelector(".popup__form-delete-card").querySelector(".popup__submit"),S=document.querySelector(".card-delete-popup"),q=document.querySelector(".popup__form-avatar"),g=document.querySelector(".popup__input-avatar"),E=document.querySelector(".profile__avatar-img"),L=q.querySelector(".popup__submit"),k=function(e){e.classList.add("popup_opened"),window.addEventListener("keydown",O)},C=function(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",O)},O=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");C(t)}};c.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&C(e),t.target.classList.contains("popup__close-btn")&&C(e)}))})),l.addEventListener("click",(function(){k(u)})),s.addEventListener("click",(function(){k(d)})),i.addEventListener("click",(function(){_.value=y.textContent,v.value=h.textContent,k(a)}));var w,j=function(e,t){e.disabled=t,e.textContent=t?"Cохранение...":"Сохранить"},P=function(e){e.classList.add("popup__save-btn_inactive"),e.setAttribute("disabled",!0)};f.addEventListener("submit",(function(e){var t;e.preventDefault(),j(m,!0),(t={name:_.value,about:v.value},fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(r)).then((function(e){y.textContent=e.name,h.textContent=e.about,C(a),p.reset(),P(m)})).catch(o).finally((function(){j(m,!1)}))})),q.addEventListener("submit",(function(e){var t;e.preventDefault(),j(L,!0),(t=g.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:t})}).then(r)).then((function(e){E.src=g.value,C(d),q.reset(),P(L)})).catch(o).finally((function(){j(L,!1)}))}));var x=function(e,t){e.textContent=t};S.addEventListener("submit",(function(e){e.preventDefault(),x(b,"Удаление..."),Q(w).then((function(){C(S)})).catch(o).finally((function(){x(b,"Да")}))}));var A,D,U=document.querySelector(".elements__list"),I=u.querySelector(".popup__form-card"),T=I.querySelector(".popup__submit"),B=document.querySelector(".image-popup__photo"),N=document.querySelector(".image-popup__caption"),J=document.querySelector(".image-popup"),H=document.querySelector(".popup__input-title"),M=document.querySelector(".popup__input-link"),z=document.querySelector(".popup__save-btn_add_card"),$=function(e){var t=e.name,n=e.link,r=e.likes,o=e.cardId,c=e.ownerId,a=document.querySelector(".template").content.querySelector(".elements__list-item").cloneNode(!0),i=a.querySelector(".elements__list-photo"),u=a.querySelector(".elements__like-btn");if(a.id=o,a.querySelector(".elements__description").textContent=t,i.src=n,i.alt=t,a.querySelector(".elements__like-count").textContent=r.length.toString(),Boolean(r.find((function(e){return e._id===D})))&&u.classList.add("elements__like-btn_active"),K(a,r.length),u.addEventListener("click",G),c===D){var l=a.querySelector(".elements__button-delete");l.classList.add("elements__button_inactive"),l.addEventListener("click",(function(e){k(S),w=e}))}return i.addEventListener("click",(function(){B.src=n,B.alt=t,N.textContent=t,k(J)})),a},F=function(e,t){t.prepend(e)},G=function(e){var t,c=e.target.closest(".elements__list-item"),a=e.target;a.classList.contains("elements__like-btn_active")?(t=c.id,fetch("".concat(n.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:n.headers}).then(r)).then((function(e){a.classList.remove("elements__like-btn_active"),K(c,e.likes.length)})).catch(o):function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:n.headers}).then(r)}(c.id).then((function(e){a.classList.add("elements__like-btn_active"),K(c,e.likes.length)})).catch(o)},K=function(e,t){e.querySelector(".elements__like-count").textContent=t},Q=function(e){var t,o=e.target.closest(".elements__list-item");return(t=o.id,fetch("".concat(n.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:n.headers}).then(r)).then((function(){o.remove()}))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}I.addEventListener("submit",(function(e){var t;e.preventDefault(),j(T,!0),(t={name:H.value,link:M.value},fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(r)).then((function(e){var t=e.name,n=e.link,r=e.likes,o=e._id,c=e.owner._id,a=$({name:t,link:n,likes:r,cardId:o,ownerId:c});F(a,U),C(u),I.reset(),P(z)})).catch(o).finally((function(){j(T,!1)}))})),Promise.all([fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers}).then(r),fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then(r)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];y.textContent=o.name,h.textContent=o.about,E.alt=o.name,E.src=o.avatar,D=o._id,c.reverse().forEach((function(e){var t=$(V(V({},e),{},{cardId:e._id,ownerId:e.owner._id}));F(t,U)}))})).catch(o),A={formSelector:".popup__form",inputSelector:".popup__input",fieldsetSelector:".popup__form-set",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(A.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(A.fieldsetSelector)).forEach((function(e){!function(e,n){var r=Array.from(n.querySelectorAll(e.inputSelector)),o=n.querySelector(e.submitButtonSelector);t(e,r,o),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){n.validity.valid?function(e,t,n){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),r.classList.remove(e.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),o.textContent=r,o.classList.add(e.errorClass)}(e,t,n,n.validationMessage)}(e,n,c),t(e,r,o)}))}))}(A,e)}))}))})();