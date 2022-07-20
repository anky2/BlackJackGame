let firstCard = 10
let secondCard = 8
let cards=[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

messageEl = document.querySelector("#message-el")
sumEl = document.querySelector("#sum-el")
cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    cardsEl.textContent = "Cards: "+ cards[0] + " " + cards[1]
    sumEl.textContent="Sum: "+sum 
    messageEl.textContent = message
      
}

function newCard(){
    console.log("New Card")

    let card=3
    sum+=card

    renderGame()

}