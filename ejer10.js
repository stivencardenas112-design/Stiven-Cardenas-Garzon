function tresArreglos(){ //Ejercicio 10
    num = []
    par = []
    impar = []

    resultado1 = document.getElementById("resultado11")
    resultado2 = document.getElementById("resultxt11")
    resultadoImpar = document.getElementById("resultxtImpar")
    resultadoPar = document.getElementById("resultxtPar")

    for(i = 0; i < 20; i++){

        numAletorio = Math.floor(Math.random() * 101);
        num.push(numAletorio)

        if(numAletorio % 2 == 0){
            par.push(numAletorio)
        }
        else{
            impar.push(numAletorio)
        }
    }

    resultado2.innerHTML = "Arreglo aleatorio generado: " + num + "<br>";
    resultadoPar.innerHTML = "Los numeros pares son: " + par + "<br>";
    resultadoImpar.innerHTML = "Los numeros impares son: " + impar + "<br>"
}