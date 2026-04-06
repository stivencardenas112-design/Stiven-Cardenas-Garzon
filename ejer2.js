function numeros(){
    loc= document.getElementById("loc").value
    limite= document.getElementById("limite").value
for (let i = 1; i < limite ; i++) {
            gur=loc*i
        if(loc % 2 == 0){
            console.log(loc+"*"+i+"="+gur+"par")
        }
        else{
            console.log(loc+"*"+i+"="+gur+"impar")
        }
    }

}


