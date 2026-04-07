function multiplo(){

    n1 = parseInt(document.getElementById("multiplo1").value) // 10 y
    n2 = parseInt(document.getElementById("multiplo2").value) // finaliza en 50

    resultado1 = document.getElementById("resultado10")
    resultado2 = document.getElementById("resultxt10")

    cant = 0
    m  = 0

    if(n1 > n2){
        temp = n1
        n1 = n2
        n2 = temp
    }
    for(i = n1; i <= n2; i++){ // i = 10 y finaliza en 50 
        if(i % 6 == 0){
            cant++;
            m = m + i + " "
        }
    }

    resultado1.value = "Tiene " + cant + " multiplos"
    resultado2.innerHTML = "Multiplos del " + n1 + " al " + n2 + " Son: <br>" + m
}