const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement= document.getElementById('question-container');
startButton.addEventListener('click', startGame);

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById('question');
const ansButtonElement =document.getElementById('answer-button');

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    nextQuestion()
})

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
    clearStatusClass(document.body)
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
    if(shuffledQuestions.length > currentQuestionIndex+1)
    {
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide');
    }
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
    },
    {
        question:"How many time zones are there in Russia?",
        answer: [
            {text:'4', correct: false},
            {text:'22', correct: false},
            {text:'11', correct: true},
            {text:'5', correct: false}
        ]
    },
    {
        question:"What’s the national flower of Japan? ",
        answer: [
            {text:'Rose', correct: false},
            {text:'Cherry blossom', correct: true},
            {text:'Lily', correct: false},
            {text:'Sun Flower', correct: false}
        ]
    },
    {
        question:"How many stripes are there on the US flag?",
        answer: [
            {text:'11', correct: false},
            {text:'15', correct: false},
            {text:'10', correct: false},
            {text:'13', correct: true}
        ]
    },
    {
        question:"How many days does it take for the Earth to orbit the Sun?",
        answer: [
            {text:'300', correct: false},
            {text:'360', correct: false},
            {text:'390', correct: false},
            {text:'365', correct: true}
        ]
    }
    

]
