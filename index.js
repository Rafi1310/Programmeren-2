let button = document.querySelector('button');
let foto = document.querySelector('#foto')
let etenKnop = document.querySelector('#etenKnop')
let drinkKnop = document.querySelector('#drinkKnop')
let slaapKnop = document.querySelector('#slaapKnop')
const eetAudio = new Audio('audio/eating.mp3')
const drinkAudio = new Audio('audio/drinking.mp3')
const pikaAudio = new Audio('audio/pika.mp3')
const sleepAudio = new Audio('audio/sleep.mp3')
const timer = document.querySelector('#timer')
const resetKnop = document.querySelector('#resetKnop')
let timeLeft = 30
let timerInterval

function changeFoto(){
    if (foto.src.endsWith("img/pikachu_eet.jpg")) {
        foto.src = "img/pikachu.jpg";
    } 
    else {
        foto.src = "img/pikachu.jpg";
    }
    pikaAudio.play()
}
button.addEventListener('click', changeFoto)

function eten(){
    foto.src = 'img/pikachu_eet.jpg';
    console.log('eet')
    eetAudio.play()
    setTimeout(()=>{
        foto.src = 'img/pikachu.jpg'
    }, 2000)
    resetTimer()
}

function drinken(){
    foto.src = 'img/pikachu_drink.jpg';
    console.log('drink')
    drinkAudio.play()
    setTimeout(()=>{
        foto.src = 'img/pikachu.jpg'
    }, 2000)
    resetTimer()
}

function slapen(){
    foto.src = 'img/pikachu_sleep.avif';
    console.log('sleep')
    sleepAudio.play()
    setTimeout(()=>{
        foto.src = 'img/pikachu.jpg'
    }, 5000)
    resetTimer()
}

etenKnop.addEventListener('click', eten)
drinkKnop.addEventListener('click', drinken)
slaapKnop.addEventListener('click', slapen)

function updateTimer(){
    if(timeLeft > 0){
        timeLeft--
        timer.textContent = timeLeft
    }
    else{
        clearInterval(timerInterval)
        foto.src = 'img/pikachu_dood.jpg'
        alert('Pikachu is dood')
    }
}

function startTimer(){
    clearInterval(timerInterval)
    timerInterval = setInterval(updateTimer, 1000)
}

function resetTimer(){
    clearInterval(timerInterval)
    timeLeft = 30
    timer.textContent = timeLeft
    startTimer()
}

resetKnop.addEventListener('click', resetTimer)

startTimer()