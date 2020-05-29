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
})();