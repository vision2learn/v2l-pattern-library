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


"use strict";

(function () {
  // Get relevant elements and collections
  var tabbed = document.querySelector('.tabbed');
  var tablist = tabbed.querySelector('ul');
  var tabs = tablist.querySelectorAll('a');
  var panels = tabbed.querySelectorAll('[id^="section"]'); // The tab switching function

  var switchTab = function switchTab(oldTab, newTab) {
    newTab.focus(); // Make the active tab focusable by the user (Tab key)

    newTab.removeAttribute('tabindex'); // Set the selected state

    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1'); // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide

    var index = Array.prototype.indexOf.call(tabs, newTab);
    var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }; // Add the tablist role to the first <ul> in the .tabbed container


  tablist.setAttribute('role', 'tablist'); // Add semantics are remove user focusability for each tab

  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation'); // Handle clicking of tabs for mouse users

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var currentTab = tablist.querySelector('[aria-selected]');

      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    }); // Handle keydown events for keyboard users

    tab.addEventListener('keydown', function (e) {
      // Get the index of the current tab in the tabs node list
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget); // Determine arrow key pressed

      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : null; // Switch to the new tab if it exists

      if (dir !== null) {
        e.preventDefault(); // Find correct tab to focus

        var newIndex;

        if (tabs[dir]) {
          newIndex = dir;
        } else {
          // Loop around if adjacent tab doesn't exist
          newIndex = dir === index - 1 ? tabs.length - 1 : 0;
        }

        switchTab(e.currentTarget, tabs[newIndex]);
        tabs[newIndex].focus();
      }
    });
  }); // Add tab panel semantics and hide them all

  Array.prototype.forEach.call(panels, function (panel, i) {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    var id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  }); // Initially activate the first tab and reveal the first tab panel

  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})();