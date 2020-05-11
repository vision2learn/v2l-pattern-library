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

  // Check localStorage is available
  // See https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  function storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }

  toolkit = {
    toggleAttr: toggleAttr,
    addHandler: addHandler,
    createElement: createElement,
    storageAvailable: storageAvailable
  };

  return toolkit;
})();

/**
 * General sort of document.ready sort of thing
 */

(function () {

  document.querySelector('body').classList.add('js');

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
        var btn = document.createElement('button');
        btn.appendChild(img);
        parent.replaceChild(btn, item);

        btn.setAttribute('class', "a11y-btn");
        btn.setAttribute('aria-expanded', "false");
        // btn.setAttribute('aria-controls', item.getAttribute('data-controls'));

        // attach onclick events to controls
      // Toolkit.addHandler(document.querySelectorAll("button[aria-expanded=false]"), 'click', function () {
        btn.addEventListener('click', function() {
          // toggle aria-expanded property of button
          // Toolkit.toggleAttr(this, 'aria-expanded', 'true', 'false');
          var expanded = this.getAttribute('aria-expanded') === 'true';
          var target = this.nextElementSibling;
          this.setAttribute('aria-expanded', !expanded);
          // check aria-hidden status of sibling and toggle
          target.setAttribute('aria-hidden', expanded);
          
  
          if(target.getAttribute('aria-hidden') === 'false') {
            if(!target.parentNode.querySelector('.js-close-btn')) {
              // create close button and inject into content div
              let closeBtn = document.createElement('button');
              closeBtn.classList.add('js-close-btn');
              closeBtn.setAttribute('aria-label', 'Close panel');
              closeBtn.setAttribute('tabindex', '0');
              closeBtn.innerHTML = `
                <svg aria-hidden="true" viewBox="0 0 10 10" style="transform: rotate(45deg)">
                  <rect class="vert" height="8" width="2" y="1" x="4"/>
                  <rect height="2" width="8" y="4" x="1"/>
                </svg>
              `;
              target.parentNode.appendChild(closeBtn);
    
              closeBtn.addEventListener('click', function() {
                btn.click();
                this.remove();
              });
            }
          }
        });

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
    tabbed.classList.add('js-tabs');
    var tablist = tabbed.querySelector('ul');
    var tabs = tablist.querySelectorAll('a');
    var panels = tabbed.querySelectorAll('[id^="section"]'); // The tab switching function
    var parent = tabbed.parentNode;
  
    // show first paragraph (explains tabs)
    parent.querySelector('p').removeAttribute('hidden');

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
  if(document.querySelector('toggle-section')) {
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
            let oldHeading = this.querySelector('h2');

            // reassign oldHeading when media object inside toggle-section
            if (this.querySelector(':first-child').tagName.substr(0,1) === 'H') {
              oldHeading = this.querySelector(':first-child');
            }
            
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
              console.warn('<toggle-section> should contain a heading of an appropriate level.');
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
                // history.pushState(null, null, '#' + this.heading.id);
              }
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
        
        const toggleGroups = document.querySelectorAll('.toggle-group');

        Array.prototype.forEach.call(toggleGroups, tg => {
          let all = tg.querySelectorAll('toggle-section');
          let first = tg.querySelector('toggle-section');
          let btns = buttons.cloneNode(true);

          if(all.length > 1) {
            first.parentNode.insertBefore(btns, first);
          }

          // Place the click on the parent <ul>...
          btns.addEventListener('click', e => {
            // ...then determine which button was the target 
            let expand = e.target.id === 'expand';

            // Iterate over the toggle sections to switch
            // each one's state uniformly
            Array.prototype.forEach.call(all, t => {
              t.setAttribute('open', expand);
            });
          });
        });
      }
    }
  }

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
})();


