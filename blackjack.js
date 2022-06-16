let userName = "Muzna Kanwal"

let firstNumber = Math.floor((Math.random()*13)+1)
let secondNumber = Math.floor((Math.random()*13)+1)
let thirdNumber = Math.floor((Math.random()*13)+1)
let hasBlackJack = false
let isAlive = true
let cards = [firstNumber, secondNumber]
let totalSum = 0
// let randomnumber = Math.floor((Math.random()*11)+1)


let callh1 = document.getElementById("welcome")
let callmessage = document.getElementById("message")
let callcards = document.getElementById("cards")
let callsum = document.getElementById("sum")

callh1.textContent += ", " + userName + "!"

function renderGame() {
    totalSum = firstNumber + secondNumber
    document.getElementById("start").disabled = true
    for (let i = 0; i < cards.length; i++)
    callcards.textContent = "Cards: " + cards
    callsum.textContent = "Sum: " + totalSum
    // console.log(cards)

    if (totalSum < 21){
        callmessage.textContent = "Would you like to draw a new card?"
    } else if (totalSum === 21) {
        callmessage.textContent = "Congratulations! You've got BlackJack!"
        document.getElementById("drawNew").disabled = true
        hasBlackJack = true
    } else {
        callmessage.textContent = "Your score went over 21. Better luck next time!"
        isAlive = false
    }
    if (isAlive==true && hasBlackJack==false && document.getElementById("drawNew").disabled == true) {
        callmessage.textContent = "Better luck next time!"
    }
}

function newCard(){
    document.getElementById("drawNew").disabled = true
    cards.push(thirdNumber)
    totalSum = cards.reduce(function(a,b){return a+b;}, 0)
    // console.log(totalSum)
    renderGame()
}

function resetGame() {
    document.getElementById("drawNew").disabled = false
    document.getElementById("start").disabled = false
    callmessage.textContent = "Would you like to play a game?"
    callcards.textContent = "Cards: "
    callsum.textContent = "Sum: "
    firstNumber = Math.floor((Math.random()*13)+1)
    secondNumber = Math.floor((Math.random()*13)+1)
    thirdNumber = Math.floor((Math.random()*13)+1)
    cards.pop()
    totalSum = 0
}

