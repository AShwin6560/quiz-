const quizData = [
    {
        question: "What is the capital of Nepal?",
        options: ["Biratnagar", "Kahmandu", "Birgunj", "Chitwan"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Leo Tolstoy"],
        correct: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("score-container");
const quizContainer = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
        button.classList.remove("selected");
        if (selectedAnswer === index) {
            button.classList.add("selected");
        }
    });
    prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    nextBtn.innerText = currentQuestionIndex === quizData.length - 1 ? "Finish" : "Next";
}

function selectAnswer(index) {
    selectedAnswer = index;
    optionButtons.forEach(button => button.classList.remove("selected"));
    optionButtons[index].classList.add("selected");
}

function nextQuestion() {
    if (selectedAnswer === null) return alert("Please select an answer.");
    if (selectedAnswer === quizData[currentQuestionIndex].correct) score++;
    
    selectedAnswer = null;
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData.length) {
        showScore();
    } else {
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showScore() {
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreEl.innerText = score;
    totalEl.innerText = quizData.length;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
}

window.onload = loadQuestion;
