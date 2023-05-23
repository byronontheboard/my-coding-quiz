// Quiz Questions Section
    // These are all of the questions/answers that will be used during the quiz.
    const quizQuestions = [
        {
        question: 'Commonly used data types DO NOT include:',

        choices: [
            'strings',
            'booleans',
            'alerts',
            'numbers'
        ],

        answer: 'alerts',
        },
        {
        question: 'The condition in an if / else statement is enclosed within ____.',

        choices: [
            'quotes',
            'curly brackets',
            'parentheses',
            'square brackets',
        ],

        answer: 'parentheses',
        },
        {
        question: 'Arrays in JavaScript can be used to store ____.',

        choices: [
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

        choices: [ 
            'commas',
            'curly brackets',
            'quotes',
            'parentheses',
        ],

        answer: 'quotes',
        },
        {
        question:
            'A very useful tool used during development and debugging for printing content to the debugger is:',

        choices: [ 
            'JavaScript',
            'terminal / bash',
            'for loops',
            'console.log',
        ],

        answer: 'console.log',
        },
    ];

// Variables/Elements Section
    // These are the buttons that I will addEventListener's to. Each button will then navigate to different pages(menu, quiz, summary, and leaderboard).
        // The startButton will navigate to the Quiz page and will initiate the function, startQuiz().
    var startButton = document.getElementById('start-btn')
    console.log(startButton)
    if (startButton) {
        startButton.addEventListener('click', () => {
            alert('you clicked the button')
        });
    }
        // The submitButton will submit the user's initial/name and score to the 'Leaderboard' upon 'click'.
    var submitButton = document.getElementById('submit-btn')
    console.log(submitButton)
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            alert('you clicked the button')
        });
    }
        // The leaderboardButton will navigate to the Leaderboard page with all of the initials & scores from the user that were submitted.
    var leaderboardButton = document.getElementById('leaderboard-btn')
        // The returnButton will navigate to the Menu page and will initiate the function, endQuiz().
            // The returnButton also serves a dual purpose to 'Quit' the quiz.
    var returnButton = document.getElementById('return-btn')
        // The clearButton will clear scores that were stored to localStorage.
    var clearButton = document.getElementById('clear-btn')

    // This is where the textContent regarding the current question will fill.
    var currentQuestion = document.getElementById('current-question')
    // The choice(A, B, C, & D) variables are where the different choices for answers will generate from the questions array.
    var choiceA = document.getElementById('choice-a')
    var choiceB = document.getElementById('choice-b')
    var choiceC = document.getElementById('choice-c') 
    var choiceD = document.getElementById('choice-d')
    
    // This is where the user's choices is checked to confirm whether or not they chose the correct answer.
    var answerCheck = document.getElementById('answer-check')
    // This is where the textContent for the 'timer' will be fill(timer: 'textContent').
    var timer = document.getElementById('timer')
    // This is where the textContent for the 'score' will be fill(score: 'textContent').
    var score = document.getElementById('score')
    
    // These are initial values for variables at the start of the quiz.
    var correctAnswers = 0
    var questionNumber = 0
    var questionIndex = 0;
    
    // This is where the textContent for your final score of the quiz will generate, once navigated to the summary page("Your final score is: textContent").
    var finalScore = document.getElementById('final-score')
    // This is where the user will type their initials/name in order to submit their score.
    var initialInput = document.getElementById('initial-input')
    // This is where the submissions of initials/names & scores will be appended.
    var leaderboardList = document.getElementById('leaderboard-list')
    
// Might not need scoreResult variable.
    // var scoreResult;

// Function Section
    // This function navigates the user to the Quiz page, while also initiating the function startQuiz().
    function goToQuiz() {
        window.location.href = "redo-quiz.html"
        
        startQuiz();
    };

    // This function will begin the timer for the quiz.
    function startQuiz() {
        questionIndex = 0
        totalTime = 60
        timer.textContent = totalTime
        initialInput.textContent = "";
        
        var startTimer = setInterval(function() {
            totalTime--
            timer.textContent = totalTime
            if(totalTime <= 0) {
                clearInterval(startTimer)
                if(questionIndex < questions.length -1) {
                    
                    endQuiz();
                }
            }
        }, 60);

        giveQuestions();
        console.log("confirmed")
    }
    
    // This function will generate the questions from the questions array.
    function giveQuestions() { 
        currentQuestion.textContent = questions[questionIndex].question;
        choiceA.textContent = quizQuestions[questionIndex].choices[0];
        choiceB.textContent = quizQuestions[questionIndex].choices[1];
        choiceC.textContent = quizQuestions[questionIndex].choices[2];
        choiceD.textContent = quizQuestions[questionIndex].choices[3];
    }

