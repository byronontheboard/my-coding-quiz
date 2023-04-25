

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
const timeLeft= 60;
const minus = 10;
var secondsLeft = timeLeft;
var quizScore;
var namesScore;

const startQuiz = document.getElementById("start-btn")
const leaderboard = document.getElementById("leaderboard-btn");
const clearLeaderboardButton = document.getElementById("clear-highscores");
const backButton = document.getElementById("return-menu-btn");

// choice-btn = answerbutton)
const choiceButtons = document.getElementById("choice-container")