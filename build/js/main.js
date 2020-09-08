"use strict";window.debounce=function(e){var i=null;return function(){var r=arguments;i&&window.clearTimeout(i),i=window.setTimeout(function(){e.apply(null,r)},500)}},function(){for(var e,i=document.querySelectorAll('input[type="tel"]'),r=0;r<i.length;r++)i[r]&&(e=i[r],new window.IMask(e,{mask:"+7 (000) 000-00-00",lazy:!0}))}(),function(){var e=document.querySelector(".membership"),i={COACH:"5000",NOONTIME:"1700",FULL_DAY:"2700"},r={COACH:"3000",NOONTIME:"1200",FULL_DAY:"2000"},t={COACH:"2000",NOONTIME:"1000",FULL_DAY:"1500"};if(e){var n=document.querySelectorAll(".membership__passes-input"),s="membership__passes-input--checked",o=document.querySelector(".membership__card--coach .membership__price span"),l=document.querySelector(".membership__card--noontime .membership__price span"),a=document.querySelector(".membership__card--day .membership__price span"),c=function(e,i,r){for(var t=0;t<e.length;t++)i.call(r,e[t],t)},S=function(e,i){e&&(e.innerText=i,e.dataset.price=i)},d=function(e){S(o,e.COACH),S(l,e.NOONTIME),S(a,e.FULL_DAY)};c(n,function(e){e.addEventListener("click",function(){switch(c(n,function(e){e.classList.remove(s)}),e.classList.toggle(s),console.dir(this),!0){case"1 месяц"===this.innerText:d(i);break;case"6 месяцев"===this.innerText:d(r);break;case"12 месяцев"===this.innerText:d(t)}})})}}(),function(){var e,i,r,t,n,s=document.querySelectorAll(".gym__info > p"),o=document.querySelectorAll(".reviews__review-body");window.matchMedia("(max-width: 1199px)");if(s);if(o)for(var l=0;l<o.length;l++)e=o[l],i=165,r='... <a href="#" class="reviews__review-link" tabindex="-1">Читать дальше</a>',t=void 0,n=void 0,t=e.innerText.length,n=t-i,t>i&&(e.innerHTML=e.innerText.substring(0,e.innerText.length-n)+(0===n?"":r),n=0)}(),function(){var e={Container:{CLASS:"instructors__slider",SELECTOR:".instructors__slider"},Wrapper:{CLASS:"instructors__slider-list",SELECTOR:".instructors__slider-list"},Slide:{CLASS:"instructors__slider-item",SELECTOR:".instructors__slider-item"},Navigation:{SLIDER_BUTTONS:".instructors__slider-buttons",NEXT_CLASS:".instructors__button--next",PREV_CLASS:".instructors__button--prev"}},i={Container:{CLASS:"reviews__slider",SELECTOR:".reviews__slider"},Wrapper:{CLASS:"reviews__slider-list",SELECTOR:".reviews__slider-list"},Slide:{CLASS:"reviews__slider-item",SELECTOR:".reviews__slider-item"},Navigation:{SLIDER_BUTTONS:".reviews__slider-buttons",NEXT_CLASS:".reviews__button--next",PREV_CLASS:".reviews__button--prev"}},r={CONTAINER_INITIALIZED:"swiper-container-initialized"},t="visually-hidden",n=document.querySelector(".reviews"),s=document.querySelector(".instructors"),o=document.querySelector(e.Container.SELECTOR),l=document.querySelector(e.Wrapper.SELECTOR),a=document.querySelector(e.Navigation.SLIDER_BUTTONS),c=document.querySelector(i.Container.SELECTOR),S=document.querySelector(i.Wrapper.SELECTOR),d=document.querySelector(i.Navigation.SLIDER_BUTTONS),u=function(){o.classList.contains(r.CONTAINER_INITIALIZED)||(l.style.display="flex",l.style.flexWrap="nowrap",a.classList.remove(t)),new Swiper(e.Container.SELECTOR,{init:!1,speed:600,wrapperClass:e.Wrapper.CLASS,slideClass:e.Slide.CLASS,navigation:{nextEl:e.Navigation.NEXT_CLASS,prevEl:e.Navigation.PREV_CLASS},breakpoints:{1199:{slidesPerView:4,slidesPerGroup:4,spaceBetween:40},767:{initialSlide:2,slidesPerView:2,slidesPerGroup:2,spaceBetween:30},320:{initialSlide:2,slidesPerView:1,slidesPerGroup:1,spaceBetween:10}}}).init()};if(n&&(c.classList.contains(r.CONTAINER_INITIALIZED)||(S.style.display="flex",S.style.flexWrap="nowrap",d.classList.remove(t)),new Swiper(i.Container.SELECTOR,{init:!1,speed:600,slidesPerView:1,wrapperClass:i.Wrapper.CLASS,slideClass:i.Slide.CLASS,navigation:{nextEl:i.Navigation.NEXT_CLASS,prevEl:i.Navigation.PREV_CLASS}}).init()),s){var _=window.debounce(u);u(),window.addEventListener("resize",_)}}();