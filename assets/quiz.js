var question = document.querySelector('#question');
var choiceA = document.getElementById('#choice-1');
var choiceB = document.getElementById('choice-2');
var choiceC = document.getElementById('choice-3');
var choiceD = document.getElementById('choice-4');
var checkAnswer = document.getElementById('#answer-check');

var startQuiz = document.querySelector('#start-button')

var scoreText = document.querySelector('#score');
var timeText = document.querySelector('#time-remaining');
var leaderboards = document.querySelector('#leaderboard-button')
var summary = document.getElementById('#summary')
var finalScore = document.getElementById("final-score");

var summary = document.getElementById("summary");
var submitButton = document.getElementById("submit-button");
var nameInput = document.getElementById("name-input");
// var everything = document.getElementById("everything");

var currentQuestion = {}
var correctAnswer = {}
var score = 0
var questionCounter = 0
var countdown = 100


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

startQuiz.addEventListener("click", quiz);

function quiz(){
    if()

};
