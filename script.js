let input = document.querySelector("input");
const button = document.querySelector(".btn");
const showquestion = document.querySelector("h1");
const showanswer = document.querySelector("h2");
let gameScore = document.querySelector("span");

let score = 1;
let currentQuestion = 0;

let questionAndAnswer = [
  {
    question: "What is your name?",
    answer: "Sayam",
  },
  {
    question: "where do you live?",
    answer: "Rajasthan",
  },
  {
    question: "What do you want to become?",
    answer: "Front-End Developer",
  },
  {
    question: "How much salary do you want?",
    answer: "enough that i can survive in 5 star hotel",
  },
  {
    question: "how much js enough for beginner to land a job",
    answer: "js project",
  },
];

loadquestion();

function loadquestion() {
  const currentQuiz = questionAndAnswer[currentQuestion];
  showquestion.innerText = currentQuiz.question;
}

button.addEventListener("click", () => {
  const currentAns = questionAndAnswer[currentQuestion];
  if (input.value === currentAns.answer) {
    showanswer.innerText = "Right Answer: " + currentAns.answer;
    gameScore.innerText = "score is: " + score++;
    input.value = "";
    currentQuestion++;

    loadquestion();
  } else {
    showanswer.innerText = "Wrong answer";
  }
});
