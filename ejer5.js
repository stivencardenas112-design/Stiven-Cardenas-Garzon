function areaperi(){
    t= parseInt(document.getElementById("area").value)
    are=t*t
    peri=4*t
    document.getElementById("perimetro").value=peri+" cm"
    document.getElementById("resuarea").value=are+ " cm2"
    texto= document.getElementById("loca").textContent
    document.getElementById("loca").textContent=texto+peri
    texto= document.getElementById("loco").textContent
    document.getElementById("loco").textContent=texto+are
}