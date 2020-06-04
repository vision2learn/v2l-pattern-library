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