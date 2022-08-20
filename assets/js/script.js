let allButton = document.querySelector(".all-button")
let button1 = document.querySelector("#button1")
let main = document.querySelector("main")
let questionNumber = document.querySelector("#main-header")
let questionText = document.querySelector("#main-text")
let button2 = document.createElement("button")
let button3 = document.createElement("button")
let button4 = document.createElement("button")
let rightAnswer = 0
let wrongAnswer = 0
let gameStart = 0

let x = 0

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

function addQuestions() {
    gameStart = true
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

function newQuestions() {
    questionNumber.innerHTML = ("Question " + questions.qNum[x])
    questionText.innerHTML = questions.qText[x]
    button1.innerHTML = questions.optionA[x]
    button2.innerHTML = questions.optionB[x]
    button3.innerHTML = questions.optionC[x]
    button4.innerHTML = questions.optionD[x]
    x++
}

function gameOver() {
    button2.remove()
    button3.remove()
    button4.remove()
    questionNumber.innerHTML = "Quiz is complete."
    questionText.innerHTML = "Press the next button below to see your score."
    button1.innerHTML = "Next"
    gameStart++
}

function showScore() {
    questionNumber.innerHTML = ("Your Score is: " + rightAnswer + " out of " + questions.qNum.length)
}

button1.addEventListener("click", function() {
    if (gameStart == 2) {
        showScore()
    }
    else if (gameStart == 0) {
        addQuestions()
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