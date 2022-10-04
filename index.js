var readlineSync = require("readline-sync");

var score = 0

var questions = [
  {
    question: "How many Infinity Stones are there? ",
    answer: "Six",
  },
  {
    question: "Who is Tony Stark’s father? ",
    answer: "Howard Stark",
  },
  {
    question: "Captain America’s shield and Bucky's arm are made of what? ",
    answer: "Vibranium",
  },
  {
    question: "Who was able to pick up Thor’s hammer in Endgame? ",
    answer: "Captain America",
  },
  {
    question: "Black Panther is set in which fictional country? ",
    answer: "Wakanda",
  },
]


function welcome() {
  var userName = readlineSync.question("Enter your name: ")

  console.log("Welcome! " + userName + " To the MARVEL Quiz!")
  console.log("----------------------------------------------")
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!")
    score++;
  } else {
    console.log("wrong!")
    score--;
  }
  console.log("Score: ", score)
  console.log("-------------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer);
  }
  console.log("Your Final Score: ", score)
}


welcome();
game();