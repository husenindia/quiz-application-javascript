function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.userGivenAnswer = function(answer) { 
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}