/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

const colorie = {

    init() {
        document.querySelectorAll('input[type=radio]').forEach(i => {
            i.addEventListener('click', (e) => {
                document.body.style.background = e.currentTarget.value;
            })
        })
    }
}

colorie.init()