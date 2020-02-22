//
// function - Quiz
//
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
//
// function - Quiz - end
// 
//
// set question index
//
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
console.log(Quiz);
//
//
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
//        this.score++;
          this.score = this.score + 20; 
    } else {
          this.score = this.score - 10;
    }
    this.questionIndex++;
    console.log(this.questionIndex);
}

//
//
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
//
// 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
//
// 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
//
// function populate the questions
// 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
//
// function display timer
// 
var remTime = 10;
var takenTime = 0;
document.getElementById("timer").innerHTML = "Time Remaining: " + remTime;
var myTime = setInterval(myTimer, 1000);
function myTimer() {
    takenTime = takenTime + 1;
    remTime = remTime - 1;
    document.getElementById("timer").innerHTML = "Time Remaining: " + remTime;
    if(remTime < 1) {
        clearInterval(myTime);
        showScores();
    }
}
//
// function user selection
// 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
//
// function display quiz progress
// 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
        
    var element = document.getElementById("points");
    element.innerHTML = "Current Score: " + quiz.score;
};
//
// function display score
// 
function showScores() {
    console.log("this gets called -----");
    clearInterval(myTime);
    var gameOverHTML = "<h3>Results</h3>";
    gameOverHTML += "<h3> Your scores: " + quiz.score + "</h3>";
    gameOverHTML += "<h3> Time Taken: " + takenTime + "</h3>";
    var element = document.getElementById("subsection");
    element.innerHTML = gameOverHTML;
};
//
// list of questions
//
var questions = [
    new Question("Who invented Javascript?", ["Bjarne Stroustrup", "Larry Ellison","Brendan Eich", "James Gosling"], "Brendan Eich"),
    new Question("Which one is the core technology of World Wide Web?", ["HTML", "Javascript", "CSS", "All of the above"], "All of the above"),
    new Question("Inside which HTML element do we put the JavaScript?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Inside which HTML element do we put the JavaScript?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP")
];
// 
// create quiz
//
var quiz = new Quiz(questions);
//
// start the process
//
populate();