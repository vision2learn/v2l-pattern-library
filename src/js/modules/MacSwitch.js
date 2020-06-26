// Mac/PC toggle switch
(function(){

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
              <div>
                <input type="checkbox" name="switcher_pref" id="switcher_pref" checked> <label for="switcher_pref"> Remember my preference</label>
              </div>
              <button>Submit preference</button>
            </fieldset>
          </form>
        <section>
      `;
      
  let storage = window.localStorage;
  const switchKey = "hello-im-a-mac";  
  const videos = document.querySelectorAll('[src$=".mp4"]');
  const interactives = document.querySelectorAll('.c-interactive');
  let baseVidSrc = [];
  let baseIntSrc = [];

  // get the base file name before modding 
  // TODO: THIS WON'T WORK IF DEFAULT IS _pc!!
  videos.forEach(function(video) {
    baseVidSrc.push(video.src.substring(0, video.src.indexOf('_pc')));
  });

  interactives.forEach(function(int) {
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
      const macOrPc = data.get('switcher');
      urlSwitch(macOrPc);

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
    urlSwitch(storage.getItem(switchKey));
  }
      
  
  
  function urlSwitch(urlMod) {
    videos.forEach(function(video, index) {
      if(baseVidSrc[index] !== '') {
        video.setAttribute('src', `${baseVidSrc[index]}_${urlMod}.mp4`);
        video.parentElement.load();
      }
    });

    interactives.forEach(function(int, index) {
      int.dataset.v2lInteractive = `${baseIntSrc[index]}_${urlMod}`;
    });
  }

  // storage.removeItem(switchKey); // DEBUG!!!!
})();