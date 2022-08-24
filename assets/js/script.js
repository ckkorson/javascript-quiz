// declare variables that coorespond to different areas of the page, ids, or classes
let allButton = document.querySelector(".all-button")
let button1 = document.querySelector("#button1")
let main = document.querySelector("main")
let questionNumber = document.querySelector("#main-header")
let questionText = document.querySelector("#main-text")
let timer = document.querySelector("#time-left")
let viewHighScore = document.querySelector("#high-score")
// create three new buttons and assign them to a variall
let button2 = document.createElement("button")
let button3 = document.createElement("button")
let button4 = document.createElement("button")
// create set inital value of variable to be used later in js
// gameStart variable will be used through the code to track button presses
let rightAnswer = 0
let gameStart = 0
let timeLeft = 0
let x = 0
// make the form element not visible yet
document.getElementById("initial-form").style.display = "none"
// create object for the quiz questions
// object includes question #, question, 4 different answers, and the correct answer
let questions = {
    qNum: [1,2,3],
    qText: ["Who is the best coder?","What do you use to declare arrays?",
    "What do you use to give an element an attribute with Javascript?"],
    optionA: ["Caleb","()",".querySelector"],
    optionB: ["Emily","{}",".setAttribute"],
    optionC: ["Atlas","[]",".createElement"],
    optionD: ["Brewer","||",".appendChild"],
    correct: ["Caleb","[]",".setAttribute"],
}
// creates the timer countdown function
// countdown starts and 10 seconds and counts down in 1 second intervals
// timeInterval is cleared either by answering all question or running out of time
function countdown() {
    timeLeft = 10
    timer.innerHTML = timeLeft
    let timeInterval = setInterval(function(){
      timeLeft--
      timer.innerHTML = timeLeft
      if (timeLeft == 0) {
        clearInterval(timeInterval)
        gameOver()
      }
      else if (gameStart == 2) {
        clearInterval(timeInterval)
      }
    },1000)
  }
// create function to start the game and add the question and the new buttons for answers
function addQuestions() {
    viewHighScore.style.display = "none"
    main.appendChild(button2)
    main.appendChild(button3)
    main.appendChild(button4)
    button2.classList.add("all-button")
    button3.classList.add("all-button")
    button4.classList.add("all-button")
    button2.setAttribute("id","button2")
    button3.setAttribute("id","button3")
    button4.setAttribute("id","button4")
    questionNumber.innerHTML = ("Question " + questions.qNum[x])
    questionText.innerHTML = questions.qText[x]
    button1.innerHTML = questions.optionA[x]
    button2.innerHTML = questions.optionB[x]
    button3.innerHTML = questions.optionC[x]
    button4.innerHTML = questions.optionD[x]
    gameStart++
    x++
}
// replaces the last question with a new question
function newQuestions() {
    questionNumber.innerHTML = ("Question " + questions.qNum[x])
    questionText.innerHTML = questions.qText[x]
    button1.innerHTML = questions.optionA[x]
    button2.innerHTML = questions.optionB[x]
    button3.innerHTML = questions.optionC[x]
    button4.innerHTML = questions.optionD[x]
    x++
}
// function to tell user that quiz is complete
// this will run when user completes all question or runs out of time
function gameOver() {
    button2.remove()
    button3.remove()
    button4.remove()
    questionNumber.innerHTML = "Quiz is complete."
    questionText.innerHTML = "Press the next button below to see your score."
    button1.innerHTML = "Next"
    gameStart = 2
}
// function to show the user their score on the quiz and give them a chance to record the initials
function showScore() {
    questionNumber.innerHTML = ("Your Score is: " + rightAnswer + " out of " + questions.qNum.length)
    questionText.innerHTML = "Enter your initials in textbox below to record you score, then press submit"
    button1.innerHTML = "Submit"
    document.getElementById("initial-form").style.display = "flex"
    gameStart++
}
// this function resets the quiz back to start page
// it also checks to see if the user scored a new high score and records it in loca storage if they did
function resetQuiz() {
    if (localStorage.getItem("highScore") <= rightAnswer) {
        localStorage.setItem("highScore",rightAnswer)
        localStorage.setItem("initial",document.getElementById("input-text").value)
    }
    viewHighScore.style.display = "flex"
    document.getElementById("input-text").value
    document.getElementById("initial-form").style.display = "none"
    questionNumber.innerHTML = "Coding Quiz Challenge"
    questionText.innerHTML = "Try to answer the following coding questions within the time limit. When you are done you can record you initials with your score."
    button1.innerHTML = "Start Quiz"
    x = 0
    rightAnswer = 0
    gameStart = 0
    timer.innerHTML = 0
    document.getElementById("input-text").value = ""
}
// adds eventListeners to button1 and establishes what to do based off the gameStart variable
button1.addEventListener("click", function() {
    if (gameStart == 2) {
        showScore()
    }
    else if (gameStart == 3) {
        resetQuiz()
    }
    else if (gameStart == 0) {
        addQuestions()
        countdown()
    }
    else if (x == questions.qNum.length) {
        x--
        if (questions.optionA[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        gameOver()
    }
    else if (gameStart == 1) {
        x--
        if (questions.optionA[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        console.log(rightAnswer)
        newQuestions()
    }
})
// adds eventListeners to button2 and establishes what to do based off the gameStart variable
button2.addEventListener("click", function() {
    if (x == questions.qNum.length) {
        x--
        if (questions.optionB[x] == questions.correct[x]) {
            rightAnswer++
        }
        console.log(rightAnswer)
        x++
        gameOver()
    }
    else if (gameStart == 1) {
        x--
        if (questions.optionB[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        console.log(rightAnswer)
        newQuestions()
    }
})
// adds eventListeners to button3 and establishes what to do based off the gameStart variable
button3.addEventListener("click", function() {
    if (x == questions.qNum.length) {
        x--
        if (questions.optionC[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        gameOver()
    }
    else if (gameStart == 1) {
        x--
        if (questions.optionC[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        console.log(rightAnswer)
        newQuestions()
    }
})
// adds eventListeners to button4 and establishes what to do based off the gameStart variable
button4.addEventListener("click", function() {
    if (x == questions.qNum.length) {
        x--
        if (questions.optionD[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        gameOver()
    }
    else if (gameStart == 1) {
        x--
        if (questions.optionD[x] == questions.correct[x]) {
            rightAnswer++
        }
        x++
        console.log(rightAnswer)
        newQuestions()
    }
})
// add an event listener to the View high score text that will show the user the current high score.
viewHighScore.addEventListener("click", function() {
    questionNumber.innerHTML = "Current High Score"
    questionText.innerHTML = (localStorage.getItem("highScore") + " out of " + questions.qNum.length +
    " by " + localStorage.getItem("initial"))
    button1.innerHTML = "Back"
    gameStart = 3
})