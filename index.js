let button = document.querySelector('button');
let foto = document.querySelector('#foto')
let etenKnop = document.querySelector('#etenKnop')
let drinkKnop = document.querySelector('#drinkKnop')
const eetAudio = new Audio('eating.mp3')
const drinkAudio = new Audio('drinking.mp3')

function changeFoto(){
    if (foto.src.endsWith("pikachu_eet.jpg")) {
        foto.src = "pikachu.jpg";
    } 
    else {
        foto.src = "pikachu.jpg";
    }
}
button.addEventListener('click', changeFoto)

function eten(){
    foto.src = 'pikachu_eet.jpg';
    console.log('eet')
    eetAudio.play()
}

function drinken(){
    foto.src = 'pikachu_drink.jpg';
    console.log('drink')
    drinkAudio.play()
}

etenKnop.addEventListener('click', eten)
drinkKnop.addEventListener('click', drinken)