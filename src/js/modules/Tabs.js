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