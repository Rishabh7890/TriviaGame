$(document).ready(function () {

  var timeLeft = 10;
  $(".hidden").hide();

  // create an array of 10 objects containing the each question, the possible answer choices and the correct choice. 
  var questionBank = [{
      question: "Which of the following hall of famers won the most championships?",
      choices: ["Michael Jordan", "Kobe Bryant", "Bill Russell"],
      correct: "Bill Russell"
    },

    {
      question: "Who was the 2007 Regular Season MVP?",
      choices: ["Dwyane Wade", "Shaquille O'Neal", "Dirk Nowitzki"],
      correct: "Dirk Nowitzki"
    },
    {
      question: "Which team won the 2004 NBA Championship?",
      choices: ["Detroit Pistons", "Los Angeles Lakers", "San Antonio Spurs"],
      correct: "Stampy"
    },
    {
      question: "In what year did the Miami Heat's Big Three come together?",
      choices: ["2005", "2010", "2012"],
      correct: "2010"
    },
    {
      question: "Who scored 81 points against the Toronto Raptors?",
      choices: ["Michael Jordan", "Wilt Chamberlain", "Kobe Bryant"],
      correct: "Kobe Bryant"
    },
    {
      question: "Who was the first pick in the 2003 NBA Draft?",
      choices: ["Chris Bosh", "LeBron James", "Carmelo Anthony"],
      correct: "LeBron James"
    },
    {
      question: "What team did Allen Iverson get traded to from Philadelphia?",
      choices: ["Denver Nuggets", "Indiana Pacers", "Memphis Grizzlies"],
      correct: "Denver Nuggets"
    },
    {
      question: "Who was the first player since Oscar Robertson to average a triple-double over the course of an entire season?",
      choices: ["Kevin Durant", "Russell Westbrook", "LeBron James"],
      correct: "Pretzel Wagon"
    },
    {
      question: "What number did Tracy McGrady wear on the Orlando Magic?",
      choices: ["23", "6", "1"],
      correct: "1"
    },
    {
      question: "What year was Michael Jordan drafted?",
      choices: ["1979", "1987", "1984"],
      correct: "1984"
    }
  ]

  // start the game when user clicks on Start button
  $("#start-quiz").on("click", startQuiz);



  function startQuiz() {
    $("#timer").text("Time Left: " + timeLeft);
    setInterval(countDown, 1000);
    $("#instruct-page").hide();
    revealQuestions();
  }

  function countDown() {
    timeLeft--;
    $("#timer").text("Time Left: " + timeLeft);
    if (timeLeft === 0) {
      endQuiz();
      $("#timer").empty();
    }
  }

  function revealQuestions() {
    var quizQuestions = $("#quiz-questions");
    quizQuestions.append("<h4>Here are the Questions! See if you can get them all right!</h4>");

    for (var i = 0; i < questionBank.length; i++) {

      quizQuestions.append("<div id='question'>" + questionBank[i].question + "</div>");

      var choiceOne = questionBank[i].choices[0];
      var choiceTwo = questionBank[i].choices[1];
      var choiceThree = questionBank[i].choices[2];

      quizQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choiceOne + '</label></div>');
      quizQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choiceTwo + '</label></div>');
      quizQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choiceThree + '</label></div>');
    }

    var finishedButton = '<button class ="btn btn-success" id="finished-button" type="submit">Finished!</button>';
    quizQuestions.append(finishedButton);
    $("#finished-button").on("click", endQuiz);
  }

  function endQuiz() {
    clearInterval();
    checkAnswers();
    showResults();
  }

  function checkAnswers() {
    var userChoice;
    var correctChoice;
    var numberCorrect = 0;
    var numberWrong = 0;
    var numberBlank = 0;

    for (var i = 0; i < questionBank.length; i++) {
      correctChoice = questionBank[i].correct;
      userChoice = $('input[id=radio' + i + ']:checked + label').text();

      if (userChoice === correctChoice) {
        numberCorrect++;
      } else if (userChoice !== correctChoice) {
        numberWrong++;
      } else if (userChoice === "") {
        numberBlank++;
      }
    }

  }

  function showResults(numberCorrect, numberWrong, numberBlank) {
    $("#results-page").show();
    $("#quiz-questions").empty();
    $("#timer").empty();
    $("#number-correct").text("Number of Correct Answers: " + numberCorrect);
    $("#number-wrong").text("Number of Wrong Answers: " + numberWrong);
    $("#number-blank").text("Number of Questions Left Blank: " + numberBlank);
  }

  showResults(numberCorrect, numberWrong, numberBlank);
  //Don't Delete!
})

// Errors with app
 
// Questions coming up on wrong place supposed to go where instructions were before using hide()
// results are showing up as undefined 
// After pressing begin quiz button after ending a quiz questions show up again but no timer and results from previous quiz stay on screen 