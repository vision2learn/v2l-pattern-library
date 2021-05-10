// Mac/PC toggle switch
// TODO: Fix handling of non-switchable videos/interactions
const ContentToggle = (() => {

  const course = document.querySelector('main').dataset.v2lTags; //document.getElementById('main').dataset.v2lTags;
  const switchKey = "hello-im-a-mac";  
  const videos = document.querySelectorAll('[src$=".mp4"]');
  const interactives = document.querySelectorAll('.c-interactive');
  let toggle = {};
  let storage = document.querySelector('[data-v2l-env=netlify]') ? window.sessionStorage : window.localStorage; // use session storage if we're on netlify platform    
  let baseVidSrc = [];
  let baseIntSrc = [];
  // check we're in IT?

  toggle.init = () => {
    // don't go any further if we're not in IT or localStorage isn't available
    if(!course.startsWith('it') || !Toolkit.storageAvailable('localStorage')) {
      return false;
    }
    
    if(document.querySelector('[data-v2l-env=netlify]')) {
      // clear any legacy localStorage items on Netlify
      window.localStorage.removeItem(switchKey);
    }

    // get the base file name before modding 
    // TODO: Is this unnecessary?
    videos.forEach(video => {
      let url = new URL(video.src);
      let basename = url.pathname.substring(0, url.pathname.indexOf('_pc'));
      if(url.pathname.indexOf('_pc') > -1) {
        baseVidSrc.push({
          vidPath: basename,
          vttPath: basename.replace('/videos/', '/videos/captions/vtt/')
        });
      }
    });

    interactives.forEach(int => {
      let intJS = int.dataset.v2lInteractive;
      if(intJS.indexOf('_pc') > -1) {
        baseIntSrc.push(intJS.substring(0, intJS.indexOf('_pc')));
      }
    });

    // check for top-level key and set to pc if not present
    if(!storage.getItem(switchKey)) {
      storage.setItem(switchKey, 'pc');
      toggle.addButton();
    }
    else {
      toggle.urlSwitch();
    }
  }

  toggle.addButton = () => {
    let formattedFormat = storage.getItem(switchKey) === 'mac' ? 'Mac' : 'PC';
    const switchStatement = `<p data-v2l-toggleText="true"><em>You are viewing ${formattedFormat}-specific content. <button onclick="ContentToggle.toggleIt()" style="all: unset; text-decoration: underline; cursor: pointer">Switch to ${storage.getItem(switchKey) === 'mac' ? 'PC' : 'Mac'} content?</button></em></p>`;

    videos.forEach((video, index) => {
      if(baseVidSrc[index]) {
        video.parentElement.parentElement.insertAdjacentHTML('beforebegin', switchStatement);
      }
    });

    interactives.forEach((int, index) => {
      if(baseIntSrc[index]) {
        int.insertAdjacentHTML('beforebegin', switchStatement);
      }
    });
  }
  
  toggle.urlSwitch = () => {
    const urlMod = storage.getItem(switchKey);
    
    
    videos.forEach((video, index) => {
      if(baseVidSrc[index]) {
        video.setAttribute('src', `${baseVidSrc[index].vidPath}_${urlMod}.mp4`);
        // if there's an alternate subtitle track too, we need to switch to it
        if(video.parentElement.dataset.multi) {
          // console.log('Multi vid');
          const oldTrack = video.parentElement.querySelector('track');
          oldTrack.remove();
          const newTrack = document.createElement('track');
          newTrack.src = `${baseVidSrc[index].vttPath}_${urlMod}.vtt`;          
          newTrack.label = `English`;
          newTrack.kind = 'captions';
          newTrack.srclang = 'en';
          video.parentElement.parentElement.setAttribute('data-v2l-format', urlMod);
          video.parentElement.appendChild(newTrack);
        }

        video.parentElement.load();
      }
      
    });

    interactives.forEach((int, index) => {
      if(baseIntSrc[index]) {
        let intBtn = document.createElement("button");
        intBtn.setAttribute('data-v2l-loadbtn', true);
        intBtn.innerText = "Begin Activity";
        int.dataset.v2lInteractive = `${baseIntSrc[index]}_${urlMod}`;
        int.replaceChild(intBtn, int.firstElementChild);
      }
    });
    V2lPage.attachHandlers();
    toggle.addButton();
  }

  toggle.toggleIt = () => {
    const newKey = storage.getItem(switchKey) === 'mac' ? 'pc' : 'mac';
    storage.setItem(switchKey, newKey);

    document.querySelectorAll('[data-v2l-toggleText]').forEach((text) => {
      text.remove();
    });

    toggle.urlSwitch()
  }

  toggle.vids = videos;
  toggle.ints = interactives;
  toggle.baseIntSrc = baseIntSrc;
  toggle.baseVidSrc = baseVidSrc;
  return toggle;
})();

ContentToggle.init();
