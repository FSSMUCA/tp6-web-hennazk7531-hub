const form = document.getElementById("form-calcul");
const erreur = document.getElementById("erreur");
const resultat = document.getElementById("resultat");
const listeHistorique = document.getElementById("liste-historique");

let historique = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    erreur.textContent = "";
    resultat.textContent = "";

    let a = document.getElementById("nombreA").value;
    let b = document.getElementById("nombreB").value;
    let op = document.getElementById("operation").value;

    // Validation
    if (a === "" || b === "") {
        erreur.textContent = "Veuillez remplir les deux nombres.";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        erreur.textContent = "Division par zéro interdite.";
        return;
    }

    // Calcul
    let res = 0;
    switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = a / b; break;
    }

    resultat.textContent = "Résultat : " + res;

    // Ajouter à l'historique
    let operationTexte = `${a} ${op} ${b} = ${res}`;
    historique.push(operationTexte);

    afficherHistorique();
});

function afficherHistorique() {
    listeHistorique.innerHTML = "";

    historique.forEach(op => {
        const li = document.createElement("li");
        li.textContent = op;
        listeHistorique.appendChild(li);
    });
}
