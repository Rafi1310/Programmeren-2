let button = document.querySelector('button');
let foto = document.querySelector('#foto')
let etenKnop = document.querySelector('#etenKnop')
let drinkKnop = document.querySelector('#drinkKnop')
const eetAudio = new Audio('audio/eating.mp3')
const drinkAudio = new Audio('audio/drinking.mp3')
const pikaAudio = new Audio('audio/pika.mp3')
const timer = document.querySelector('#timer')
let timeLeft = 30

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
}

function drinken(){
    foto.src = 'img/pikachu_drink.jpg';
    console.log('drink')
    drinkAudio.play()
}

etenKnop.addEventListener('click', eten)
drinkKnop.addEventListener('click', drinken)

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
const timerInterval = setInterval(updateTimer, 1000)