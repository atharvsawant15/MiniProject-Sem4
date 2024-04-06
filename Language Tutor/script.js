//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let prevBtn = document.getElementById("prev-button");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let level2btn = document.getElementById('level2-medium-button');
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "What do you call a 'DOG' in german?",
        options: ["katze", "elefant", "hund", "mause"],
        correct: "hund",
    },
    {
        id: "1",
        question: "What is the German word for hello?",
        options: ["Bitte", "Hallo", "Danke", "Auf Wiedersehen"],
        correct: "Hallo",
    },
    {
        id: "2",
        question: "How do you say 'goodbye' in German?",
        options: ["Bitte", "Hallo", "Danke", "Auf Wiedersehen"],
        correct: "Auf Wiedersehen",
    },
    {
        id: "3",
        question: "Which of the following means 'thank you' in German?",
        options: ["Bitte", "Hallo", "Danke", "Auf Wiedersehen"],
        correct: "Danke",
    },
    {
        id: "4",
        question: "What does 'Nein' mean in English?",
        options: ["Yes", "No", "Maybe", "Thank you"],
        correct: "No",
    },
    {
        id: "5",
        question: "What does 'Ja' mean in English?",
        options: ["Yes", "No", "Maybe", "Thank you"],
        correct: "Yes",
    }, 
    {
        id: "6",
        question: "How would you say 'please' in German?",
        options: ["Bitte", "Hallo", "Danke", "Guten Tag"],
        correct: "Bitte",
    },
    {
        id: "7",
        question: "How would you say 'excuse me' in German when trying to get someone's attention?",
        options: ["Entschuldigung", "Bitte", "Danke", "Hallo"],
        correct: "Entschuldigung",
    },
    {
        id: "8",
        question: "How do you ask 'How are you?' in German?",
        options: ["Wie heißt du?", "Wie geht es dir?", "Wie alt bist du?", "Woher kommst du?"],
        correct: "Wie geht es dir?",
    },
    {
        id: "9",
        question: "Which of the following means 'thank you' in German?",
        options: ["Bitte", "Hallo", "Danke", "Auf Wiedersehen"],
        correct: "Danke",
    },
];

// Function to handle displaying the previous question
prevBtn.addEventListener("click", () => {
    // Decrement questionCount
    questionCount -= 1;
    
    // If the current question is the first question, prevent going back further
    if (questionCount < 0) {
        questionCount = 0;
    }
    
    // Update question count display 
    countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
    
    // Display the previous question
    quizDisplay(questionCount);
    
    // Reset the timer
    count = 11;
    clearInterval(countdown);
    timerDisplay();
});



//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};


level2btn.addEventListener('click', function() {
    // Check if the previous score is more than or equal to 8
    if (scoreCount >= 8) {
        // Display the quiz for Level 2 - Medium
        alert('Pass');
    } else {
        // Notify the user that they need a minimum of 8 right questions to qualify for Level 2
        alert('You need a minimum of 8 right questions to qualify for Level 2.');
    }
});