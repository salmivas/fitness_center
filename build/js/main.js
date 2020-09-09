"use strict";window.debounce=function(e){var i=null;return function(){var s=arguments;i&&window.clearTimeout(i),i=window.setTimeout(function(){e.apply(null,s)},500)}},function(){for(var e,i=document.querySelectorAll('input[type="tel"]'),s=0;s<i.length;s++)i[s]&&(e=i[s],new window.IMask(e,{mask:"+7 (000) 000-00-00",lazy:!0}))}(),function(){if(document.querySelector(".membership")){var e=document.querySelectorAll(".membership__passes-toggler"),i=document.querySelectorAll(".membership__offers"),s=document.querySelector(".membership__month-pass .membership__passes-toggler"),r=document.querySelector(".membership__semiannual-pass .membership__passes-toggler"),t=document.querySelector(".membership__annual-pass .membership__passes-toggler"),n=document.querySelector(".membership__offers--month"),l=document.querySelector(".membership__offers--semiannual"),o=document.querySelector(".membership__offers--annual"),a="membership__passes-toggler--checked",c=function(e,i,s){for(var r=0;r<e.length;r++)i.call(s,e[r],r)},d=function(e){c(e,function(e){var i;(i=e).classList.contains(a)&&i.classList.remove(a)})};c(e,function(u){u.addEventListener("click",function(){switch(d(e),c(i,function(e){var i;(i=e).classList.contains("visually-hidden")||i.classList.add("visually-hidden")}),!0){case u===s:n.classList.remove("visually-hidden"),u.classList.add(a);break;case u===r:l.classList.remove("visually-hidden"),u.classList.add(a);break;case u===t:o.classList.remove("visually-hidden"),u.classList.add(a)}})})}}(),function(){var e,i,s,r,t,n=document.querySelectorAll(".gym__info > p"),l=document.querySelectorAll(".reviews__review-body"),o="visually-hidden",a=window.matchMedia("(max-width: 1199px)");if(n){var c=function(){for(var e=1;e<n.length;e++)a.matches&&n.length>1?n[e].classList.add(o):n[e].classList.remove(o)};c(),window.addEventListener("resize",c)}if(l)for(var d=0;d<l.length;d++)e=l[d],i=165,s="...",r=void 0,t=void 0,r=e.innerText.length,t=r-i,r>i&&(e.innerHTML=e.innerText.substring(0,e.innerText.length-t)+(0===t?"":s),t=0)}(),function(){var e={Container:{CLASS:"instructors__slider",SELECTOR:".instructors__slider"},Wrapper:{CLASS:"instructors__slider-list",SELECTOR:".instructors__slider-list"},Slide:{CLASS:"instructors__slider-item",SELECTOR:".instructors__slider-item"},Navigation:{SLIDER_BUTTONS:".instructors__slider-buttons",NEXT_CLASS:".instructors__button--next",PREV_CLASS:".instructors__button--prev"}},i={Container:{CLASS:"reviews__slider",SELECTOR:".reviews__slider"},Wrapper:{CLASS:"reviews__slider-list",SELECTOR:".reviews__slider-list"},Slide:{CLASS:"reviews__slider-item",SELECTOR:".reviews__slider-item"},Navigation:{SLIDER_BUTTONS:".reviews__slider-buttons",NEXT_CLASS:".reviews__button--next",PREV_CLASS:".reviews__button--prev"}},s={CONTAINER_INITIALIZED:"swiper-container-initialized"},r="visually-hidden",t=document.querySelector(".reviews"),n=document.querySelector(".instructors"),l=document.querySelector(e.Container.SELECTOR),o=document.querySelector(e.Wrapper.SELECTOR),a=document.querySelector(e.Navigation.SLIDER_BUTTONS),c=document.querySelector(i.Container.SELECTOR),d=document.querySelector(i.Wrapper.SELECTOR),u=document.querySelector(i.Navigation.SLIDER_BUTTONS),S=function(){l.classList.contains(s.CONTAINER_INITIALIZED)||(o.style.display="flex",o.style.flexWrap="nowrap",a.classList.remove(r)),new Swiper(e.Container.SELECTOR,{init:!1,speed:600,wrapperClass:e.Wrapper.CLASS,slideClass:e.Slide.CLASS,navigation:{nextEl:e.Navigation.NEXT_CLASS,prevEl:e.Navigation.PREV_CLASS},breakpoints:{1199:{slidesPerView:4,slidesPerGroup:4,spaceBetween:40},767:{initialSlide:2,slidesPerView:2,slidesPerGroup:2,spaceBetween:30},320:{initialSlide:2,slidesPerView:1,slidesPerGroup:1,spaceBetween:10}}}).init()};if(t&&(c.classList.contains(s.CONTAINER_INITIALIZED)||(d.style.display="flex",d.style.flexWrap="nowrap",u.classList.remove(r)),new Swiper(i.Container.SELECTOR,{init:!1,speed:600,slidesPerView:1,wrapperClass:i.Wrapper.CLASS,slideClass:i.Slide.CLASS,navigation:{nextEl:i.Navigation.NEXT_CLASS,prevEl:i.Navigation.PREV_CLASS}}).init()),n){var _=window.debounce(S);S(),window.addEventListener("resize",_)}}();