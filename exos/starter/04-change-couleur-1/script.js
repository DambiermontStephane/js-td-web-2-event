/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const red = document.getElementById('red');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

red.addEventListener('click', (e) => {
    document.body.style.background = 'rgb(255,0,0)'
})

green.addEventListener('click', (e) => {
    document.body.style.background = 'rgb(0,255,0)'
})

yellow.addEventListener('click', (e) => {
    document.body.style.background = 'rgb(255,255,0)'
})

blue.addEventListener('click', (e) => {
    document.body.style.background = 'rgb(0,0,255)'
})
