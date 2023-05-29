// Setting initial variables for the application.
var timer = document.getElementById('timer')
var timeLeft = document.getElementById('time-left')

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

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

// This array is the questions/choices that will be randomized for the quiz by getRandomQuestion().
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

// This is used to reset the number of questions once the quiz is completed by a user(that way the amount of questions' index is not '0', and the user will be able to retake the quiz).
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

// Timer function that will begin the countdown at a 'duration' of 60 seconds when the 'Play' button is clicked(initiating the displayQuiz() function).
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

        // Once the 'duration' is <= 10, the 'less-than-ten' and 'blink' class will be added via JavaScript(this will make the current time left flash red every second).
        if (duration <= 10 && duration > 0) {
            timeLeft.classList.add("less-than-ten");
            timeLeft.classList.add("blink");
        } else {
            // Once the 'duration' is = 0, the 'less-than-ten' and 'blink' class will then be removed from the class list to reset the timer to it's default appearance.
            timeLeft.classList.remove("less-than-ten");
            timeLeft.classList.remove("blink");
        }

        // This will stop the timer from going into negatives, and stopping once the 'duration' is = to 0.
        // Additionally, the displaySummary() will be activated, thus displaying the Summary page with the user's final score.
        if (duration <= 0) {
            clearInterval(quizTimeout);
            displaySummary();
        }
    }, 1000);

    // This sets the 'duration' back to 60 once just in case the user completes the quiz and retakes it in under 60 seconds.
    duration = 60
}

// This will reset the timer every time the 'Quit', 'Leaderboard', or 'Submit' button is clicked so that the quiz resets.
function resetTimer() {
    clearInterval(quizTimeout);
    timeLeft.textContent = 60;
}

// This initializes the score variable.
var score = 0

// This function will grab a random question from the array, along with its answer and choices.
function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
}

// Variables for the 'random' question and their 'choices' that will be available.
var randomQuestion = getRandomQuestion(quizQuestions)
currentQuestion.textContent = randomQuestion.question
choiceA.textContent = randomQuestion.choices[0]
choiceB.textContent = randomQuestion.choices[1]
choiceC.textContent = randomQuestion.choices[2]
choiceD.textContent = randomQuestion.choices[3]
checkAnswer.disabled = false

// If their are no more questions available(each of the 5 questions will cycle through only once after 'clicking' a 'choice') then displaySummary() will activate and navigate the user to the Summary page.
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

// This will handle when the user 'clicks' a 'choice' as their answer for a question. 
// After the user 'clicks' a 'choice', this function will determine if the 'choice' is = to the 'answer' for 
function handleChoiceClick(event) {
    var selectedChoice = event.target.textContent;
    // var  = document.getElementById("everything")

    if (selectedChoice === randomQuestion.answer) {
        // When the user choice matches the answer from the randomQuestion, 100 points will be added.
        score += 1000000;

        // When the user choice matches the answer from the randomQuestion, the two classes will be added to currentQuestion that will make the text flash green.
        currentQuestion.classList.add("correct")
        currentQuestion.classList.add("fast-blink")
        
        // This will remove the two classes added so that they are only active for 1 second(1000ms), after that they are removed.
        setTimeout(function() {
            currentQuestion.classList.remove("correct")
            currentQuestion.classList.remove("fast-blink")
        }, 1000);

    } else {
        // When the user choice does not match the answer from the randomQuestion, 25 points will be subtracted.
        score -= 25;

        // When the user choice matches the answer from the randomQuestion, the two classes will be added to currentQuestion that will make the text flash red.
        currentQuestion.classList.add("incorrect")
        currentQuestion.classList.add("fast-blink")

        // This will remove the two classes added so that they are only active for 1 second(1000ms), after that they are removed.
        setTimeout(function() {
            currentQuestion.classList.remove("incorrect")
            currentQuestion.classList.remove("fast-blink")
        }, 1000);

        // This will subtract the duration by 5 whenever the choice that is clicked does not equal the answer from randomQuestion.
        var currentDuration = parseInt(timeLeft.textContent);
        timeLeft.textContent = currentDuration -= 5;
        if (currentDuration < 0) {
            currentDuration = 0;
        }
        timeLeft.textContent = currentDuration

        // This function will allow the user to move on even after selecting the wrong answer.
        updateQuestion();
    }
  
    finalScore.textContent = score;
  
    var questionIndex = quizQuestions.findIndex(
        (question) => question.question === randomQuestion.question
    );

    // This removes the current question from the array after it is used.
    quizQuestions.splice(questionIndex, 1);
  
    // As long as the number of questions left is greater than 0, the questions/choices will continue to be generated through  the updateQuestions() function(that activates getRandomQuestion(quizQuestions) until no question is remaining).
    // Once the number of quizQuestions is at 0, displaySummary() will be activated(navigating the user to the Summary page) and the questions and timer will be reset.
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

    // Resets the question index.
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
        leaderboardData.push(newScore); // Add the new score to the leaderboardData array
        leaderboardScore(); // Update the leaderboard immediately
    }
    displayLeaderboard();
}

