const questions = [
{
question: "Which language runs in the browser?",
answers: ["Java", "C", "Python", "JavaScript"],
correct: 3
},
{
question: "What does CSS stand for?",
answers: [
"Central Style Sheets",
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style System"
],
correct: 1
},
{
question: "Which company developed JavaScript?",
answers: ["Microsoft", "Netscape", "Google", "Oracle"],
correct: 1
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion(){

const q = questions[currentQuestion];

questionElement.textContent = q.question;

answersElement.innerHTML = "";

q.answers.forEach((answer,index)=>{

const button = document.createElement("button");

button.textContent = answer;

button.classList.add("answer-btn");

button.onclick = ()=>selectAnswer(button,index);

answersElement.appendChild(button);

});

}

function selectAnswer(button,index){

const correctIndex = questions[currentQuestion].correct;

const buttons = document.querySelectorAll(".answer-btn");

buttons.forEach((btn,i)=>{

btn.disabled = true;

if(i === correctIndex){
btn.style.background = "green";
btn.style.color = "white";
}

});

if(index === correctIndex){

score++;

}else{

button.style.background = "red";
button.style.color = "white";

}

nextBtn.style.display="block";

}

nextBtn.onclick = ()=>{

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();
nextBtn.style.display="none";

}else{

showScore();

}

};

function showScore(){

questionElement.innerHTML="Quiz Finished!";

answersElement.innerHTML="";

scoreElement.innerHTML=`Your Score: ${score}/${questions.length}`;

nextBtn.style.display="none";

}

showQuestion();