let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
}

/*if(!score){
    score = {
        wins:0,
        losses:0,
        ties:0
    }
}*/

let isAutoPlay = false
let intervalId

function autoplay(){
    if(!isAutoPlay){
        intervalId = setInterval(() => {
            let playerMove = pickComputerMove()
            playGame(playerMove)
            isAutoPlay = true
        },1000)
        isAutoPlay = true
    }else
    {
        clearInterval(intervalId)
        isAutoPlay = false
    }
    
}

function pickComputerMove(){
    const randomNumber = Math.random()
    let computerMove = ''

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors'
    }
    return computerMove
}

updateScore()

//eventListener for rock button
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock')
})

//eventListener for paper button
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper')
})

//eventListener for scissors button
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors')
})

//eventlistener for autoplay button 
document.querySelector('.js-autoplay-button').addEventListener('click',()=>{
    autoplay()
})

//eventListener for reset button
document.querySelector('.js-reset-button').addEventListener('click',()=>{
    resetButton()
})

//eventListener for keydown
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock')
    }else if(event.key === 'p'){
        playGame('paper')
    }else if(event.key === 's'){
        playGame('scissors')
    }else if(event.key === 'a'){
        autoplay()
    }
})

function resetButton(){
    score.wins = 0
    score.losses = 0
    score.ties = 0
    localStorage.removeItem('score')
    updateScore()
}

function playGame(playerMove){
    const computerMove = pickComputerMove()
    let result = ''

    updateScore()

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie'
        }else if(computerMove === 'paper'){
            result = 'You Lose'
        }else if(computerMove === 'scissors'){
            result = 'You Win'
        }
    }else if(playerMove === 'paper'){ 
        if(computerMove === 'rock'){
            result = 'You Win'
        }else if(computerMove === 'paper'){
            result = 'Tie'
        }else if(computerMove === 'scissors'){
            result = 'You Lose'
        } 
    }else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Lose'
        }else if(computerMove === 'paper'){
            result = 'You Win'
        }else if(computerMove === 'scissors'){
            result = 'Tie'
        }
    }

    if(result === 'You Win'){
        score.wins += 1
    }else if(result === 'You Lose'){
        score.losses += 1
    }else if(result === 'Tie'){
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score))

    updateScore()

    document.querySelector('.js-result').innerHTML = result

    document.querySelector('.js-moves').innerHTML = `You: <img class="image-button1" src="img/${playerMove}.jpg">   -- | | --  <img class="image-button1" src="img/${computerMove}.jpg"> :Computer: `

}

function updateScore(){
    document.querySelector('.js-score').innerHTML =`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`
}