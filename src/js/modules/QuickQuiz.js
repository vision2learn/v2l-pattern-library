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
        nextBtn.disabled = (!quiz.dataset.v2lMcquiz) // true;
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

            if(!quiz.dataset.v2lMcquiz) {
              questionGroup.forEach(qtn => {
                qtn.disabled = true;
              });
            }

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
            if(retryBtn) {
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