function clearScores() {
    localStorage.removeItem("highScores");
    leaderboardList.innerHTML = "";
    // This clears the leaderboard data array.
    leaderboardData = [];
    // The Leaderboard is then updated.
    leaderboardScore();
}

// Retrieves the stored data from local storage.
var leaderboardData = JSON.parse(localStorage.getItem('highScores')) || [];

// This function will take the stored data for 'highScores' and create an entry for each sumbitted name/score.
function leaderboardScore() {
    // Clear the existing leaderboard
    leaderboardList.innerHTML = '';

    // Iterates over the leaderboard data and create <tr> elements with <td> for each entry.
    leaderboardData.forEach(function(entry) {
        // Randomizing the color for each name and score in the Leaderboard before appending.
        var textColor = generateRandomColor();

        // This is for the 'name' that will be appeneded under the 'NAME' column.
        var nameCell = document.createElement('td');
        nameCell.textContent = entry.name;
        nameCell.style.color = textColor
        
        // This is for the 'score' that will be appended under the 'SCORE' column.
        var scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score;
        scoreCell.style.color = textColor

        // Each 'tr' will include two 'td' with the saved name/score.
        var row = document.createElement('tr');

        // This will append a row under the leaderboardList, along with two cells under the Name and Score header of the table for the Leaderboard.
        leaderboardList.appendChild(row);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);
    });
}

// This array of colors will be used in the generateRandomColor() function to generate a random color for each leaderboardData function.
const colorArray = [
    '#FFFF00', 
    '#FFD700', 
    '#FFA500', 
    '#FF4500', 
    '#FF0000', 
    '#C71585', 
    '#800080',
    '#483D8B',
    '#0000FF',
    '#008080',
    '#008000',
    '#9ACD32'  
];

// Randomizes a color from the colorArray.
function generateRandomColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
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

// This function will display the Menu page.
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

// This function will display the Quiz page.
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

// This function will display the Summary page.
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

// This will display the Leaderboard page.
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

// addEventListeners for the appliction.
// Starts the quiz for the user by initializing the timer, displaying the quiz page, starting the timer and updating the question.
playButton.addEventListener("click", function() {
    resetTimer();
    displayQuiz();
    startTimer();
    updateQuestion();
});

// Saves a new entry under 'highScores' in local storage.
submitButton.addEventListener("click", function() {
    submitScore();
});

// Clears the 'highScores' that were saved to local storage.
clearButton.addEventListener("click", function(){
    clearScores();

});

// This will display the Leaderboard page for the user.
document.getElementById("leaderboard").addEventListener("click", displayLeaderboard);

// This will display the Menu page for the user.
document.getElementById("quit").addEventListener("click", displayMenu);

// This allows the user to click a choice for A, B, C, or D under each question that is generated.
choiceA.addEventListener("click", handleChoiceClick);
choiceB.addEventListener("click", handleChoiceClick);
choiceC.addEventListener("click", handleChoiceClick);
choiceD.addEventListener("click", handleChoiceClick);