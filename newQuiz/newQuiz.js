// Quiz Variables
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('choice-text'))
const scoreText = document.querySelector('#score')
const timerText = document.querySelector('#timer')

let currentQuestion = []
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choice: [
            'strings',
            'booleans',
            'alerts',
            'numbers'
        ],
        answer: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        choice: [
            'quotes',
            'parentheses',
            'curly brackets',
            'square brackets',
        ],
        answer: 'parentheses',
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choice: [
            'numbers and strings',
            'other arrays',
            'booleans', 
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        question:
            'String values must be enclosed within ____ when being assigned to variables.',
        choice: [ 
            'quotes',
            'commas',
            'curly brackets',
            'parentheses',
        ],
        answer: 'quotes',
    },
    {
        question:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice: [ 
            'JavaScript',
            'terminal / bash',
            'for loops',
            'console.log',
        ],
        answer: 'console.log',
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return displaySummary()
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.
    })
}

// Display: flex/none Functions for Menu, Quiz, Summary, & Leaderboard.
var playButton = document.getElementById("play")
var submitButton = document.getElementById("submit")
var leaderboardButton = document.getElementById("leaderboard")
var clearButton = document.getElementById("clear")
var quitButton = document.getElementById("quit")

var header = document.getElementById("header")
var leaderboardHeader = document.getElementById("leaderboard-header")
var summaryHeader = document.getElementById("summary-header")
var scoreTimer = document.getElementById("hud")

var quiz = document.getElementById("quiz-section")
var leaderboard = document.getElementById("leaderboard-section")
var summary = document.getElementById("summary-section")

function displayMenu() {
    // Play button is displayed.
    playButton.classList.remove("none")
    playButton.classList.add("flex")

    // Submit button is hidden.
    submitButton.classList.remove("flex")
    submitButton.classList.add("none")

    // Leaderboard button is displayed.
    leaderboardButton.classList.remove("none")
    leaderboardButton.classList.add("flex")

    // Clear button is hidden.
    clearButton.classList.remove("flex")
    clearButton.classList.add("none")
    
    // Quit button is hidden.
    quitButton.classList.remove("flex")
    quitButton.classList.add("none")

    // Header & Instructions are displayed.
    header.classList.remove("none")
    header.classList.add("flex")

    // Score & Timer section are hidden.
    scoreTimer.classList.remove("flex")
    scoreTimer.classList.add("none")

    // Quiz section is hidden.
    quiz.classList.remove("flex")
    quiz.classList.add("none")

    // Leaderboard header is hidden.
    leaderboardHeader.classList.remove("flex")
    leaderboardHeader.classList.add("none")

    // Leaderboard section is hidden.
    leaderboard.classList.remove("flex")
    leaderboard.classList.add("none")
    
    // Summary section is hidden.
    summaryHeader.classList.remove("flex")
    summaryHeader.classList.add("none")
    
    // Summary section is hidden.
    summary.classList.remove("flex")
    summary.classList.add("none")
} 

function displayQuiz() {
    // Play button is hidden.
    playButton.classList.remove("flex")
    playButton.classList.add("none")

    // Submit button is hidden.
    submitButton.classList.remove("flex")
    submitButton.classList.add("none")

    // Leaderboard button is hidden.
    leaderboardButton.classList.remove("flex")
    leaderboardButton.classList.add("none")

    // Clear button is hidden.
    clearButton.classList.remove("flex")
    clearButton.classList.add("none")

    // Quit button is displayed.
    quitButton.classList.remove("none")
    quitButton.classList.add("flex")

    // Score & Timer section are displayed.
    scoreTimer.classList.remove("none")
    scoreTimer.classList.add("flex")

    // Header & Instructions are hidden.
    header.classList.remove("flex")
    header.classList.add("none")

    // Quiz section is displayed.
    quiz.classList.remove("none")
    quiz.classList.add("flex")
    
    // Leaderboard header is hidden.
    leaderboardHeader.classList.remove("flex")
    leaderboardHeader.classList.add("none")

    // Leaderboard section is hidden.
    leaderboard.classList.remove("flex")
    leaderboard.classList.add("none")

    // Summary section is hidden.
    summaryHeader.classList.remove("flex")
    summaryHeader.classList.add("none")

    // Summary section is hidden.
    summary.classList.remove("flex");
    summary.classList.add("none");
} 

function displaySummary() {
    // Play button is hidden.
    playButton.classList.remove("flex")
    playButton.classList.add("none")

    // Submit button is displayed.
    submitButton.classList.remove("none")
    submitButton.classList.add("flex")

    // Leaderboard button is displayed.
    leaderboardButton.classList.remove("none")
    leaderboardButton.classList.add("flex")

    // Clear button is hidden.
    clearButton.classList.remove("flex")
    clearButton.classList.add("none")

    // Quit button is displayed.
    quitButton.classList.remove("none")
    quitButton.classList.add("flex")
    
    // Header & Instructions are hidden.
    header.classList.remove("flex")
    header.classList.add("none")
    
    // Score & Timer section are hidden.
    scoreTimer.classList.remove("flex")
    scoreTimer.classList.add("none")

    // Quiz section is hidden.
    quiz.classList.remove("flex")
    quiz.classList.add("none")
    
    // Leaderboard header is hidden.
    leaderboardHeader.classList.remove("flex")
    leaderboardHeader.classList.add("none")

    // Leaderboard section is hidden.
    leaderboard.classList.remove("flex")
    leaderboard.classList.add("none")

    // Summary header is displayed 
    summaryHeader.classList.remove("none")
    summaryHeader.classList.add("flex")

    // Summary page is displayed.
    summary.classList.remove("none")
    summary.classList.add("flex")
}

function displayLeaderboard() {
    // Play button is hidden.
    playButton.classList.remove("flex")
    playButton.classList.add("none")
    
    // Submit button is hidden.
    submitButton.classList.remove("flex")
    submitButton.classList.add("none")

    // Leaderboard button is hidden.
    leaderboardButton.classList.remove("flex")
    leaderboardButton.classList.add("none")

    // Clear button is displayed.
    clearButton.classList.remove("none")
    clearButton.classList.add("flex")

    // Quit button is displayed.
    quitButton.classList.remove("none")
    quitButton.classList.add("flex")

    // Header & Instructions are hidden.
    header.classList.remove("flex")
    header.classList.add("none")

    // Score & Timer section are hidden.
    scoreTimer.classList.remove("flex")
    scoreTimer.classList.add("none")
    
    // Quiz section is hidden.
    quiz.classList.remove("flex")
    quiz.classList.add("none")
    
    // Leaderboard header is displayed.
    leaderboardHeader.classList.remove("none")
    leaderboardHeader.classList.add("flex")

    // Leaderboard section is displayed.
    leaderboard.classList.remove("none")
    leaderboard.classList.add("flex")

    // Summary section is hidden.
    summaryHeader.classList.remove("flex")
    summaryHeader.classList.add("none")

    // Summary section is hidden.
    summary.classList.remove("flex")
    summary.classList.add("none")
}

// Storing data to local.storage functions.

  
// addEventListeners for Variables
document.getElementById("play").addEventListener("click", displayQuiz);
document.getElementById("leaderboard").addEventListener("click", displayLeaderboard);
document.getElementById("quit").addEventListener("click", displayMenu);
document.getElementById("summary-page").addEventListener("click", displaySummary)