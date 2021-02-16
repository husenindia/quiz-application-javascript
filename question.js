function Questions(questionText, questionOptions, questionCorrectAnswer){
    this.questionText = questionText;
    this.questionOptions = questionOptions;
    this.questionCorrectAnswer = questionCorrectAnswer;
}

Questions.prototype.isCorrectAnswer = function(answer) {
    return this.questionCorrectAnswer === answer;
}
