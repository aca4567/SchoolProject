// Définir la durée du compte à rebours en minutes
var duration = 5;
var DivIderror = document.getElementById('error');

// Calculer la date limite pour le compte à rebours
var countDownDate = new Date().getTime() + (duration * 60 * 1000);

// Mettre à jour le compte à rebours chaque seconde
var x = setInterval(function() {

// Obtenir la date et l'heure actuelles
var now = new Date().getTime();

// Calculer la distance entre la date limite et la date actuelle
var distance = countDownDate - now;

// Calculer les minutes et secondes restantes
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Afficher le compte à rebours dans l'élément avec l'id "countdown"
var countDown = document.getElementById("countdown");
if (countDown) {
    countDown.innerHTML = minutes + " m " + seconds + " s ";
}
// Si le compte à rebours est terminé, afficher un message
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Temps écoulé";
}

if (DivIderror) {
    if (DivIderror.innerHTML == "true") {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Bravo !";
    }
}
}, 1000);