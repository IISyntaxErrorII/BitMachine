let option = document.getElementById("chosen")
let start = document.getElementById("start")
let display = document.getElementById("display")
let menu = document.getElementById("menu")
let result = document.getElementById("result")
let opponentRandomBlock = document.getElementById("opponentRandom")
let option2 = document.getElementById("option2")
let continueBtn = document.getElementById("continue")
const decision = ["👊","🤚","✂️"]
const selector = document.getElementById("selector")
let streak = 0
let scoreDisplay = document.getElementById("score")
let score = 0
let isAlive = false
let messageBlock = document.getElementById("message")
let message = ""
function render(input) {
    option.value = input 
    continueBtn.style.display = "block"
}
function startGame(){
    let random = Math.floor(Math.random()*3)
    let opponentRandom = decision[random]
    isAlive = true
    if (
        opponentRandom === option.value
    ) {
        message = "It's a draw!"
    } else if (
        (opponentRandom === decision[0] && option.value === decision[2] ||
        (opponentRandom === decision[1] && option.value === decision[0]) ||
        (opponentRandom === decision[2] && option.value === decision[1]))
    ) {
        message = "You've lost!"
        streak = 0
        score--
        scoreDisplay.textContent = "score: " + score
    } else {
        if(streak > 1) {
        streak++
        message ="You've won!!!"
        score += Math.floor(1.001 * streak)
        scoreDisplay.textContent = "score: " + score +" / "+ streak + "   🔥"
}
        else{
        streak++
        message ="You've won!!!"
        score++
        scoreDisplay.textContent = "score: " + score +" / "+ streak + "   🔥"
        }
    }
    messageBlock.textContent = message
    opponentRandomBlock.textContent = opponentRandom
    option2.textContent = option.value

    menu.style.display ="none"
    result.style.display = "block"   
    selector.style.display ="none"
}
function goBack(){
    menu.style.display ="block"
    result.style.display = "none"
    selector.style.display ="grid"
}