(function() {
  if(document.querySelector('.gallery')) {
    const galleryList = document.querySelectorAll('.gallery');
    galleryList.forEach(function(gal) {
      const gallery = gal;
      gallery.classList.remove('no-js');
      gallery.setAttribute('role', 'group');
      gallery.setAttribute('aria-label', 'gallery (scroll for more)');
      gallery.setAttribute('tabindex', 0);
      const slides = gallery.querySelectorAll('.gallery > ul > li');
      
      const observerSettings = {
        root: gal,
        rootMargin: '-10px'
      }

      if ('IntersectionObserver' in window) {

        const callback = (slides, observer) => {
          Array.prototype.forEach.call(slides, entry => {
            entry.target.classList.remove('visible');
            if (!entry.intersectionRatio > 0) {
              return;
            }
            entry.target.classList.add('visible');
          })
        }

        const observer = new IntersectionObserver(callback, observerSettings);
        Array.prototype.forEach.call(slides, t => observer.observe(t));
      }

      const controls = document.createElement('ul')
      controls.classList.add('gallery-controls');
      controls.setAttribute('aria-label', 'gallery controls');
      controls.innerHTML = `
      <li>
        <button class="previous" aria-label="previous slide">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
            <path d="M18,2 2,10 18,18" />
          </svg>
        </button>
      </li>
      <li>
        <button class="next" aria-label="next slide">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
            <path d="M2,2 18,10 2,18" />
          </svg>
        </button>
      </li>
      `;

      const instructions = document.getElementById('instructions');
      gallery.parentNode.insertBefore(controls, gallery);
      gallery.parentNode.style.padding = '0 3rem';

      function scrollIt(slideToShow) {
        let scrollPos = Array.prototype.indexOf.call(slides, slideToShow) * (gallery.scrollWidth / slides.length);
        gallery.scrollLeft = scrollPos;
      }

      function showSlide(dir, slides) {
        let visible = gallery.querySelectorAll('.gallery .visible');
        let i = dir === 'previous' ? 0 : 1;

        if (visible.length > 1) {
          scrollIt(visible[i]);
        } else {
          let newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling;
          if (newSlide) {
            scrollIt(newSlide);
          }
        }
      }

      controls.addEventListener('click', function (e) {
        showSlide(e.target.closest('button').classList[0], slides)
      })
    });
  }
})();

(function() {
  
  const wordBank = document.querySelectorAll('.c-wordbank'); //get all wordbank quiz objects

  wordBank.forEach(function(wb) {
    let answerLists = wb.querySelectorAll('select');
    
    answerLists.forEach(function(al) {
      al.addEventListener('change', function() {
        let answerIndex = al.dataset.v2lAi;
        let selectedAnswer = al.querySelector('option:checked').value;
        let parent = al.parentElement;
        
        if (answerIndex === selectedAnswer) {
          parent.classList.remove('incorrect');
          parent.classList.add('correct');
        }
        else {
          parent.classList.remove('correct');
          parent.classList.add('incorrect');
        }
      });
    });
    
  });

})();

