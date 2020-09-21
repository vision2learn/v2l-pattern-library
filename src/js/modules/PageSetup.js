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
    },
    tableWrapper: function() {
      // need to wrap tables in an element to handle overflow on narrow screens
      document.querySelectorAll('table').forEach(table => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('l-tablewrapper');
        let theTable = table.parentNode.replaceChild(wrapper, table);
        wrapper.appendChild(theTable);
      });
    }
  };

  page.initShowHide();
  page.tableWrapper();
})();