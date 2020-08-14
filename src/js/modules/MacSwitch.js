// Mac/PC toggle switch
const ContentToggle = (function(){

  const course = document.getElementById('main').dataset.v2lTags;
  const switchKey = "hello-im-a-mac";  
  const videos = document.querySelectorAll('[src$=".mp4"]');
  const interactives = document.querySelectorAll('.c-interactive');
  let toggle = {};
  let storage = document.querySelector('[data-v2l-env=netlify]') ? window.sessionStorage : window.localStorage; // use session storage if we're on netlify platform    
  let baseVidSrc = [];
  let baseIntSrc = [];
  let macOrPc;
  // check we're in IT?

  toggle.init = () => {
    
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
            <div>
              <input type="checkbox" name="switcher_pref" id="switcher_pref" checked> <label for="switcher_pref"> Remember my preference</label>
            </div>
            <button>Submit preference</button>
          </fieldset>
        </form>
      <section>
    `;

    
    if(document.querySelector('[data-v2l-env=netlify]')) {
      // clear any legacy localStorage items on Netlify
      window.localStorage.removeItem(switchKey);
    }

    // get the base file name before modding 
    // TODO: THIS WON'T WORK IF DEFAULT IS _pc!!
    videos.forEach(video => {
      baseVidSrc.push(video.src.substring(0, video.src.indexOf('_pc')));
    });

    interactives.forEach(int => {
      let intJS = int.dataset.v2lInteractive;
      baseIntSrc.push(intJS.substring(0, intJS.indexOf('_pc')));
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
        const data = new FormData(switchForm);
        const save = data.get('switcher_pref');
        macOrPc = data.get('switcher');
        toggle.urlSwitch();

        if(save === 'on') {
          storage.setItem(switchKey, data.get('switcher'));
        }
        else {
          storage.removeItem(switchKey);
        }
        
        switchForm.parentElement.style = "display: none";
      });
    }
    else {
      toggle.urlSwitch();
    }
  } 
  
  toggle.urlSwitch = () => {
    const urlMod = storage.getItem(switchKey) ? storage.getItem(switchKey) : macOrPc;
    let formattedFormat = urlMod === 'mac' ? 'Mac' : 'PC';
    const switchStatement = `<p data-v2l-toggleText="true"><em>You are viewing ${formattedFormat}-specific content. <button onclick="ContentToggle.toggleIt()" style="all: unset; text-decoration: underline; cursor: pointer">Switch to ${urlMod === 'mac' ? 'PC' : 'Mac'} content?</button></em></p>`;
    
    videos.forEach((video, index) => {
      if(baseVidSrc[index] !== '') {
        video.setAttribute('src', `${baseVidSrc[index]}_${urlMod}.mp4`);
        video.parentElement.load();
        video.parentElement.insertAdjacentHTML('beforebegin', switchStatement);
      }
    });

    interactives.forEach((int, index) => {
      if(baseIntSrc[index] !== '') {
        int.dataset.v2lInteractive = `${baseIntSrc[index]}_${urlMod}`;
        // TODO: Make switching work for Interactivities int.insertAdjacentHTML('beforebegin', switchStatement);
      }
    });
  }

  toggle.toggleIt = () => {
    console.log('Test');
    const newKey = storage.getItem(switchKey) === 'mac' ? 'pc' : 'mac';
    storage.setItem(switchKey, newKey);

    document.querySelectorAll('[data-v2l-toggleText]').forEach((text) => {
      text.remove();
    });

    toggle.urlSwitch()
  }

  return toggle;
})();

ContentToggle.init();