// LocalStorage (Time to Think)
(function () {

  

  // TODO: Re-enable later
  if(Toolkit.storageAvailable('localStorage') && 1 === 2) {

    // is there a Time to Think component on the page?
    const timeToThink = document.querySelectorAll('.js-think');
    let tttSummary = document.getElementById('tttSummary');

    if(timeToThink.length > 0 || tttSummary !== null) {
      
      // get this page's dataset from main
      // creates a unique storage key for the page
      const mainData = document.querySelector('main').dataset;
      const courseKey = `${mainData.v2lCourse.replace(' ', '_')}_level${mainData.v2lLevel}`;
      const unitKey = `unit${mainData.v2lUnit}`;
      const sessionKey = `session${mainData.v2lSession}`;
      const pageKey = `page_${parseInt(mainData.v2lPage) + 1}`;
      let storage = window.localStorage;
      
      // check for top-level key or create it
      if(!storage.getItem(courseKey)) {
        storage.setItem(courseKey, "{}");
      }
      // get the object and add to it if we need to
      let pageData = JSON.parse(storage.getItem(courseKey));

      // does a unitkey exist?
      if(!pageData[unitKey]) {
        pageData[unitKey] = {};
        pageData[unitKey][sessionKey] = {};
      }

      if(!pageData[unitKey][sessionKey]) {
        pageData[unitKey][sessionKey] = {};
      }
      
      Array.prototype.forEach.call(timeToThink, (think, i) => {
        if(!pageData[unitKey][sessionKey][pageKey]) {
          pageData[unitKey][sessionKey][pageKey] = {};
        }

        let saveBtn = think.nextElementSibling;
        let keyName = `ttt_${i}`;
        let tttText = pageData[unitKey][sessionKey][pageKey][keyName];

        if(tttText) {
          think.value = tttText;
        }

        think.addEventListener('blur', function() {
          if(think.value !== null) {
            pageData[unitKey][sessionKey][pageKey][keyName] = think.value;      
            storage.setItem(courseKey, JSON.stringify(pageData));
          }
        });

        saveBtn.addEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      
      if(tttSummary !== null) {
        let summaryObj = pageData[unitKey][sessionKey];

        const pageDataArr = Object.entries(summaryObj);
        let summaryText = "";

        for(const [page, tttdata] of pageDataArr) {
          summaryText += `${page.replace('_', ' ')}:\n\n${Object.values(tttdata).toString()}\n\n**************\n\n`;
        }
        
        tttSummary.value = summaryText;
      }

    }
  }
})();

// quick quiz navigation
(function() {
  
  const quizzes = document.querySelectorAll('.c-quiz:not(#formQuiz)');

  if(quizzes.length > 0) {

    let totalScore = 0;

    function calcScore(question) {
      if(question === "true") {
        totalScore++;
      }
    }

    Array.prototype.forEach.call(quizzes, quiz => {
      const questions = quiz.querySelectorAll('fieldset');
      
      quiz.classList.add('js-quiz');
      quiz.querySelector('fieldset').setAttribute('data-v2l-active', true);
      
      Array.prototype.forEach.call(questions, (q, i) => {
        // create and add next button
        const nextBtn = document.createElement('button');
        nextBtn.disabled = true;
        var nextBtnText = i !== questions.length - 1 ? 'Next Question' : 'Show My Score';
        nextBtn.appendChild(document.createTextNode(nextBtnText));

        if(questions.length > 1) {
          q.appendChild(nextBtn);
        }

        var answer;
        let questionGroup = q.querySelectorAll('input');

        questionGroup.forEach(q => {
          q.addEventListener('click', () => {
            // e.preventDefault();
            answer = q;           
            nextBtn.disabled = false;

            questionGroup.forEach(qtn => {
              qtn.disabled = true;
            });

            q.disabled = false;
          });
        });
        
        // attach click handler to control moving through quiz
        nextBtn.addEventListener('click', e => {
          e.preventDefault();
          calcScore(answer.nextElementSibling.dataset.v2lCorrect);
          e.target.disabled = true;

          if(i !== questions.length - 1) {
            q.removeAttribute('data-v2l-active');
            q.nextElementSibling.setAttribute('data-v2l-active', true);
            
          }
          else {
            const resultPanel = document.createElement('div');
            resultPanel.classList.add('c-quiz__result');
            resultPanel.setAttribute('style', 'display: none');
            q.appendChild(resultPanel);
            var panelText = totalScore === questions.length ? `<p><strong>Congratulations!</strong> You scored ${totalScore} out of ${questions.length}` :  `<p>You have scored ${totalScore} out of ${questions.length}</p><p><button>Try again?</button></p>`;
            resultPanel.innerHTML = panelText;
            resultPanel.removeAttribute('style');

            let retryBtn = resultPanel.querySelector('button');
            retryBtn.addEventListener('click', e => {
              e.preventDefault();
              q.removeAttribute('data-v2l-active');
              questions[0].setAttribute('data-v2l-active', true);
              totalScore = 0;
              document.querySelector('.c-quiz__result').remove();
              quiz.querySelectorAll('input').forEach(input => {
                input.disabled = false;
                input.checked = false;
              });
            });
          }

        });
      });
    });
  }

  // End of unit quizzes
  if(document.getElementById('formQuiz')) {
    $('#formQuiz').on('invalid-form.validate', function () {
        $(this).addClass('js-form-error');
    });
  }
})();
  
// Mac/PC toggle switch
(function(){

  // disable for now 
  return;

  // check we're in IT?
  const course = document.getElementById('main').dataset.v2lTags;
  
  // don't go any further if we're not in IT or localStorage isn't available
  if(course !== 'it' || !Toolkit.storageAvailable('localStorage')) {
    return false;
  }

  const toggleSwitch = `
        <section>
          <h2 id='formTitle'>Choose your operating system</h2>
          <p>
            You can choose to view PC or Mac-specific videos and course content.
          </p>
          <form action="" id="switcher">
            <fieldset>
              <legend>Mac or PC?</legend>
              <div class="c-toggle-btn" role="presentation">
                <div role="presentation">
                  <input type="radio" name="switcher" value="pc" id="switcher_pc" aria-label="PC" checked> <label for="switcher_pc" role="presentation"><b role="presentation">PC</b></label>
                </div>
                <div role="presentation">
                  <input type="radio" name="switcher" value="mac" id="switcher_mac" aria-label="Mac"> <label for="switcher_mac" role="presentation"><b role="presentation">Mac</b></label>
                </div>
              </div>
              <input type="checkbox" name="switcher_pref" id="switcher_pref" checked> <label for="switcher_pref"> Remember my preference</label>
              <button>Submit preference</button>
            </fieldset>
          </form>
        <section>
      `;
      
  let storage = window.localStorage;
  const switchKey = "hello-im-a-mac";  
  const videos = document.querySelectorAll('[src$=".mp4"]');
  let baseVidSrc = [];

  // get the base file name before modding 
  // TODO: THIS WON'T WORK IF DEFAULT IS _pc!!
  videos.forEach(function(video) {
    baseVidSrc.push(video.src.split('.')[0]);
  });
  
  // check for top-level key or create it
  if(!storage.getItem(switchKey)) {
    // show the Mac/PC toggle after the baner
    const banner = document.querySelector('.c-banner');
    banner.insertAdjacentHTML('afterend', toggleSwitch);

    // handle form submission
    const switchForm = document.getElementById('switcher');

    switchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      new FormData(switchForm);
    });

    switchForm.addEventListener('formdata', (e) => {
      const data = e.formData;
      const save = data.get('switcher_pref');
      const macOrPc = data.get('switcher');
      
      urlSwitch(macOrPc);

      if(save === 'on') {
        storage.setItem(switchKey, data.get('switcher'));
      }
      else {
        storage.removeItem(switchKey);
      }
    });
  }
  else {
    urlSwitch(storage.getItem(switchKey));
  }
      
  
  
  function urlSwitch(urlMod) {
    videos.forEach(function(video, index) {
      
      
      video.src = `${baseVidSrc[index]}_${urlMod}.${video.src.split('.')[1]}`;
    });
  }

  // storage.removeItem(switchKey); // DEBUG!!!!
})();

