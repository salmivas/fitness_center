'use strict';

(function () {
  var reviews = document.querySelectorAll('.reviews__review-container p:last-of-type');

  var MAX_TEXT_LENGTH = 165;
  var TRUNCATION_ENDING = '...';

  var truncText = function (element, maxLength, truncationEnding) {
    var totalTextLength = element.innerText.length;
    var truncatedLength = totalTextLength - maxLength;

    if (totalTextLength > maxLength) {
      element.innerHTML = element.innerText.substring(0, element.innerText.length - truncatedLength) + (truncatedLength === 0 ? '' : truncationEnding);
      truncatedLength = 0;
    }
  };

  if (reviews) {
    for (var i = 0; i < reviews.length; i++) {
      truncText(reviews[i], MAX_TEXT_LENGTH, TRUNCATION_ENDING);
    }
  }
})();
