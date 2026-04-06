function mayorMenor(){

    n1 = parseInt(document.getElementById("mayMen").value)
    n2 = parseInt(document.getElementById("menMay").value)

    resultado1 = document.getElementById("resultado8");
    resultado2 = document.getElementById("resultxt8");

    if(n1 == n2){
        resultado1.value = n1 + " igual a" + n2;
        resultado2.innerHTML = "El numero " + n1 + " es igual que " + n2;
    }
    else if(n1 > n2){
        resultado1.value = n1 + ">" + n2;
        resultado2.innerHTML = "El numero " + n1 + " es mayor que " + n2;
    }
    else{
        resultado1.value = n2 + ">" + n1;
        resultado2.innerHTML = "El numero " + n2 + " es mayor que " + n1;
    }


}