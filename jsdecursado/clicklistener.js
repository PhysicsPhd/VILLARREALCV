document.getElementById("boton_color").addEventListener("click",function(){
    console.log("Click sobre color");
    document.body.style.backgroundColor="rgb(255,0,0)";
});

document.getElementById("boton_default").addEventListener("click",function(){
    console.log("Click sobre default");
    document.body.style.backgroundColor="rgb(0,255,0)";
});

document.getElementById("boton_ocultar").addEventListener("click",function(){
    console.log("Click sobre ocultar");
    document.getElementById("demo").style.display="none";
});