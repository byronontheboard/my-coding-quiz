// menu variables
let startQuiz = document.getElementById('start-btn')
let quitQuiz = document.getElementById('return-btn')

// event listeners for the quiz
document.getElementById('start-btn').addEventListener("click", startQuiz)
document.getElementById('return-btn').addEventListener("click", endQuiz);

// quiz variables
let timer = document.getElementById('timer')
let timeLeft = document.getElementById('time-left')

// summary variables
let quizSummary = document.getElementById('summary')
let finalScore = document.getElementById('score')

// initialInput
let enterName = document.getElementById('name-input')
let submitScore = document.getElementById('submit-btn')

// leaderboard variables
let checkLeaderboard = document.getElementById('leaderboard-btn')
let highScores = document.getElementById('high-scores')
let clearScore = document.getElementById('clear-btn')

// question variables
// currentQuestion
let questionTitle = document.getElementById('question-title')
let choiceA = document.getElementById('choice-a')
let choiceB = document.getElementById('choice-b')
let choiceC = document.getElementById('choice-c') 
let choiceD = document.getElementById('choice-d')
// this will highlight the score box white or red depending on if it is correct or not
let checkAnswer = document.getElementById('answer-check')

// correctAnswers can possibly be score?
let correctAnswers = 0
let questionNumber = 0
// not sure if this is written correctly
let scoreResult = []
let questionIndex = 0;

let borderStyle = document.getElementById("checkAnswer").style.borderColor
let correct = '#FFFF00'
let wrong = '#FF0000'

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

// functions 

let totalTime = 60
function startQuiz() {
    window.location.href = "redo-quiz.html"

    showQuiz()
}

function showQuiz() {
    
    questionIndex = 0
    totalTime = 60
    timeLeft.textContent = totalTime
    nameInput.textContent = ""
    
    let startTimer = setInterval(function() {
        totalTime--
        timeLeft.textContent = totalTime
        if(totalTime <= 0) {
            clearInterval(startTimer)
            if(questionIndex < questions.length -1) {
                
                endQuiz()
            }
        }
    }, 60);
    
    nextQuestion()
}
// let totalTime = 60
// function startQuiz() {
//     questionIndex = 0
//     totalTime = 60
//     timeLeft.textContent = totalTime
//     nameInput.textContent = ""

//     let startTimer = setInterval(function() {
//         totalTime--
//         timeLeft.textContent = totalTime
//         if(totalTime <= 0) {
//             clearInterval(startTimer)
//             if(questionIndex < questions.length -1) {

//                 endQuiz()
//             }
//         }
//     }, 60);

//     showQuiz()
// }

// function showQuiz() {
//     window.location.href = "redo-quiz.html"
//     nextQuestion()
// }

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question
    choiceA.textContent = questions[questionIndex].choices[0]
    choiceB.textContent = questions[questionIndex].choices[1]
    choiceC.textContent = questions[questionIndex].choices[2]
    choiceD.textContent = questions[questionIndex].choices[3]

    // This resets the color to green after a answer is chosen and determined correct or not
    // document.getElementById("answer-check").style.borderColor = "#00FF00";
    answerCheck.style.borderColor = "#00FF00";
}

function checkAnswer() {
    // answerCheck.style.color = 
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAnswers++;
        // console.log(correctAnswers);
        // answerCheck.textContent = "Correct!";
        borderStyle = correct
    } else {
        // wrong answer, deduct 5 second from timer
        totalTime -= 5;
        timeLeft.textContent = totalTime;
        // answerCheck.style.borderColor = wrong
        borderStyle = wrong
    }

    questionIndex++
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // This function will run when no more questions are left, taking the user to the summary page.
        endQuiz();
    }
}

function chooseA() { 
    checkAnswer(0); 
}

function chooseB() { 
    checkAnswer(1); 
}

function chooseC() { 
    checkAnswer(2); 
}

function chooseD() { 
    checkAnswer(3); 
}

// This function will take you to the summary page on completion of the quiz
function quizSummary() {
    window.location.href = "redo-summary.html"
    // Insert function to stop the timer.
}
 
// This returns the user to the main menu when pressing the 'Quit' button or 'Main Menu' button. 
// Additionally, it stops/resets the timer function once pressed.
function quitQuiz() {
    window.location.href = "redo-menu.html"

    // Insert function to stop the timer.
};

function storeScore (event) {
    event.preventDefault();

    // stop function is initial is blank
    if (initialInput.value ==="") {
        alert("Please enter your initials.");
        return;
    }
    
    let savedScores = localStorage.getItem("high scores");
    let scoresArray = [];
    
    if (savedScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores)
    }
    
    let userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };
    
    scoresArray.push(userScore);
    
    let scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    
}


let storedScores = JSON.parse(savedScores)
for(; i < storedScores.length; i++) {
    let eachHighScore = document.createElement("p")
    eachHighScore.innerHTML = storedScores[i].name + ": " + "storedScore[i].score"
    
}



