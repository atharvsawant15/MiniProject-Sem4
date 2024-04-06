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
        question: "How do you say 'Goodbye' in French?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correct: "Au revoir",
    },
    {
        id: "1",
        question: "What is the French translation for 'Thank you'?",
        options: ["Oui", "Non", "Excusez-moi", "Merci"],
        correct: "Merci",
    },
    {
        id: "2",
        question: "How would you express 'Please' in French?",
        options: ["Bonjour", "Au revoir", "S'il vous plaît", "Excusez-moi"],
        correct: "S'il vous plaît",
    },
    {
        id: "3",
        question: "In French, what does 'Yes' mean?",
        options: ["Oui", "Non", "Merci", "Excusez-moi"],
        correct: "Oui",
    },
    {
        id: "4",
        question: "How do you say 'No' in French?",
        options: ["Oui", "Non", "Bonjour", "Merci"],
        correct: "Non",
    },
    {
        id: "5",
        question: "What is the French phrase for 'Excuse me'?",
        options: ["Merci", "Bonjour", "Excusez-moi", "S'il vous plaît"],
        correct: "Excusez-moi",
    },
    {
        id: "6",
        question: "How would you apologize in French?",
        options: ["S'il vous plaît", "Excusez-moi", "Au revoir", "Je suis désolé(e)"],
        correct: "Je suis désolé(e)",
    },
    {
        id: "7",
        question: "What is the French equivalent for 'How are you?'",
        options: ["Comment ça va?", "Comment vous appelez-vous?", "S'il vous plaît", "Je suis désolé(e)"],
        correct: "Comment ça va?",
    },
    {
        id: "8",
        question: "How do you ask 'What is your name?' in French?",
        options: ["Comment ça va?", "Comment vous appelez-vous?", "S'il vous plaît", "Je suis désolé(e)"],
        correct: "Comment vous appelez-vous?",
    },
    {
        id: "9",
        question: "How do you say 'Hello' in French?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correct: "Bonjour",
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