const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement= document.getElementById('question-container');
startButton.addEventListener('click', startGame);

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById('question');
const ansButtonElement =document.getElementById('answer-button');

function startGame()
{
    startButton.classList.add('hide');
    shuffledQuestions = question.sort(()=> Math.random()- 0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}
function nextQuestion()
{
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question)
{
    questionElement.innerText =question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText= answer.text;
        button.classList.add('btn');
        if(answer.correct)
        {
            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', selectAns);
        ansButtonElement.appendChild(button);

    });
}
function resetState(){
    nextButton.classList.add('hide');
    while(ansButtonElement.firstChild)
    {
        ansButtonElement.removeChild(ansButtonElement.firstChild);
    }
}
function selectAns(e)
{
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(ansButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct');
    }
    else
    {
        element.classList.add('wrong');
    }

}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question =[
    {
        question:"What is 2 + 2?",
        answer: [
            {text:'4', correct: true},
            {text:'22', correct: false}
        ]
    }
]