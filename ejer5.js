numeroSecreto = Math.floor(Math.random() * 100);
intentos = 15;
historial = [];

function adivinar(){
    
    num = parseInt(document.getElementById("adivinar").value);
    resultado1 = document.getElementById("LOC");
    resultado2 = document.getElementById("KISS");

    historial.push(num);
    intentos--;

    if (num == numeroSecreto) {
        resultado1.value = "GOOOOOOOOOOL";
        resultado2.innerHTML = "Adivinaste el número " + numeroSecreto + "<br>" + "Intentos usados: " + (15 - intentos) + "<br>" + "Numeros ingresados: " + historial
        return;
    }

    if (intentos == 0) {
        resultado1.value = "Perdiste";
        resultado2.innerHTML = "El número era " + numeroSecreto + "<br>" + "Numeros ingresados: " + historial
        return;
    }

    if (num < numeroSecreto) {
        resultado1.value = "DAME MAAAAS";
    } else {
        resultado1.value = "TE PASASTEEE";
    }

    resultado2.innerHTML = "Intentos restantes: " + intentos + "<br>" + "Numeros ingresados: " + historial
}