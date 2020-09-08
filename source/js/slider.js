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
        SLIDER_BUTTONS: '.instructors__slider-buttons',
        NEXT_CLASS: '.instructors__button--next',
        PREV_CLASS: '.instructors__button--prev',
      },
    },
    Reviews: {
      Container: {
        CLASS: 'reviews__slider',
        SELECTOR: '.reviews__slider',
      },
      Wrapper: {
        CLASS: 'reviews__slider-list',
        SELECTOR: '.reviews__slider-list',
      },
      Slide: {
        CLASS: 'reviews__slider-item',
        SELECTOR: '.reviews__slider-item',
      },
      Navigation: {
        SLIDER_BUTTONS: '.reviews__slider-buttons',
        NEXT_CLASS: '.reviews__button--next',
        PREV_CLASS: '.reviews__button--prev',
      },
    },
    Common: {
      CONTAINER_INITIALIZED: 'swiper-container-initialized',
    },
  };

  var CommonClass = {
    VISUALLY_HIDDEN: 'visually-hidden',
  };


  var reviews = document.querySelector('.reviews');
  var instructors = document.querySelector('.instructors');
  var instructorsSlider = document.querySelector(SliderClass.Instructors.Container.SELECTOR)
  var instructorsSliderList = document.querySelector(SliderClass.Instructors.Wrapper.SELECTOR);
  var instructorsSliderButtons = document.querySelector(SliderClass.Instructors.Navigation.SLIDER_BUTTONS);
  var reviewsSlider = document.querySelector(SliderClass.Reviews.Container.SELECTOR)
  var reviewsSliderList = document.querySelector(SliderClass.Reviews.Wrapper.SELECTOR);
  var reviewsSliderButtons = document.querySelector(SliderClass.Reviews.Navigation.SLIDER_BUTTONS);

  var instructorsSliderSwiper;
  var reviewsSliderSwiper;

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
          initialSlide: 2,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        320: {
          initialSlide: 2,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });
    instructorsSliderSwiper.init();
  }

  var runReviewsSliderSwiper = function () {
    if (!reviewsSlider.classList.contains(SliderClass.Common.CONTAINER_INITIALIZED)) {
      reviewsSliderList.style.display = 'flex';
      reviewsSliderList.style.flexWrap = 'nowrap';
      reviewsSliderButtons.classList.remove(CommonClass.VISUALLY_HIDDEN);
    }

    reviewsSliderSwiper = new Swiper(SliderClass.Reviews.Container.SELECTOR, {
      init: false,
      speed: 600,
      slidesPerView: 1,
      wrapperClass: SliderClass.Reviews.Wrapper.CLASS,
      slideClass: SliderClass.Reviews.Slide.CLASS,
      navigation: {
        nextEl: SliderClass.Reviews.Navigation.NEXT_CLASS,
        prevEl: SliderClass.Reviews.Navigation.PREV_CLASS,
      },
    });
    reviewsSliderSwiper.init();
  }

  if (reviews) {
    runReviewsSliderSwiper();
  }

  if (instructors) {
    var onResize = window.debounce(runInstructorsSliderSwiper);

    runInstructorsSliderSwiper();
    window.addEventListener('resize', onResize);
  }
})();
