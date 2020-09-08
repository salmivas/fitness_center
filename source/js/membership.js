'use strict';

(function () {
  var membership = document.querySelector('.membership');

  var Price = {
    Month: {
      COACH: '5000',
      NOONTIME: '1700',
      FULL_DAY: '2700',
    },
    Semiannual: {
      COACH: '3000',
      NOONTIME: '1200',
      FULL_DAY: '2000',
    },
    Annual: {
      COACH: '2000',
      NOONTIME: '1000',
      FULL_DAY: '1500',
    },
  };

  if (membership) {
    var membershipButtons = document.querySelectorAll('.membership__passes-input');
    var CHECKED = "membership__passes-input--checked";
    var membershipCardCoachValue = document.querySelector('.membership__card--coach .membership__price span');
    var membershipCardNoontimeValue = document.querySelector('.membership__card--noontime .membership__price span');
    var membershipCardDayValue = document.querySelector('.membership__card--day .membership__price span');

    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, array[i], i);
      }
    };

    var setPrice = function (elementToSet, costToset) {
      if (elementToSet) {
        elementToSet.innerText = costToset;
        elementToSet.dataset.price = costToset;
      }
    };

    var setCurrnetPrice = function (rate) {
      setPrice(membershipCardCoachValue, rate.COACH);
      setPrice(membershipCardNoontimeValue, rate.NOONTIME);
      setPrice(membershipCardDayValue, rate.FULL_DAY);
    };

    var toggleButton = function (elementToCheck) {
      elementToCheck.classList.toggle(CHECKED);
    };

    var uncheckAll = function (elements) {
      forEach(elements, function (element) {
        element.classList.remove(CHECKED);
      })
    };

    var togglersInit = function () {
      forEach(membershipButtons, function (button) {
        button.addEventListener('click', function () {
          uncheckAll(membershipButtons);
          toggleButton(button);
          console.dir(this);
          switch (true) {
            case this.innerText === '1 месяц':
              setCurrnetPrice(Price.Month)
              break;
            case this.innerText === '6 месяцев':
              setCurrnetPrice(Price.Semiannual)
              break;
            case this.innerText === '12 месяцев':
              setCurrnetPrice(Price.Annual)
              break;
            default:
              break;
          }
        });
      });;
    };

    togglersInit();
  }
})();