// Comment the checkAnswer section out
    function checkAnswer() {
        if (quizQuestions[questionIndex].answer === quizQuestions[questionIndex].choices[answer]) {
            // correct answer, add 1 score to final score
            correctAnswers++;
            // console.log(correctAns);
            answerCheck.textContent = "Correct!";
        } else {
            // wrong answer, deduct 5 second from timer
            totalTime -= 5;
            timer.textContent = totalTime;
            answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
        }
    
        questionIndex++;

        if (questionIndex < questions.length) {
            giveQuestions();
        } else {
            // if no more question, run game over function
            endQuiz();
        }
    };

    function chooseA() {
        checkAnswer(0);
    };
    function chooseB() {
        checkAnswer(1);
    };
    function chooseC() {
        checkAnswer(2);
    };
    function chooseD() {
        checkAnswer(3);
    };

    // This function will send the user to the Summary page upon completing the quiz, or if the timer runs out.
    function endQuiz() {
        window.location.href = "redo-summary.html"

        finalScore.textContent = correctAnswers
    };

    function storeScore(event) {
        event.preventDefault();

        if (initialInput.value === "") {
            alert("Please enter your initials!");
            return;
        } 

        var savedScores = localStorage.getItem("Leaderboard");
        var scoresArray;

        if (savedScores === null) {
            scoresArray = [];
        } else {
            scoresArray = JSON.parse(savedScores)
        }

        var userScore = {
            initials: initialInput.value,
            score: finalScore.textContent
        };

        console.log(userScore);
        scoresArray.push(userScore);

        // stringify array in order to store in local
        var scoresArrayString = JSON.stringify(scoresArray);
        window.localStorage.setItem("Leaderboard", scoresArrayString);
        
        // show current highscores
        goToLeaderboard();
    }
    
    var i = 0
    function goToLeaderboard() {
        window.location.href = "redo-leadeboard.html"
        
        var savedScores = localStorage.getItem("Leaderboard");

        if (savedScores === null) {
            return
        }
        console.log(savedScores);

        var storedScores = JSON.parse(savedScores);

        for (;i < storedScores.length; i++) {
            var newStoredScores = document.createElement("p.leaderboard-text");
            newStoredScores.innerHTML = `${storedScores[i].initials}: ${storedScores[i].score}`;
            leaderboardList.appendChild(newStoredScores);
        };
    };

    // This function will send the user back to the Menu page, ending the quiz.
    function returnMenu() {
        window.location.href = "redo-menu.html"
    };
    
    // This function will clear the user scores that were saved to localStorage.
    function clearScores() {
        window.localStorage.removeItem("Leaderboard");
        leaderboardList.innerHTML = "No new scores... :(";
        leaderboardList.setAttribute("class", "leaderboard-text")
    };

// addEventListeners Section
    // This addEventListener is used for the 'Start' button, which then initiates the function, goToQuiz(), that will then activate the function startQuiz().
    document.getElementById('start-btn').addEventListener('click', goToQuiz);
    // This addEventListener is used for the 'Menu' and 'Quit' button.
    // document.getElementById('return-btn').addEventListener('click', returnMenu);
    // This addEventListener is used for the 'Submit' button that will initiate the function storeScore().
    document.getElementById('submit-btn').addEventListener('click', function(event) {
        storeScore(event);
    });
    // This addEventListener is used for the 'Clear Scores' button that will initiate the function clearScores().
    clearButton.addEventListener('click', clearScores);

    choiceA.addEventListener("click", chooseA);
    choiceB.addEventListener("click", chooseB);
    choiceC.addEventListener("click", chooseC);
    choiceD.addEventListener("click", chooseD);
