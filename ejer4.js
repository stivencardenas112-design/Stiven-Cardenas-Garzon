function ingrediente(){ //Ejericio 4
    personas = parseInt(document.getElementById("personas").value)
    resultado1 = document.getElementById("resultado5")
    resultado2 = document.getElementById("resultado5.1")
    resultado3 = document.getElementById("resultado5.2")

    papas = personas * 200
    kg = papas/1000
    huevos = kg * 5
    cebolla = kg * 300

    resultado1.innerHTML = "Papas: " + papas + "g"
    resultado2.innerHTML = "Huevos: " + huevos
    resultado3.innerHTML = "Cebollas: " + cebolla + "g"
}
