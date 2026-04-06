function sumar(){
    N1= parseInt(document.getElementById("num1").value)
    N2= parseInt(document.getElementById("num2").value)
    suma=N1+N2
    document.getElementById("resultado").value=suma
    texto= document.getElementById("resultexto").textContent
    document.getElementById("resultexto").textContent=texto+suma
}