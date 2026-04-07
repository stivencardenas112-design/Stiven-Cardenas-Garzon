function triangulo(){ //Ejercicio 12
    a = parseFloat(document.getElementById("lado1").value)
    b = parseFloat(document.getElementById("lado2").value)
    c = parseFloat(document.getElementById("lado3").value)

    resultado1 = document.getElementById("resultado13")
    resultado2 = document.getElementById("resultxt13")

    if(a + b <= c || a + c <= b || b + c <= a){
        resultado1.value = "No es triángulo"
        resultado2.innerHTML = "Los lados no cumplen la condición"
        return
    }

    tipo = ""
    if(a == b && b == c){
        tipo = "Equilátero"
    }
    else if(a == b || a == c || b == c){
        tipo = "Isósceles"
    }
    else{
        tipo = "Escaleno"
    }
    heron = (a + b + c) / 2
    area = Math.sqrt(heron * (heron - a) * (heron - b) * (heron - c))

    resultado1.value = tipo
    resultado2.innerHTML = "Área: " + area.toFixed(2)
}