'use strict';

(function () {
  var membership = document.querySelector('.membership');

  if (membership) {
    var membershipTogglers = document.querySelectorAll('.membership__passes-toggler');
    var membershipOffers = document.querySelectorAll('.membership__offers');
    var monthToggler = document.querySelector('.membership__month-pass .membership__passes-toggler');
    var semiannualToggler = document.querySelector('.membership__semiannual-pass .membership__passes-toggler');
    var annualToggler = document.querySelector('.membership__annual-pass .membership__passes-toggler');
    var monthOffers = document.querySelector('.membership__offers--month');
    var semiannualOffers = document.querySelector('.membership__offers--semiannual');
    var annualOffers = document.querySelector('.membership__offers--annual');

    var VISUALLY_HIDDEN = 'visually-hidden';
    var TOGGLER_CHECKED = 'membership__passes-toggler--checked';

    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, array[i], i);
      }
    };

    var closeOffers = function (offersElement) {
      if (!offersElement.classList.contains(VISUALLY_HIDDEN)) {
        offersElement.classList.add(VISUALLY_HIDDEN);
      }
      return;
    };

    var uncheckToggler = function (togglerElement) {
      if (togglerElement.classList.contains(TOGGLER_CHECKED)) {
        togglerElement.classList.remove(TOGGLER_CHECKED);
      }
      return;
    };

    var closeAllOffers = function (offersArray) {
      forEach(offersArray, function (offers) {
        closeOffers(offers);
      });
    };

    var uncheckAllTogglers = function (togglersArray) {
      forEach(togglersArray, function (toggler) {
        uncheckToggler(toggler);
      });
    };

    var togglersInit = function () {
      forEach(membershipTogglers, function (toggler) {
        toggler.addEventListener('click', function () {
          uncheckAllTogglers(membershipTogglers);
          closeAllOffers(membershipOffers);
          switch (true) {
            case toggler === monthToggler:
              monthOffers.classList.remove(VISUALLY_HIDDEN);
              toggler.classList.add(TOGGLER_CHECKED);
              break;
            case toggler === semiannualToggler:
              semiannualOffers.classList.remove(VISUALLY_HIDDEN);
              toggler.classList.add(TOGGLER_CHECKED);
              break;
            case toggler === annualToggler:
              annualOffers.classList.remove(VISUALLY_HIDDEN);
              toggler.classList.add(TOGGLER_CHECKED);
              break;
            default:
              break;
          }
          return;
        });
      });
    };
    togglersInit();
  }
})();
