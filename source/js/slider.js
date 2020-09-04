'use strict';

(function () {
  var SliderClass = {
    Instructors: {
      Container: {
        CLASS: 'instructors__slider',
        SELECTOR: '.instructors__slider',
      },
      Wrapper: {
        CLASS: 'instructors__slider-list',
        SELECTOR: '.instructors__slider-list',
      },
      Slide: {
        CLASS: 'instructors__slider-item',
        SELECTOR: '.instructors__slider-item',
      },
      Navigation: {
        SLIDER_BUTTONS: '.instructors_slider-buttons',
        NEXT_CLASS: '.instructors__button--next',
        PREV_CLASS: '.instructors__button--prev',
      },
    },
    Common: {
      CONTAINER_INITIALIZED: 'swiper-container-initialized',
    },
  };

  var CommonClass = {
    VISUALLY_HIDDEN: 'visually-hidden',
  };


  var instructorsSlider = document.querySelector(SliderClass.Instructors.Container.SELECTOR)
  var instructorsSliderList = document.querySelector(SliderClass.Instructors.Wrapper.SELECTOR);
  var instructorsSliderButtons = document.querySelector(SliderClass.Instructors.Navigation.SLIDER_BUTTONS);

  var instructorsSliderSwiper;

  var runInstructorsSliderSwiper = function () {
    if (!instructorsSlider.classList.contains(SliderClass.Common.CONTAINER_INITIALIZED)) {
      instructorsSliderList.style.display = 'flex';
      instructorsSliderList.style.flexWrap = 'nowrap';
      instructorsSliderButtons.classList.remove(CommonClass.VISUALLY_HIDDEN);
    }

    instructorsSliderSwiper = new Swiper(SliderClass.Instructors.Container.SELECTOR, {
      init: false,
      speed: 600,
      wrapperClass: SliderClass.Instructors.Wrapper.CLASS,
      slideClass: SliderClass.Instructors.Slide.CLASS,
      navigation: {
        nextEl: SliderClass.Instructors.Navigation.NEXT_CLASS,
        prevEl: SliderClass.Instructors.Navigation.PREV_CLASS,
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });
    instructorsSliderSwiper.init();
  }

  var onResize = window.debounce(runInstructorsSliderSwiper);

  runInstructorsSliderSwiper();
  window.addEventListener('resize', onResize);
})();