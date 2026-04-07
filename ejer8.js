function factorial(){

    nFacto = parseInt(document.getElementById("numFactorial").value)

    resultado1 = document.getElementById("pex");
    resultado2 = document.getElementById("gato");

    facto = 1
    proceso = " "
    for(i = nFacto; i >= 1; i--){
        facto = facto * i
        proceso = proceso + i + "  *  "
    
    }
    
    resultado1.value = facto
    resultado2.innerHTML = "Resultado: " + proceso + " = " + facto
}
