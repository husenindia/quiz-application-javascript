function showNextQuestion() {
    console.log("show next que");
    if(quiz.isEnded()) {
        showScore();
    } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getCurrentQuestion().questionText;
        var mainelement = document.getElementById("choiceListing");
        mainelement.innerHTML = "";
        for(i=0;i<quiz.getCurrentQuestion().questionOptions.length;i++) {
            var node = document.createElement("button");
            var choiceText = quiz.getCurrentQuestion().questionOptions[i];
            var choiceButtonNode = document.createTextNode(choiceText);
            node.setAttribute("id", "choice0"+ i);
            node.appendChild(choiceButtonNode);
            mainelement.appendChild(node);
            setClickForAnswerButton("choice0"+i, choiceText);
        }
        currentQuestionNumber();
    }
}

function setClickForAnswerButton(btnId, choiceText) {
    buttonElement = document.getElementById(btnId);
    buttonElement.onclick = function(){
        quiz.userGivenAnswer(choiceText);        
        showNextQuestion();           
    }
}

function showScore() {
    var infoHeaderText = "<h1>Result</h1>";
    infoHeaderText += "<h2>Your Score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");    
    element.innerHTML = infoHeaderText;
}

function totalNumberOfQuestions() {
    var totalNumberOfQuestions = document.getElementById("totalNumberOfQuestions");
    totalNumberOfQuestions.innerHTML = quiz.questions.length;
}

function currentQuestionNumber() {
    var currentQuestionNo = document.getElementById("currentQuestionNo");
        currentQuestionNo.innerHTML = quiz.questionIndex + 1;
}

var questions = [
    new Questions("Que 1", ["ans 1", "ans 2", "ans 3", "ans 4"], "ans 4"),
    new Questions("Que 2", ["ans 1", "ans 2", "ans 3", "ans 4"], "ans 4"),
    new Questions("Que 3", ["ans 1", "ans 2", "ans 3", "ans 4"], "ans 4"),
    new Questions("Que 4", ["ans 1", "ans 2", "ans 3", "ans 4"], "ans 4"),
    new Questions("Que 5", ["ans 1", "ans 2", "ans 3", "ans 4"], "ans 4"),
]

var quiz = new Quiz(questions);

showNextQuestion();
totalNumberOfQuestions();
