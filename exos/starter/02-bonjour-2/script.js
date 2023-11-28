/* EXERCICE 2 :
- Ajouter un champ texte dans le HTML qui permet à l'utilisateur d'entrer son prénom
- Au clic sur le bouton,
   - Récupérer le prénom (la valeur du champ prénom)
   - Afficher dans une boîte de dialogue le message
       * "Bonjour, … ! " si la personne a bien entré un prénom
       * "Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?" sinon
- Faire 3 versions d'écriture :
   * 1°) avec une fonction nommée
   * 2°) avec une fonction anonyme
   * 3°) avec une arrow fonction et une expression conditionnelle
*/


/*function firstName() {
    document.getElementById('hello').addEventListener('click', () => {
        const valueReceive = document.getElementById('prenom').value;
        if (valueReceive) {
            alert(`Bonjour, ${valueReceive} !`)
        } else {
            alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?")
        }
    })
}

firstName()*/

// Autre écriture

/*document.getElementById('hello').addEventListener('click', function () {
    const valueReceive = document.getElementById('prenom').value;
    if (valueReceive) {
        alert(`Bonjour, ${valueReceive} !`)
    } else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?")
    }
});*/


// Plus court : écriture ES6 avec expression conditionnelle

document.getElementById('hello').addEventListener('click', () => {
    document.getElementById('prenom').value !== '' ? alert(`Bonjour, ${document.getElementById('prenom').value} !`):alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?");
})



