function porceiva(){
    p1= parseFloat(document.getElementById("precio").value)
    p2= parseFloat(document.getElementById("iva").value)
    r=p1 * (p2/100)
    sum=p1+r
    document.getElementById("resul").value=sum
    textor= document.getElementById("loc").textContent
    document.getElementById("loc").textContent=textor+sum
}