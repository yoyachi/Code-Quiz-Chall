// variables
var question = [{ q: 'test', choices: ['1', '2', '3rdChoice', '4'], a: '3rdChoice'}]
var questionIndex = 0
//var startBtn = document.getElementById('start-quiz');
var startGameEl = document.getElementById('startGame')
var startSectionEl = document.getElementById('start')
var questionsSectionEl = document.getElementById('questions')

var questionEl = document.getElementById('question')
var button1El = document.getElementById('button1')
var button2El = document.getElementById('button2')
var button3El = document.getElementById('button3')
var button4El = document.getElementById('button4')

// events
startGameEl.addEventListener('click', startGame)

// saveScore event




var TimerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var message ='Your time is out!'


// create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);



var body = document.body;
var h1El = document.createElement('h1');
//We add text using textContent 
h1El.textContent = 'Coding Quiz Challenge'

h1El.setAtrribute('style', 'margin:auto; width:50%; text-align:center;');

body.appendChild(h1El);

var h1El = document.createElement('h1');
h2El.textContent = 'Try to answer the following code-related question, withing the time limit.  Keep in mind that incorrect answer will penalize your score/time by ten seconds.'


// TODO: Create an array with five question objects
// The array of questions for the game.
/*var questions = [
    { q: 'Commonly used data types Do Not Include:', 
    choices=['strings','booleans','alerts','numbers'],
    a: 'alerts' },

    { q: ' The condition in an if/else statement is enclosed with ______', 
    choices=['quotes', 'curly brackets', 'parenthesis', 'square bracket'],
    a: 'curly brackets' },

    { q: 'A very useful tool used during development  and debugging for printing content to the debugger is:', 
    choices=['strings','booleans','alerts','numbers'],
    a: 'console log' },

    { q: 'String value must be enclosed within _______ when being assingned to variables.', 
    choices=['comas', 'curly brackets', 'quotes', 'parenthesis'],
    a: 'quotes' },

    { q: 'Arrays in JavaScript can be used to store ______.', 
    choices=['numbers and strings','other arrays','booleans', 'all of the above'],
    a: 'all of the above' },

    
  ];
  */


// Create a variable to keep track of the score
// We start the game with a score of 0.
var score = 0;

//we need a event when user click start button

// Iterate over the questions array and display each question in a confirmation box
// Loop over every question object
for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);
  
// Check the user's answer against the correct answer
  // Compare answers
  if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // Increase score
    score++;
    

// Alert the user if they are correct or wrong. Increment the score accordingly
    // Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}
// At the end of the game, alert the user with the final score
// Show total at end
alert('You got ' + score + '/' + questions.length);

//logic.
function startGame() {
startSectionEl.setAttribute("class","hide")
questionsSectionEl.removeAttribute("class")
getQuestions()
startTimer()

// hide the startGame
}





function startTimer() {
// 

function getQuestions() {
  var question = questions[questionIndex].q
  var c1 = questions[questionIndex].choices[0]
  var c2 = questions[questionIndex].choices[1]
  var c3 = questions[questionIndex].choices[2]
  var c4 = questions[questionIndex].choices[3]

  questionEl.textContent = question
  button1El.textContent = c1
  // events
  button1El.addEventListener('click', checkAnswer)

  button2El.textContent = c2
  button2El.addEventListener('click', checkAnswer)

  button3El.textContent = c3
  button3El.addEventListener('click', checkAnswer)

  button4El.textContent = c4
  button4El.addEventListener('click', checkAnswer)
}

function checkAnswer(event) {
  console.log(event.target.innerText)
  var usersChoice = event.target.innerText
  if (usersChoice === questions[questionIndex].a) {
    alert('correct!')
  } else {
    alert('wrong')
  }
  questionIndex += 1
  
  // if more questions 
  getQuestions()
  // if no more questions
  endGame()
}

function stopTimer() {


}

function endGame() {
  questionsSectionEl.setAttribute("class","hide")
  // endSectionEl.removeAttribute("class")
  // stop the timer

  // show the save part of game

}