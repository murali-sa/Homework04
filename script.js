var quizList = document.getElementById("quiz");
var userSelection = document.getElementById("selection");
var quizResult = document.getElementById("results");

var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Bjarne Stroustrup",
      b: "Larry Ellison",
      c: "Brendan Eich",
      d: "James Gosling"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one is the core technology of World Wide Web?",
    answers: {
      a: "HTML",
      b: "CSS",
      c: "Javascript",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "If Button is clicked...Event Handler is invoked",
    answers: {
      a: "onSubmit()",
      b: "onLoad()",
      c: "onMouseover()",
      d: "onClick"
    },
    correctAnswer: "d"
  },
  {
    question: "Javascript file has an extension of:",
    answers: {
      a: ".html",
      b: ".js",
      c: ".css",
      d: "All of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Javascript file has an extension of:",
    answers: {
      a: ".html",
      b: ".js",
      c: ".css",
      d: "All of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Javascript file has an extension of:",
    answers: {
      a: ".html",
      b: ".js",
      c: ".css",
      d: "All of the above"
    },
    correctAnswer: "b"
  }
];
console.log(myQuestions);
//
// Loop thru questions
// 
renderQuestions(questions, quizContainer);

function renderQuestions() {
  // Clear todoList element and update todoCountSpan
  
  var numQuestions = myQuestions.length;
  var numOptions = 4.0;
console.log("# of questions " + numOptions);
//
  // Render a new li for each question
  for (var i = 0; i < numQuestions; i++) {
    var optionsList = [];
    var li = [];
    for (var j = 0; j < numOptions; j++) {
      li[j] = document.createElement("li");
    }
    li.textContent = myQuestions[i];;
    optionsList.appendChild(li);
  }
}

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});