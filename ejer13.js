function arreglo10a20(){
    arr = [];

    // Generar arreglo
    for(i = 0; i < 10; i++){
        num = Math.floor(Math.random() * 11) + 10;
        arr.push(num);
    }

    original = [...arr]; // guardar copia para mostrar

    // Eliminar múltiplos de 3 del mismo arreglo
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 3 == 0){
            arr.splice(i, 1);
            i--; // importante para no saltar elementos
        }
    }

    document.getElementById("r11").innerHTML =
        "Original: " + original + "<br>" +
        "Modificado (sin múltiplos de 3): " + arr;
}