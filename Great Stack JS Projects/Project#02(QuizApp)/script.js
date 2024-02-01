const questions = [
    {
        question : "Which is the largest animal in the world?",
        answers : [
            {text : "Shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},
        ]
    },
    {
        question : "Which is the smalles continent in the world?",
        answers : [
            {text : "Asia", correct : false},
            {text : "Australia", correct : true},
            {text : "Arctic", correct : false},
            {text : "Affrica", correct : false},
        ]
    },
    {
        question : "Colloidal impurities if associated with organic matter having bacterias becomes the chief source of ?",
        answers : [
            {text : "hardness", correct : false},
            {text : "alkalinity", correct : false},
            {text : "epidemic", correct : true},
            {text : "bad taste", correct : false},
        ]
    },
    {
        question : "The maximum permissible temperature for domestic supply is ?",
        answers : [
            {text : "5 to 10°C", correct : false},
            {text : "15 to 20°C", correct : false},
            {text : "20 to 25°C", correct : false},
            {text : "10 to 15°C ", correct : true},
        ]
    },
    {
        question : "When lead is present in water, it ?",
        answers : [
            {text : "changes its colour", correct : false},
            {text : "causes turbidity", correct : false},
            {text : "causes alkalinity", correct : false},
            {text : "none of these", correct : true},
        ]
    },
    {
        question : "According to Indian standards, 45 litres of water per person per day is provided in case of ?",
        answers : [
            {text : "hotels", correct : false},
            {text : "hostels", correct : false},
            {text : "offices", correct : true},
            {text : "all of these", correct : false},
        ]
    },
    {
        question : "The water obtained from is generally known as underground water ?",
        answers : [
            {text : "infiltration galleries", correct : false},
            {text : "springs", correct : true},
            {text : "rivers", correct : false},
            {text : "wells", correct : false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState()
{
    nextBtn.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scroed ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}
nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});
startQuiz();