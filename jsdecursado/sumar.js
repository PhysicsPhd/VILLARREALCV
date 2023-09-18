document.getElementById("boton_suma").addEventListener("click", function(){
    console.log("suma ejecutándose");
    let sumando1=parseFloat(document.getElementById("numero1").value);
    let sumando2=parseFloat(document.getElementById("numero2").value);
    let suma=sumando1+sumando2;
    document.getElementById("resultado").innerHTML=suma;
    document.getElementById("contenedor").style.display="block";
});