// Overlay for activities 
(function (){

  // Requirements:
  // Get activity URL

  // Find and add trigger to PDF links
  document.querySelectorAll('a[href$=".pdf"]').forEach(pdf => {
    pdf.setAttribute('data-v2l-activity', true);
  });

  document.querySelectorAll('[data-v2l-activity').forEach(function(anchor){
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      const inertLoaded = () => {
        const scripts = document.querySelectorAll('head > script');
        scripts.forEach(script => {
          if(script.src.indexOf('/js/inert.js') > 0) {
            return true;
          }
        });
        return false;
      };

      

      // load the inert polyfill (if needed)
      if(!inertLoaded) {
        const inertPoly = document.createElement("script");
        inertPoly.src = "/js/inert.js";
        document.head.appendChild(inertPoly);
      }

      let activeUrl = anchor.href;
      const body = document.querySelector('body');
      
      // get the section's h2 to label the overlay
      
      let label;

      if(anchor.innerText == '') {
        let parentNode = anchor.parentElement.tagName === 'SECTION' ? anchor.parentElement : anchor.parentElement.parentElement;
        label = parentNode.querySelector('h2').innerText;
      }
      else {
        label = anchor.innerText;
      }
            
      body.dataset.v2lOverlay = true;

      const overlay = document.createElement('div');
      const iframe = document.createElement('iframe');
      const closeBtn = document.createElement('button');

      closeBtn.addEventListener('click', closeModal);
      
      overlay.addEventListener('keydown', function(e) {
        
        if(e.code == "Escape") {
          e.preventDefault();
          closeModal();
        }
      });

      iframe.addEventListener('keydown', function(e) {
        
        if(e.code == "Escape") {
          e.preventDefault();
          closeModal();
        }
      });

      function closeModal() {
        Array.prototype.forEach.call(elems, elem => {
          elem.removeAttribute('inert');
        });
        
        body.removeChild(overlay);
        body.removeAttribute('data-v2l-overlay');
        anchor.focus();
      }

      closeBtn.innerText = "Close";
      overlay.classList.add('c-overlay');
      iframe.src = activeUrl;
      iframe.width = "90%";
      iframe.height = "70%";
      
      overlay.append(iframe);
      overlay.append(closeBtn);
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-label', label);

      const elems = document.querySelectorAll('body > *');
      Array.prototype.forEach.call(elems, elem => {
        elem.setAttribute('inert', 'inert');
        
        
      });


      body.append(overlay);
      // overlay.querySelector('button').focus();
    });

  });
  
  // disable default behaviour

  // Load activity code (iframe?)
  // Append overlay to DOM
  // disable page behind
  // dismiss with button and Esc
  

   

})();