'use strict';

(function () {
  var gymInfoParagraphs = document.querySelectorAll('.gym__info > p');
  var reviews = document.querySelectorAll('.reviews__review-body');

  var ClassName = {
    VISUALLY_HIDDEN: 'visually-hidden',
  };

  var ViewportWidth = {
    MAX_TABLET: '(max-width: 1199px)',
  };

  var MediaQuery = {
    MAX_TABLET_WIDTH: window.matchMedia(ViewportWidth.MAX_TABLET),
  };

  var PARAGRAPHS_TO_KEEP = 1;
  var MAX_TEXT_LENGTH = 165;
  var TRUNCATION_ENDING = '... <a href="#" class="reviews__review-link" tabindex="-1">Читать дальше</a>';

  var truncText = function (element, maxLength, truncationEnding) {
    var totalTextLength = element.innerText.length;
    var truncatedLength = totalTextLength - maxLength;

    if (totalTextLength > maxLength) {
      element.innerHTML = element.innerText.substring(0, element.innerText.length - truncatedLength) + (truncatedLength === 0 ? '' : truncationEnding);
      truncatedLength = 0;
    }
  }

  if (gymInfoParagraphs) {
    var truncParagraph = function () {
      for (var i = PARAGRAPHS_TO_KEEP; i < gymInfoParagraphs.length; i++) {
        if (MediaQuery.MAX_TABLET_WIDTH.matches && gymInfoParagraphs.length > PARAGRAPHS_TO_KEEP) {
          gymInfoParagraphs[i].classList.add(ClassName.VISUALLY_HIDDEN);
        } else {
          gymInfoParagraphs[i].classList.remove(ClassName.VISUALLY_HIDDEN);
        }
      }

      truncParagraph();
      window.addEventListener('resize', truncParagraph);
    };
  }


  if (reviews) {
    for (var i = 0; i < reviews.length; i++) {
      truncText(reviews[i], MAX_TEXT_LENGTH, TRUNCATION_ENDING);
    }
  }
})();
