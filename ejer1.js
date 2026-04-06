function numeros(l){
    t=0
    for (let i = 0; i < l ; i++) {
        nota=parseFloat(prompt("ingrese nota"+i+1))
        t+=nota
        console.log("notas ingresadas"+nota)
        
    }
    console.log("nota definitiva"+(t/l));
}

n= parseInt(prompt("ingrese numero"))
numeros(n);


