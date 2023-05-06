
constructor(title,answer,choice1,choice2) {
  this.title = title;
  this.choices = [answer,choice1,choice2];
  this.answer=answer;
}

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
];

var index;
const timeLength = 60;
const minus = 10;
var secondsLeft = timeLeft;
var quizScore;
var namesScore;

const startQuiz = document.getElementById("start-btn")
const leaderboard = document.getElementById("leaderboard-btn");
const clearLeaderboardButton = document.getElementById("clear-highscores");
const backButton = document.getElementById("return-menu-btn");

// choice-btn = answerbutton)
const choiceButtons = document.getElementById("choice-btn");
// const choiceButtons = document.getElementById("choice-container").children;

const choiceEl = Array(3);
    for (i = 0; i < 3; i++) {
        choiceEl[i] = document.getElementById("choice-btn" + i);
    }

const displayedPage = document.querySelectorAll("main > section")

const timeLeft = document.getElementById("time"); //the span element displaying how much time is left
const questionEl = document.getElementById("question"); //the heading with the text of the question
// const endQuizHeading = document.getElementById("end-quiz-heading");
// const result = document.getElementById("result"); //at the end of the quiz, the span showing how many questions were answered correctly
const yourScore = document.getElementById("quiz-score");
const nameForm = document.getElementById("name-form");
const yourNameEl = document.getElementById("name-scores");
const highscoresEl = document.getElementById("leaderboard-scores"); 

function setTime () {
    // This is the timer function. setTime is called at the start of the quiz and start counting down
}