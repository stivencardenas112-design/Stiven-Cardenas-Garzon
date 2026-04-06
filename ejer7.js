function adivinar(){
    
    num = parseInt(document.getElementById("adivinar").value);
    resultado1 = document.getElementById("resultado6");
    resultado2 = document.getElementById("resultxt6");

    historial.push(num);
    intentos--;

    if (num == numeroSecreto) {
        resultado1.value = "Gano :)";
        resultado2.innerHTML = "Adivinaste el número " + numeroSecreto + "<br>" + "Intentos usados: " + (15 - intentos) + "<br>" + "Numeros ingresados: " + historial
        document.getElementById("btnAdivinar").disabled = true;
        return;
    }

    if (intentos == 0) {
        resultado1.value = "Perdiste";
        resultado2.innerHTML = "El número era " + numeroSecreto + "<br>" + "Numeros ingresados: " + historial
        document.getElementById("btnAdivinar").disabled = true;
        return;
    }

    if (num < numeroSecreto) {
        resultado1.value = "El numero es MAYOR";
    } else {
        resultado1.value = "El numero es MENOR";
    }

    resultado2.innerHTML = "Intentos restantes: " + intentos + "<br>" + "Numeros ingresados: " + historial    
}

