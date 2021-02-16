var userChoice = new Array();
var quizEnded = false;
var questions = [
    new Questions("Que 1", ["1 ans 1", "1 ans 2", "1 ans 3", "1 ans 4"], "1 ans 4"),
    new Questions("Que 2", ["2 ans 1", "2 ans 2", "2 ans 3", "2 ans 4"], "2 ans 4"),
    new Questions("Que 3", ["3 ans 1", "3 ans 2", "3 ans 3", "3 ans 4"], "3 ans 4"),
    new Questions("Que 4", ["4 ans 1", "4 ans 2", "4 ans 3", "4 ans 4"], "4 ans 4"),
    // new Questions("Que 5", ["5 ans 1", "5 ans 2", "5 ans 3", "5 ans 4"], "5 ans 4"),    
]
var quiz = new Quiz(questions);
showQuestion();
totalNumberOfQuestions();

function showQuestion() {
    if(quiz.isEnded()) {
        showScore();  
        quizEnded = true;              
    } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getCurrentQuestion().questionText;
        element = document.getElementById("choiceListing");
        element.innerHTML = "";
        for(i=0;i<quiz.getCurrentQuestion().questionOptions.length;i++) {            
            var node = document.createElement("button");
            var choiceText = quiz.getCurrentQuestion().questionOptions[i];
            var choiceButtonNode = document.createTextNode(choiceText);
            node.setAttribute("id", "choice0"+ i);
            if(userChoice[quiz.questionIndex]===i) {
                node.setAttribute("class","lockedAnswer");
            }
            if(quizEnded && quiz.isCorrectAnswer(choiceText)) {
                node.setAttribute("class","correctAnswer");
            }
            node.appendChild(choiceButtonNode);
            element.appendChild(node);
            setClickForAnswerButton("choice0"+i, choiceText, i);
        }        
    }
    currentQuestionNumber();
    navigationButtonShowHide(); 
}

function viewAnswers() {
    showElement("quiz");    
    hideElement("scoreCard");   
    hideElement("skipBtn");   
    quiz.setQuestionIndexToZero();   
    showQuestion(); 
}

function setClickForAnswerButton(btnId, choiceText, answerIndex) {
    var buttonElement = document.getElementById(btnId);    
    buttonElement.onclick = function(){
        if(!quizEnded) {
            userChoice[quiz.questionIndex]=answerIndex;
            quiz.userGivenAnswer(choiceText);                
        }
        showQuestion();           
    }
}

function showScore() {    
    showElement("scoreCard");
    hideElement("quiz");
    showElement("gotoScoreCardBtn");    
    var element = document.getElementById("quizScore");
    element.innerHTML = quiz.score;
    element = document.getElementById("quiz");
    element.classList.add("quiz-ended");
}

function navigationButtonShowHide() {
    if(quiz.questionIndex === 0) {
        hideElement("prevBtn");
        showElement("nextBtn");
    } else if(quiz.questionIndex === (quiz.questions.length-1)) {
        showElement("prevBtn");
        hideElement("nextBtn");
    } else {
        showElement("prevBtn");
        showElement("nextBtn");
    }
}


function totalNumberOfQuestions() {
    var totalNumberOfQuestions = document.getElementById("totalNumberOfQuestions");
    totalNumberOfQuestions.innerHTML = quiz.questions.length;
}

function currentQuestionNumber() {
    var currentQuestionNo = document.getElementById("currentQuestionNo");
        currentQuestionNo.innerHTML = quiz.questionIndex + 1;
}

function nextQuestion() {
    quiz.questionIndex += 1;
    showQuestion();
}

function prevQuestion() {
    quiz.questionIndex -= 1;
    showQuestion();
}

function showElement(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
}
function hideElement(id) {
    var element = document.getElementById(id);
    element.style.display = 'none';
}