function invertir(){ //Ejercicio 14
    original = []
    inverso = []
    invertidoReverse = []

    resultado1 = document.getElementById("arregloOriginal")
    resultado2 = document.getElementById("arregloAlgoritmo")
    

    for(i = 0; i<10; i++){
        num = Math.floor(Math.random() * 100)
        original.push(num)
    }

    for(i = original.length - 1; i >= 0; i--){
        inverso.push(original[i])
    }
    invertidoReverse = original.slice().reverse()

    resultado1.innerHTML = "Original: " + original
    resultado2.innerHTML = "Invertido (algortimico): " + inverso + "<br><br>" +"Invertido (reverse): " + invertidoReverse
}