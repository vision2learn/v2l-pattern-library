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