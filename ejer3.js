function unidadesDecenas(){
    n1 = parseInt(document.getElementById("decena").value)

    resUnidad = document.getElementById("resultado4.1")
    resDecena = document.getElementById("resultado4.2")

    txtUnidad = document.getElementById("resultxt4.1")
    txtDecena = document.getElementById("resultxt4.2")

    unidad = n1 % 10
    decena = (n1 - unidad) / 10

    resUnidad.value = unidad
    resDecena.value = decena

    txtUnidad.textContent = "Unidad: " + unidad
    txtDecena.textContent = "Decena: " + decena
}