'use strict';
(function () {
  var body = document.querySelector('body');
  var modalFeedback = document.querySelector('.modal-feedback');
  var modalAccepted = document.querySelector('.modal-accepted');
  var callBack = document.querySelector('.call-back');
  var contacts = document.querySelector('.contacts');

  var ACCEPTED_HIDDEN = 'modal-accepted--hidden';
  var FEEDBACK_HIDDEN = 'modal-feedback--hidden';
  var OVERFLOW_HIDDEN = 'hidden';
  var LOCALSTORAGE_DATA_NAME = 'userData';

  var KeyCode = {
    ESCAPE: {
      LONG: 'Escape',
      SHORT: 'Esc',
    },
  };

  var showPopup = function (popupClass, hidingClass) {
    popupClass.classList.remove(hidingClass);
    body.style.overflow = OVERFLOW_HIDDEN;
  };

  var hidePopup = function (popupClass, hidingClass) {
    popupClass.classList.add(hidingClass);
    body.style.overflow = '';
  };

  var onEscKeyDown = function (evt, popupClass, hidingClass) {
    var isEscKey = evt.key === KeyCode.ESCAPE.LONG || evt.key === KeyCode.ESCAPE.SHORT;
    if (isEscKey) {
      hidePopup(popupClass, hidingClass);
    }
    body.removeEventListener('keydown', onEscKeyDown);
  };

  var setLocalStorageData = function (userName, userPhone) {
    localStorage.clear();
    localStorage.setItem(
      LOCALSTORAGE_DATA_NAME,
      JSON.stringify({
        userName: userName,
        userPhone: userPhone,
      })
    );
  };

  var showAcceptedWindow = function () {
    if (modalAccepted) {
      var clearButton = modalAccepted.querySelector('.modal-accepted__clear-button');
      var crossButton = modalAccepted.querySelector('.modal-accepted__cross-button');

      body.addEventListener('keydown', function (evt) {
        onEscKeyDown(evt, modalAccepted, ACCEPTED_HIDDEN);
      });

      clearButton.addEventListener('click', function () {
        hidePopup(modalAccepted, ACCEPTED_HIDDEN);
      });

      crossButton.addEventListener('click', function () {
        hidePopup(modalAccepted, ACCEPTED_HIDDEN);
      });

      modalAccepted.classList.remove(ACCEPTED_HIDDEN);
    }
  };

  if (modalFeedback) {
    var modalFeedbackFormContainer = document.querySelector('.modal-feedback__container');
    var callRequestButton = document.querySelector('.header__callback');
    var closeRequestButton = document.querySelector('.modal-feedback__form button[type="reset"]');
    var modalFeedbackForm = document.querySelector('.modal-feedback__form form');
    var modalUserName = document.getElementById('modal-feedback__user-name');
    var modalUserPhone = document.getElementById('modal-feedback__user-phone');
    var modalAdmission = document.getElementById('modal-admission');

    var SHAKE_ANIMATION_TIMEOUT = 600;
    var ERROR_STYLE = 'shake 0.8s';
    var EMERSION_TIMEOUT = 500;

    var shake = function () {
      modalFeedbackFormContainer.style.animation = ERROR_STYLE;

      setTimeout(function () {
        modalFeedbackFormContainer.style.animation = '';
      }, SHAKE_ANIMATION_TIMEOUT);
    };

    callRequestButton.addEventListener('click', function () {
      showPopup(modalFeedback, FEEDBACK_HIDDEN);
      setTimeout(function () {
        modalUserName.focus();
      }, EMERSION_TIMEOUT);
      body.addEventListener('keydown', function (evt) {
        onEscKeyDown(evt, modalFeedback, FEEDBACK_HIDDEN);
      });
    });

    window.addEventListener('click', function (event) {
      if (event.target === modalFeedback) {
        hidePopup(modalFeedback, FEEDBACK_HIDDEN);
      }
    });

    closeRequestButton.addEventListener('click', function () {
      hidePopup(modalFeedback, FEEDBACK_HIDDEN);
    });

    modalFeedbackForm.addEventListener('submit', function (evt) {
      evt.preventDefault();

      if (modalAdmission.checked) {
        setLocalStorageData(modalUserName.value, modalUserPhone.value);
        window.upload.post(
          function () {
            hidePopup(modalFeedback, FEEDBACK_HIDDEN);
            showAcceptedWindow();
          },
          shake,
          new FormData(modalFeedbackForm)
        );
      }
    });
  }

  if (callBack) {
    var callBackForm = document.querySelector('.call-back form');
    var callBackPhone = document.getElementById('call-back__user-phone');

    callBackForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setLocalStorageData('', callBackPhone.value);
      window.upload.post(showAcceptedWindow, null, new FormData(callBackForm));
    });
  }

  if (contacts) {
    var contactsForm = document.querySelector('.contacts__call-back form');
    var contactsUserName = document.getElementById('contacts__user-name');
    var contactsUserPhone = document.getElementById('contacts__user-phone');

    contactsForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setLocalStorageData(contactsUserName.value, contactsUserPhone.value);
      window.upload.post(showAcceptedWindow, '', new FormData(contactsForm));
    });
  }
})();
