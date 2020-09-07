'use strict';

(function () {
  var inputPhones = document.querySelectorAll('input[type="tel"]');
  var maskPhone = function (element) {
    return new window.IMask(element, {
      mask: '+7 (000) 000-00-00',
      lazy: true,
    });
  };

  for (var i = 0; i < inputPhones.length; i++) {
    if (inputPhones[i]) {
      maskPhone(inputPhones[i]);
    }
  }
})();
