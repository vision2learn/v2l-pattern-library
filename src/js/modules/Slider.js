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