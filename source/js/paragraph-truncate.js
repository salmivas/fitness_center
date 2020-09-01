'use strict';
(function () {
  var gymInfoParagraphs = document.querySelectorAll('.gym__info > p');

  var ClassName = {
    VISUALLY_HIDDEN: 'visually-hidden',
  }

  var ViewportWidth = {
    MAX_TABLET: '(max-width: 1199px)',
  };

  var MediaQuery = {
    MAX_TABLET_WIDTH: window.matchMedia(ViewportWidth.MAX_TABLET),
  };

  var PARAGRAPHS_TO_KEEP = 1;

  if (gymInfoParagraphs) {
    var truncParagraph = function () {
      for (var i = PARAGRAPHS_TO_KEEP; i < gymInfoParagraphs.length; i++) {
        if (MediaQuery.MAX_TABLET_WIDTH.matches && gymInfoParagraphs.length > PARAGRAPHS_TO_KEEP) {
          gymInfoParagraphs[i].classList.add(ClassName.VISUALLY_HIDDEN)
        } else {
          gymInfoParagraphs[i].classList.remove(ClassName.VISUALLY_HIDDEN)
        }
      }
    }

    truncParagraph();
    window.addEventListener('resize', truncParagraph);
  }
})();
