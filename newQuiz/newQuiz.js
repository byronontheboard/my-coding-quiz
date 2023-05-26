var timer = document.getElementById('timer')
var timeLeft = document.getElementById('time-left')

// This is the variable to hold the timer timeout.
var quizTimeout; 

var currentQuestion = document.getElementById('current-question')
var choiceA = document.getElementById('btn0')
var choiceB = document.getElementById('btn1')
var choiceC = document.getElementById('btn2')
var choiceD = document.getElementById('btn3')
var checkAnswer = document.getElementById("check-answer")

var initialInput = document.getElementById("initial-submission")

var finalScore = document.getElementById("score")
var storedScore = document.getElementById("end-score")

var leaderboardList = document.getElementById("leaderboard-list")

// other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

const quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            "quotes",
            "parentheses",
            "curly brackets",
            "square brackets",
        ],
        answer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans", 
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        question:
        "String values must be enclosed within ____ when being assigned to variables.",
        choices: [ 
            "quotes",
            "commas",
            "curly brackets",
            "parentheses",
        ],
        answer: "quotes",
    },
    {
        question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [ 
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log",
        ],
        answer: "console.log",
    },
]

// This is used to reset the number of questions once the quiz is completed by a user.
const initialQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            "quotes",
            "parentheses",
            "curly brackets",
            "square brackets",
        ],
        answer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans", 
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        question:
        "String values must be enclosed within ____ when being assigned to variables.",
        choices: [ 
            "quotes",
            "commas",
            "curly brackets",
            "parentheses",
        ],
        answer: "quotes",
    },
    {
        question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [ 
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log",
        ],
        answer: "console.log",
    },
]

// Timer function.
function startTimer() {
    var duration = 60;

    // This updates the timer display initially.
    timeLeft.textContent = duration;

    // This clears the previous interval if one exists after completing and retaking the quiz under 60 seconds.
    clearInterval(quizTimeout);

    // This updates the timer every second.
    quizTimeout = setInterval(function() {
        duration--;
        timeLeft.textContent = duration;

        if (duration <= 0) {
            clearInterval(quizTimeout);
            displaySummary();
        }
    }, 1000);
    console.log("Timer has started!");

    duration = 60
}

// This will reset the timer every time the 'Quit', 'Leaderboard', or 'Submit' button is clicked so that the quiz resets.
function resetTimer() {
    clearInterval(quizTimeout);
    timeLeft.textContent = 60;
    // startTimer();
}

// This initializes the score variable.
var score = 0

// This function will grab a random question from the array, along with its answer and choices.
function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
}

var randomQuestion = getRandomQuestion(quizQuestions)
currentQuestion.textContent = randomQuestion.question
choiceA.textContent = randomQuestion.choices[0]
choiceB.textContent = randomQuestion.choices[1]
choiceC.textContent = randomQuestion.choices[2]
choiceD.textContent = randomQuestion.choices[3]
checkAnswer.disabled = false

function updateQuestion() {
    if (quizQuestions.length === 0) {
        displaySummary();
        return;
    }

    randomQuestion = getRandomQuestion(quizQuestions);

    // Updates the random questions.
    currentQuestion.textContent = randomQuestion.question;
    choiceA.textContent = randomQuestion.choices[0];
    choiceB.textContent = randomQuestion.choices[1];
    choiceC.textContent = randomQuestion.choices[2];
    choiceD.textContent = randomQuestion.choices[3];
}

function handleChoiceClick(event) {
    var selectedChoice = event.target.textContent;
  
    if (selectedChoice === randomQuestion.answer) {
      score += 100;
    }
  
    finalScore.textContent = score;
  
    var questionIndex = quizQuestions.findIndex(
        (question) => question.question === randomQuestion.question
    );

    // Remove the current question from the array
    quizQuestions.splice(questionIndex, 1);
  
    if (quizQuestions.length > 0) {
      updateQuestion();
    } else {
        displaySummary();
        //This will reset the questions and the timer once the quiz is completed and the user is navigated to the Summary page. 
        resetQuestions();
        resetTimer();
    }
}

// This function is used to reset the array value of questions so that the quiz will populate questions again when taking the quiz again.
function resetQuestions() {
    // Reset the quiz questions array
    quizQuestions.splice(0, quizQuestions.length, ...initialQuestions);

    // Reset the score
    score = 0;
    finalScore.textContent = score;

    // Reset the question index
    questionIndex = 0;
}

function submitScore() {
    var playerName = initialInput.value.trim();
    if (playerName !== "") {
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        var newScore = {
            name: playerName,
            score: storedScore.textContent
        };
        highScores.push(newScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        initialInput.value = "";
    };
    displayLeaderboard();
};

function clearScores() {
    localStorage.removeItem("highScores");
    leaderboardList.innerHTML = "";
}

// Retrieve the stored data from local storage
var leaderboardData = JSON.parse(localStorage.getItem('highScores')) || [];

function leaderboardScore() {

    // Clear the existing leaderboard
    leaderboardList.innerHTML = '';

    // Iterate over the leaderboard data and create <tr> elements with <td> for each entry
    leaderboardData.forEach(function(entry) {
        var nameCell = document.createElement('td');
        nameCell.textContent = entry.name;

        var scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score;

        var row = document.createElement('tr');

        leaderboardList.appendChild(row);

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        
    });
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

    // This clears the interval if the user quits the quiz, that way they aren't navigated to the summary page after the 60 second timer runs out.
    clearInterval(quizTimeout);
    resetTimer();
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

    // This sets the initial score value as '0' in the textContent until the user selects a correct answer that will add '100' points.
    finalScore.textContent = '0';

    // This starts the timer once the 'Play' button is clicked and the quiz is displayed.
    startTimer();
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
    
    // This makes the points scored during the quiz display.
    storedScore.textContent = finalScore.textContent;

    // This clears the timer timeout if it's still running.
    clearInterval(quizTimeout);
    resetTimer();
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

    // This clears the timer timeout if it's still running.
    clearInterval(quizTimeout);
    resetTimer();

    leaderboardScore();
}

// Storing data to local.storage functions.

// function to show high scores

// addEventListeners for Variables
// document.getElementById("play").addEventListener("click", displayQuiz);
playButton.addEventListener("click", function() {
    resetTimer();
    displayQuiz();
    startTimer();
    updateQuestion();
});

submitButton.addEventListener("click", function() {
    submitScore();
});

clearButton.addEventListener("click", function(){
    clearScores();
});

document.getElementById("leaderboard").addEventListener("click", displayLeaderboard);
document.getElementById("quit").addEventListener("click", displayMenu);
document.getElementById("summary-page").addEventListener("click", displaySummary)

choiceA.addEventListener("click", handleChoiceClick);
choiceB.addEventListener("click", handleChoiceClick);
choiceC.addEventListener("click", handleChoiceClick);
choiceD.addEventListener("click", handleChoiceClick);