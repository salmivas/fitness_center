'use strict';

(function () {
  var membershipPasses = document.querySelectorAll('.membership__passes input');
  var membershipCardCoachValue = document.querySelector('.membership__card--coach .membership__price span');
  var membershipCardNoontimeValue = document.querySelector('.membership__card--noontime .membership__price span');
  var membershipCardDayValue = document.querySelector('.membership__card--day .membership__price span');

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

  var capitalize = function (str) {
    if (typeof str !== 'string') {
      return '';
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var setPrice = function (elementToSet, costToset) {
    if (elementToSet) {
      elementToSet.innerText = costToset;
      elementToSet.dataset.price = costToset;
    }
  };

  var setCurrnetPrice = function (key) {
    setPrice(membershipCardCoachValue, Price[capitalize(key)].COACH);
    setPrice(membershipCardNoontimeValue, Price[capitalize(key)].NOONTIME);
    setPrice(membershipCardDayValue, Price[capitalize(key)].FULL_DAY);
  };

  if (membershipPasses) {
    for (var i = 0; i < membershipPasses.length; i++) {
      membershipPasses[i].addEventListener('click', function (evt) {
        setCurrnetPrice(evt.target.id);
      });
    }
  }
})();
