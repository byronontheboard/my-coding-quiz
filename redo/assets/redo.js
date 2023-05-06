
let startQuiz = document.getElementById('start-btn')
let quitQuiz = document.getElementById('return-btn')
let checkLeaderboard = document.getElementById('leaderboard-btn')
let clearScore = document.getElementById('clear-btn')

let timer = document.getElementById('timer')
let timeLeft = document.getElementById('time-left')

let quizSummary = document.getElementById('summary')
let finalScore = document.getElementById('score')
// initialInput
let enterName = document.getElementById('name-input')
let submitScore = document.getElementById('submit-btn')


// currentQuestion
let questionTitle = document.getElementById('question-title')
let choiceA = document.getElementById('choice-a')
let choiceB = document.getElementById('choice-b')
let choiceC = document.getElementById('choice-c') 
let choiceD = document.getElementById('choice-d')
let checkAnswer = document.getElementById('answer-check')



let questions = [
    {
      question: 'Commonly used data types DO NOT include:',

      choicesA: 'strings',
      choicesB: 'booleans',
      choicesC: 'alerts',
      choicesD: 'numbers',

      answer: 'alerts',
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',

      choicesA: 'quotes',
      choicesB: 'curly brackets',
      choicesC: 'parentheses',
      choicesD: 'square brackets',

      answer: 'parentheses',
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',

      choicesA: 'numbers and strings',
      choicesB: 'other arrays',
      choicesC: 'booleans',
      choicesD: 'all of the above',

      answer: 'all of the above',
    },
    {
      question:
        'String values must be enclosed within ____ when being assigned to variables.',

      choicesA: 'commas',
      choicesB: 'curly brackets',
      choicesC: 'quotes',
      choicesD: 'parentheses',

      answer: 'quotes',
    },
    {
      question:
        'A very useful tool used during development and debugging for printing content to the debugger is:',

      choicesA: 'JavaScript',
      choicesB: 'terminal / bash',
      choicesC: 'for loops',
      choicesD: 'console.log',

      answer: 'console.log',
    },
];

