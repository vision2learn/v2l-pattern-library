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
        var controlled = item.nextElementSibling;
        controlled.setAttribute('aria-hidden', true);

        // replace the image with a button then inject the image into the button
        var img = item.cloneNode();
        var parent = item.parentNode;

        // get the innerText of the element and remove it
        // var text = item.innerText;
        // item.innerText = "";

        // inject a button into the element and give it the text from above
        var btn = Toolkit.createElement('button');
        btn.appendChild(img);
        parent.replaceChild(btn, item);

        btn.setAttribute('class', "a11y-btn");
        btn.setAttribute('aria-expanded', "false");
        // btn.setAttribute('aria-controls', item.getAttribute('data-controls'));
      });

      // attach onclick events to controls
      Toolkit.addHandler(document.querySelectorAll("button[aria-expanded=false]"), 'click', function () {
        // toggle aria-expanded property of button
        // Toolkit.toggleAttr(this, 'aria-expanded', 'true', 'false');
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var target = this.nextElementSibling;
        this.setAttribute('aria-expanded', !expanded);
        // check aria-hidden status of sibling and toggle
        target.setAttribute('aria-hidden', expanded);
      });
    }
  };

  page.initShowHide();
})();


"use strict";

(function () {
  // Get relevant elements and collections
  if(document.querySelector('.tabbed')) {
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
  }
})();

(function () {
  // Check for <template> support
  if ('content' in document.createElement('template')) {
    const tmpl = document.createElement('template');

    // Create the web component's template
    // featuring a <slot> for the Light DOM content
    tmpl.innerHTML = `
      <h2>
        <button aria-expanded="false">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <rect class="vert" height="8" width="2" y="1" x="4"/>
            <rect height="2" width="8" y="4" x="1"/>
          </svg>
        </button>
      </h2>
      <div class="content" hidden>
        <slot></slot>
      </div>
      <style>
        h2 {
          margin: 0;
        }

        h2 + div {
          padding-bottom: 1.5rem;
        }

        h2 button {
          all: inherit;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.5em 0;
        }

        h2 button:focus svg {
          outline: 2px solid;
        }

        button svg {
          height: 1em;
          margin-left: 0.5em;
        }

        [aria-expanded="true"] .vert {
          display: none;
        }

        [aria-expanded] rect {
          fill: currentColor;
        }
      </style>
    `;

    // Check for latest Shadow DOM syntax support
    if (document.head.attachShadow) {
      class ToggleSection extends HTMLElement {
        constructor() {
          super();

          // Make the host element a region
          this.setAttribute('role', 'region');

          // Create a `shadowRoot` and populate from template 
          this.attachShadow({ mode: 'open' });
          this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

          // Assign the toggle button
          this.btn = this.shadowRoot.querySelector('h2 button');

          // Get the first element in Light DOM
          const oldHeading = this.querySelector(':first-child');
          // and cast its heading level (which should, but may not, exist)
          let level = parseInt(oldHeading.tagName.substr(1));
          // Then take its `id` (may be null)
          let id = oldHeading.id;

          // Get the Shadow DOM <h2>
          this.heading = this.shadowRoot.querySelector('h2');

          // If `id` exists, apply it
          if (id) {
            this.heading.id = id;
          }

          // If there is no level, there is no heading.
          // Add a warning.
          if (!level) {
            console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.');
          }

          // If the level is a real integer but not 2
          // set `aria-level` accordingly
          if (level && level !== 2) {
            this.heading.setAttribute('aria-level', level);
          }

          // Add the Light DOM heading label to the innerHTML of the toggle button
          // and remove the now unwanted Light DOM heading
          this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML;
          oldHeading.parentNode.removeChild(oldHeading);

          // The main state switching function
          this.switchState = () => {
            let expanded = this.getAttribute('open') === 'true';

            // Toggle `aria-expanded`
            this.btn.setAttribute('aria-expanded', expanded);
            // Toggle the `.content` element's visibility
            this.shadowRoot.querySelector('.content').hidden = !expanded;
          }

          this.btn.onclick = () => {
            // Change the component's `open` attribute value on click
            let open = this.getAttribute('open') === 'true';
            this.setAttribute('open', open ? 'false' : 'true')

            // Update the hash if the collapsible section's 
            // heading has an `id` and we are opening, not closing
            if (this.heading.id && !open) {
              history.pushState(null, null, '#' + this.heading.id);
            }
          }
        }

        connectedCallback() {
          if (window.location.hash.substr(1) === this.heading.id) {
            this.setAttribute('open', 'true');
            this.btn.focus();
          }
        }

        // Identify just the `open` attribute as an observed attribute
        static get observedAttributes() {
          return ['open'];
        }

        // When `open` changes value, execute switchState()
        attributeChangedCallback(name) {
          if (name === 'open') {
            this.switchState();
          }
        }
      }

      // Add our new custom element to the window for use
      window.customElements.define('toggle-section', ToggleSection);

      // Define the expand/collapse all template
      const buttons = document.createElement('div')
      buttons.innerHTML = `
        <ul class="controls">
          <li><button id="expand">expand all</button></li>
          <li><button id="collapse">collapse all</button></li>
        </ul>
      `;

      // Get the first `toggle-section` on the page
      // and all toggle sections as a node list
      const first = document.querySelector('toggle-section');
      const all = document.querySelectorAll('toggle-section');

      // Insert the button controls before the first <toggle-section>
      first.parentNode.insertBefore(buttons, first);

      // Place the click on the parent <ul>...
      buttons.addEventListener('click', e => {
        // ...then determine which button was the target 
        let expand = e.target.id === 'expand';

        // Iterate over the toggle sections to switch
        // each one's state uniformly
        Array.prototype.forEach.call(all, t => {
          t.setAttribute('open', expand);
        });
      });
    }
  }
})();

if ('customElement' in window) {
  class StatusMessage extends HTMLElement {
    get status() {
      return this.getAttribute('status');
    }

    static get observedAttributes() {
      return ['status'];
    }

    attributeChangedCallback(name) {
      if (name === 'status') {
        this.innerHTML = `<p>${this.status}</p>`;
      }
    }

    constructor() {
      super();
      this.innerHTML = `<p>${this.status}</p>`;
    }
  }

  window.customElements.define('status-message', StatusMessage);
}