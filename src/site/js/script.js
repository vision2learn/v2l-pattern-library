var Toolkit = (function () {
  var toolkit = []; // object to export/expose, props added below

  // BEGIN PRIVATE FUNCTIONS
  function _debug(msg) {
    console.debug('debug: ', msg);
  }

  // BEGIN PUBLIC FUNCTIONS

  /**
   *
   * Function: Toolkit.toggleAttr(el, attr, testVal, toggleVal)
   * @param {Node} el
   * @param {String} attr
   * @param {String} testVal
   * @param {String} toggleVal
   */
  function toggleAttr(el, attr, testVal, toggleVal) {
    try {
      if (el.getAttribute(attr) === testVal) {
        el.setAttribute(attr, toggleVal);
      } else {
        el.setAttribute(attr, testVal);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * Function addHandler
   * @param {NodeList} nl
   * @param {String} handler
   * @param {Function} fn
   */
  function addHandler(nl, handler, fn) {
    nl.forEach(function (item) {
      item.addEventListener(handler, fn);
    });
  }

  function createElement(el) {
    return document.createElement(el);
  }

  toolkit = {
    toggleAttr: toggleAttr,
    addHandler: addHandler,
    createElement: createElement
  };

  return toolkit;
})();

/**
 * General sort of document.ready sort of thing
 */

(function () {
  var page = {
    initShowHide: function () {
      // get the DOM elements which control the show/hide behaviour
      var _ariaControls = document.querySelectorAll('.js-showhide');

      // Add the required aria attributes to the show/hide components
      _ariaControls.forEach(function (item) {
        var controlled = document.querySelector(
          '#' + item.getAttribute('data-controls')
        ); // the region/element this button shows/hides
        controlled.setAttribute('aria-hidden', true);

        // get the innerText of the element and remove it
        var text = item.innerText;
        item.innerText = "";

        // inject a button into the element and give it the text from above
        var btn = Toolkit.createElement('button');
        btn.innerText = text;
        item.appendChild(btn);

        btn.setAttribute('class', "a11y-btn");
        btn.setAttribute('aria-expanded', "false");
        btn.setAttribute('aria-controls', item.getAttribute('data-controls'));
      });

      // attach onclick events to controls
      Toolkit.addHandler(document.querySelectorAll("button[aria-expanded=false]"), 'click', function () {
        // toggle aria-expanded property of button
        Toolkit.toggleAttr(this, 'aria-expanded', 'true', 'false');

        // check aria-hidden status of sibling and toggle
        var hiddenEl = document.getElementById(this.getAttribute('aria-controls'));
        Toolkit.toggleAttr(hiddenEl, 'aria-hidden', 'true', 'false');
      });
    }
  };

  page.initShowHide();
})();