var quizResult = document.getElementById("results");
// 
// button selections
//
var eQ = document.getElementById("quiz");
var eS1 = document.getElementById("selection1");
var eS2 = document.getElementById("selection2");
var eS3 = document.getElementById("selection3");
var eS4 = document.getElementById("selection4");
//
var sSelectionl = document.querySelector("#selection1");
var sSelection2 = document.querySelector("#selection2");
var sSelection3 = document.querySelector("#selection3");
var sSelection4 = document.querySelector("#selection4");
//
// object: question and answer list with correct answer
//
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answer1: "Bjarne Stroustrup",
    answer2: "Larry Ellison",
    answer3: "Brendan Eich",
    answer4: "James Gosling",
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one is the core technology of World Wide Web?",
    answer1: "HTML",
    answer2: "CSS",
    answer3: "Javascript",
    answer4: "All of the above",
    correctAnswer: "All of the above"
  }
];
console.log(myQuestions);
//
// Loop thru questions
// 
for (var i = 0; i<myQuestions.length; i++) {
  eQ.textContent = myQuestions[i].question;
  eS1.textContent = myQuestions[i].answer1;
  eS2.textContent = myQuestions[i].answer2;
  eS3.textContent = myQuestions[i].answer3;
  eS4.textContent = myQuestions[i].answer4;
//
  console.log("Question: " + eQ.textContent);
  console.log("1st option: " + eS1.textContent);
  console.log("2st option: " + eS2.textContent);
  console.log("3st option: " + eS3.textContent);
  console.log("4st option: " + eS4.textContent);
//
// add timer
//
sSelectionl.addEventListener("click", function() {
  console.log("first choice selected ")
});
sSelection2.addEventListener("click", function() {
  console.log("second choice selected")
});
sSelection3.addEventListener("click", function() {
  console.log("third choice selected")
});
sSelection4.addEventListener("click", function() {
  console.log("fourth choice selected")
});
}