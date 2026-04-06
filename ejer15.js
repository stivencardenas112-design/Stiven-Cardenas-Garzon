function oracion(){// Ejercicio 13

    cantidad = []
    frase = []

    frase = document.getElementById("palabra").value
    resultado1 = document.getElementById("resultado14")
    resultado2 = document.getElementById("resultxt14")

    frase = frase.split(" ")
    totalFrase = 0
    for(i = 0; i<frase.length; i++){
        cantidad.push(frase[i].length)
        totalFrase = totalFrase + frase[i].length
    }

    resultado1.value = "Total: "+ totalFrase
    resultado2.innerHTML = "Cantidad de letras por palabra: " + cantidad

}