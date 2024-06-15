const increaseBtn = document.getElementById('increaseButton')
const resetBtn = document.getElementById('resetButton')
const decreaseBtn = document.getElementById('decreaseButton')
const counterLabel = document.getElementById('counterLabel')
let count = 0

increaseBtn.onclick = function(){
    count++
    counterLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--
    counterLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0
    counterLabel.textContent = count
}