function calculadora(){ //Ejercicio 15

    n1 = parseFloat(document.getElementById("numCalculadora1").value)
    n2 = parseFloat(document.getElementById("numCalculadora2").value)

    resultado1 = document.getElementById("resultado15")
    resultado2 = document.getElementById("resultxt15")

    operacion = document.querySelector('input[name="operacion"]:checked')

    if(!operacion){
        resultado1.value = "Seleccione operación"
        return
    }

    res = 0

    if(operacion.value == "suma"){
        res = n1 + n2
    }
    else if(operacion.value == "resta"){
        res = n1 - n2
    }
    else if(operacion.value == "multi"){
        res = n1 * n2
    }
    else if(operacion.value == "div"){
        if(n2 == 0){
            resultado1.value = "Error"
            resultado2.innerHTML = "No se puede dividir por 0"
            return
        }
        res = n1 / n2
    }

    resultado1.value = res
    resultado2.innerHTML = "Resultado: " + res
}