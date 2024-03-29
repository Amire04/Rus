var myQuestions = [
  {
    question: "Кто автор Цитаты? “Не сидите и не ждите, что возможности сами появятся. Вставайте и создавайте их.”",
    answers: {
      a: "C.Дж. Уокер",
      b: "Илон Маск",
      c: "Дхирубхай Амбани",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Кто автор Цитаты? “Если вы не строите свою мечту, кто-то другой наймёт вас, чтобы помочь построить свою собственную”",
    answers: {
      a: "Шерил Сэндберг",
      b: "C.Дж. Уокер",
      c: "Дхирубхай Амбани",
    },
    correctAnswer: "c",
  },
  {
    question: "Кто автор Цитаты? “Что бы вы сделали, если бы не боялись?” ",
    answers: {
      a: "Дхирубхай Амбани",
      b: "Шерил Сэндберг",
      c: "C.Дж. Уокер",
    },
    correctAnswer: "b",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }
    if (numCorrect === 3) {
      alert(
        "Вы отгадали всех авторов крылатых фраз, Вы-гений. Нажмите ОК что бы продолжить "
      );
    }
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
