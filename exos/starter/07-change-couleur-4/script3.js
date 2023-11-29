/*
EXERCICE 6 : Change couleur (4) - v3
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 3 : version 2 + on parcourt les boutons avec une boucle foreach pour leur ajouter leur addEventListener
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