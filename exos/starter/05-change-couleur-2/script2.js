/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/


document.addEventListener('keypress', (e) => {
    const touchePressee = e.key.toUpperCase();
    switch (touchePressee) {
        case 'R':
            document.body.className = 'red'
            break;
        case 'V':
            document.body.className = 'green'
            break;
        case 'J':
            document.body.className = 'yellow'
            break;
        case 'B':
            document.body.className = 'blue'
            break;
        default:
            alert("Veuillez presser l'une de ces touches : R, V, B, J.")
    }
})