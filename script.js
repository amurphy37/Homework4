// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = 165;
var interval;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//TODO add list of questions

var questions = ["What is the HTML tag under which one can write the JavaScript code?", "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
  "Which of the following type of variable is visible everywhere in your JavaScript code?", "Which of the following function of String object combines the text of two strings and returns a new string?",
  "Using _______ statement is how you test for a specific condition.", "To set up the window to capture all Click events, we use which of the following statement?",
  "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.", "The syntax of capture events method for document object is ______________.",
  "The syntax of close method for document object is ______________.", "How would you create a Date object in JavaScript?", "Which is the correct way to write a JavaScript array?"];

var answerA = ["<javascript>", "alertbox(“GeeksforGeeks”);", "global variable", "add()", "Select", "window.captureEvents(Event.CLICK);", "a wrapper", "captureEvents()", "Close(doC.", "dateObjectName = new Date([parameters])", "var txt = new Array(1:'tim',2:'kim',3:'jim')"]; 
var answerB = ["<scripted>", "msg(“GeeksforGeeks”);", "local variable", "merge()", "If", "window.handleEvents (Event.CLICK);", "a link", "captureEvents(args eventType)", "Close(object)", "dateObjectName.new Date([parameters])", "var txt = new Array:1=('tim')2=('kim')3=('jim')"];
var answerC = ["<script>", "msgbox(“GeeksforGeeks”);", "Both of the above.", "concat()", "Switch", "window.routeEvents(Event.CLICK );", "a cursor", "captureEvents(eventType)", "Close(val)", "dateObjectName := new Date([parameters])", "var txt = new Array('tim','kim','jim')"];
var answerD = ["<js>", "alert(“GeeksforGeeks”);", "None of the above.", "append()", "For", "window.raiseEvents(Event.CLICK );", "a form", "captureEvents(eventVal)", "Close()", "dateObjectName Date([parameters])", "var txt = new Array='tim','kim','jim'"];
var correctAnswers = ["btn3","btn4","btn1","btn3","btn2","btn1","btn1","btn3","btn4","btn1","btn3"];
var score = 0;

// Creating function for timer

function setTime() {
  $(document).ready(function(){
  setInterval(function () {
    time--;
    $("#time").text(time + " " + "seconds");

    if (time <= 0) {
      clearInterval(timerInterval);
      // sendMessage();
    }

    }, 1000);
  }
)}
function getQuestion() {
  // update title with current question
  $("#question-title").text(questions[currentQuestionIndex]);

  // clear out any old question choices
  $("#choices").value = "";

  // Grab Answers
  $("#btn1").text(answerA[currentQuestionIndex]);
  $("#btn2").text(answerB[currentQuestionIndex]);
  $("#btn3").text(answerC[currentQuestionIndex]);
  $("#btn4").text(answerD[currentQuestionIndex]);

  // display on the page
  $("#questions").removeClass("hide");
  }

  function questionClick(value) {
  $("#next-btn").removeClass("hide");
  
// check if user guessed wrong and penalize time if incorrect
  if (value != correctAnswers[currentQuestionIndex]) {
    $("#feedback").removeClass("hide");
    $("#feedback").text("Incorrect :(");
    console.log(score);
  }
  // else show correct feedback
  else {
    $("#feedback").removeClass("hide");
    $("#feedback").text("Correct!");
    score++;
    console.log(score)
  }
  
  // check if we've run out of questions

  // if (currentQuestionIndex = 10) {
  //   quizEnd();
  // }

  // else {
  //   var currentQuestionIndex = currentQuestionIndex;
  //   getQuestion();
  // }

  // return score;

  }

 function nextQuestion() {
   $("#next-btn").addClass("hide");
   $("#feedback").addClass("hide");
   currentQuestionIndex++ 
   getQuestion();
 } 


function quizEnd() {
  $(document).ready(function(){
  // stop timer
  var timerIneterval = setInterval(function () {
    timerEl.textContent = time + "seconds";
  })
  clearInterval(timerInterval);

  // show end screen
  $("end-screen").removeClass("hide");

  // show final score
  $("final-score").text(score);


  // hide questions section
  $(questionsEl).addClass("hide");

  }
)}

function startQuiz() {
  $(document).ready(function(){
  // hide start screen
  $("#start-screen").css("display", "none");
  
  // // un-hide questions section
  $("#questions").removeClass("hide");

  // start timer
    function startTimer () {
      $("#time").text(time + " " + "seconds");
      setTime ()
    } 
    startTimer();
    getQuestion();
  }
)}

// function saveHighscore() {
//   // get value of input box
//   var initials = ???

//   // make sure value wasn't empty
//   if (initials !== "") {
//     // get saved scores from localstorage, or if not any, set to empty array


//     // format new score object for current user

//     // save to localstorage


//     // redirect to next page

//   }
// }


// // // user clicks button to submit initials

// // // user clicks button to start quiz


// //

