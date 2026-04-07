function fibonacci (){
    numer = parseInt(document.getElementById ("fibonacci").value)
    x = 0
    y = 1
    //z = 1
    serie = "0 1 "
    perro= document.getElementById ("resulfibo")

    for (i = 1; i < numer; i++){
        z= x+y //1 2 3
        serie = serie + z + " "
        x=y //1 
        y=z //1


    }
    perro.innerHTML= serie

}