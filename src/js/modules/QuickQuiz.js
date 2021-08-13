class Quiz {
  constructor(quiz) {
    this.quiz = quiz;
    this.quizData = {
      totalScore: 0,
      fieldsetID: 0,
      maxScore: quiz.querySelectorAll('[data-v2l-correct="true"]').length,
      totalQuestions: quiz.querySelectorAll('fieldset').length,
      questions: quiz.querySelectorAll('fieldset'),
      multichoice: quiz.dataset.v2lMcquiz ? true : false
    };
  }

  answerCount = () => {
    let answers = [];
    this.quizData.questions.forEach((question, i) => {
      answers[i] = {
        total: question.querySelectorAll('.c-quiz__answer').length, 
        correct: question.querySelectorAll('[data-v2l-correct="true"]').length
      };
    });
    return answers;
  }

  updateScore = () => {
    ++this.quizData.totalScore;
  }

  nextBtn = (question, isFinal) => {
    const nextBtn = document.createElement('button');
    const nextBtnText = isFinal ? 'Show My Score' : 'Next Question';
    nextBtn.disabled = (!this.quizData.multichoice) // true;
    nextBtn.appendChild(document.createTextNode(nextBtnText));
    nextBtn.addEventListener('click', (e) => this.nextClick(e))

    if(this.quizData.totalQuestions > 1) {
      question.appendChild(nextBtn);
    }
    return true;
  }

  nextClick = (e) => {
    e.preventDefault();
    
    if(this.quizData.multichoice) {
      this.multichoiceAnswers();
    }
    
    if(this.quizData.fieldsetID < this.quizData.totalQuestions - 1) {
      this.quizData.questions[this.quizData.fieldsetID].removeAttribute('data-v2l-active');
      ++this.quizData.fieldsetID;
      this.quizData.questions[this.quizData.fieldsetID].setAttribute('data-v2l-active', true);
    }
    else {
      const resultPanel = document.createElement('div');
      resultPanel.classList.add('c-quiz__result');
      resultPanel.setAttribute('style', 'display: none');
      this.quizData.questions[this.quizData.totalQuestions - 1  ].appendChild(resultPanel);
      var panelText = this.quizData.totalScore === this.quizData.totalQuestions ? `<p><strong>Congratulations!</strong> You scored ${this.quizData.totalScore} out of ${this.quizData.totalQuestions}` :  `<p>You have scored ${this.quizData.totalScore} out of ${this.quizData.totalQuestions}</p><p><button>Try again?</button></p>`;
      resultPanel.innerHTML = panelText;
      resultPanel.removeAttribute('style');

      let retryBtn = resultPanel.querySelector('button');
      if(retryBtn) {
        retryBtn.addEventListener('click', e => {
          e.preventDefault();
          this.reset();
        });
      }
    }
  }

  multichoiceAnswers = () => {
    const qGroup = this.quizData.questions[this.quizData.fieldsetID];

    let subScore = 0;
    const totalSelected = qGroup.querySelectorAll('input:checked').length;
    const correctAnswers = this.answerCount()[this.quizData.fieldsetID].correct;
  
    qGroup.querySelectorAll('input:checked').forEach(answer => {
      if(answer.nextElementSibling.dataset.v2lCorrect === 'true') {
        ++subScore;
      }
    });
    
    if(subScore === correctAnswers && totalSelected === correctAnswers) {
      this.updateScore();
    }
  }

  answerClick = (e) => {
    // const qGroupID = e.originalTarget.dataset.v2lQuestiongroup - 1;
    const qGroup = this.quizData.questions[this.quizData.fieldsetID];
    const nextBtn = qGroup.querySelector('button');
    let input = e.originalTarget;
    let correct = input.nextElementSibling.dataset.v2lCorrect;

    qGroup.querySelectorAll('input').forEach(answer => {
      if(answer !== input) {
        answer.disabled = true;
      }
    });

    if(correct === 'true' && nextBtn.disabled) {
      this.updateScore();
      nextBtn.disabled = false;
    }
    
    console.log(this.quizData.totalScore);
  }

  reset = () => {
    this.quizData.totalScore = 0;
    this.quizData.fieldsetID = 0;
    
    this.quizData.questions.forEach(q => {
      q.removeAttribute('data-v2l-active');  
    });

    this.quizData.questions[0].setAttribute('data-v2l-active', true);
    this.quiz.querySelector('.c-quiz__result').remove();

    this.quiz.querySelectorAll('input').forEach(input => {
      input.disabled = false;
      input.checked = false;
    });
  }

  init = () => {
    this.quiz.classList.add('js-quiz');
    this.quizData.questions[0].setAttribute('data-v2l-active', true);
    
    this.quizData.questions.forEach((q, i) => {
      this.nextBtn(q, i === this.quizData.totalQuestions - 1);
    });

    if(!this.quizData.multichoice) {
      this.quizData.questions.forEach(q => {
        q.querySelectorAll('input').forEach( input => input.addEventListener('click', (e) => this.answerClick(e)));
      });
    }
  }
}

// let myQuiz = new Quiz(document.querySelector('.c-quiz:not(#formQuiz)'));

// quick quiz navigation
(function() {
  const quizzes = document.querySelectorAll('.c-quiz:not(#formQuiz)');

  if(quizzes.length > 0) {

    let quizList = [];

    for (const quiz of quizzes) {
      quizList.push(new Quiz(quiz));
    }

    for (const quiz of quizList) {
      quiz.init();
    }
  }

  // End of unit quizzes
  if(document.getElementById('formQuiz')) {
    $('#formQuiz').on('invalid-form.validate', function () {
        $(this).addClass('js-form-error');
    });
  }
})();
